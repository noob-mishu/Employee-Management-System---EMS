import { CalendarIcon, FileTextIcon, DollarSignIcon} from "luicide-react";

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
      value: data.latestPayslip ? `$${data.latestPayslip.netSalary?.toLocaleString()}` : "N/A",
      title: "Latest Payslip",
      subtitle: "Most Recent Payment",
    },
  ];
  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">
          Welcome, {employeeData?.firstName}!
        </h1>

        <p>{employeeData?.position} - {employeeData?.department || "No Department"}</p>
      </div>

    </div>
  )
};

export default EmployeeDashboard;
