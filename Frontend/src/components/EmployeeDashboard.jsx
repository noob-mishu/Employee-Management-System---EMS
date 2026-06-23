import { CalendarIcon, FileTextIcon, DollarSignIcon, Link, ArrowRightIcon } from "lucide-react";

const EmployeeDashboard = ({ data }) => {
  const employeeData = data.employee;

  const cards = [
    {
      icon: CalendarIcon,
      value: data.currentMonthAttendance,
      title: "Days Present",
      subtitle: "This Month",
    },

    {
      icon: FileTextIcon,
      value: data.pendingLeaves,
      title: "Pending Leave",
      subtitle: "Waiting for Approval",
    },

    {
      icon: DollarSignIcon,
      value: data.latestPayslip
        ? `$${data.latestPayslip.netSalary?.toLocaleString()}`
        : "N/A",
      title: "Latest Payslip",
      subtitle: "Most Recent Payment",
    },
  ];
  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Welcome, {employeeData?.firstName}!</h1>

        <p>
          {employeeData?.position} -{" "}
          {employeeData?.department || "No Department"}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card card-hover p-5 sm:p-6 relative overflow-hidden group flex items-center justify-between"
          >
            <div>
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-slate-500/70 group-hover:bg-indigo-500/70" />

              <p className="text-sm font-medium text-slate-700">{card.title}</p>

              <p className="text-2xl font-bold text-slate-900 mt-1">
                {card.value}
              </p>
            </div>

            <card.icon className="size-10 p-2.5 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-indigo-50  group-hover:text-indigo-600 transition-colors duration-200" />
          </div>
        ))}


      </div>

      <div>
       <Link to="/employee/attendance" className="btn btn-primary text-sm  hover:underline">
          Mark Attendance <ArrowRightIcon className="inline-block size-4 ml-1" />
        </Link>

        <Link to="/employee/leaves" className="btn btn-primary text-sm  hover:underline ml-4">
          View Leaves <ArrowRightIcon className="inline-block size-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
