import LoginLeftSide from "../components/LoginLeftSide"
import { ArrowRightIcon, ShieldIcon, UserIcon } from "lucide-react"
import { Link } from "react-router-dom"


const LoginLanding = () => {
  const portaloptions = [
    {
    to: "/login/admin",
    title: "Admin Portal",
    description: "Access the admin portal to manage users, view analytics, and configure settings.",
    icon: ShieldIcon,

  },
  {
    to: "/login/employee",
    title: "Employee Portal",
    description: "Access the employee portal to view your profile, submit requests, and manage your tasks.",
    icon: UserIcon,

  }
  ] 

  
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide/>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen">
      <div className="w-full max-w-md animate-fade-in relative z-10">
        {/*Header*/}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-medium text-slate-900 tracking-tight mb-3">Welcome Back</h1>
          <p className="text-slate-500">Please select a portal to continue</p>
        </div>

        {/*Portal Options*/}
        <div className="space-y-4">
          {portaloptions.map((portal) => (
            <Link key={portal.to} to={portal.to} className="group block p-4 bg-slate-50 border border-slate-200 rounded-lg sm:p-6 transition-all duration-300 hover:border-indigo-600 hover:bg-indigo-50">
            <div className="relative z-10 flex items-center justify-between gap-4 sm:gap-5">
                  <h3 className="text-lg font-medium text-slate-800 group-hover:text-gray-600 mb-1 transition-colors">{portal.title}</h3>
                  <ArrowRightIcon className="w-4 h-4 text-slate-800 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
            </Link>
          ))}
        </div>


        {/*Footer*/}
        <div className="mt-12 text-center text-sm text-slate-500">

          <p>©️ {new Date().getFullYear()} MISHU BARUA | All rights reserved.</p>
        </div>

      </div>

      </div>

    </div>
  )
}

export default LoginLanding