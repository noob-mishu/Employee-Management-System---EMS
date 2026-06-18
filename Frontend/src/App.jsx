import { Toaster } from "react-hot-toast"
import { Navigate, Route, Routes } from "react-router-dom"
import LoginLanding from "./pages/LoginLanding"
import Layout from "./pages/Layout"
import Attendance from "./pages/Attendance"
import Dashboard from "./pages/dashboard"
import Employees from "./pages/Employees"
import Leave from "./pages/Leave"
import PaySlips from "./pages/PaySlips"
import Settings from "./pages/Settings"
import LoginForm from "./components/LoginForm"
import AdminLoginForm from "./components/AdminLoginForm"
import Tasks from "./pages/Tasks"


const App = () => {
  return (
    <>
    <Toaster />
    <Routes>
      <Route path="/login" element={<LoginLanding/>} />
      <Route path="/login/admin" element={<AdminLoginForm role="admin" title="Admin Login" subtitle="Login as an administrator to manage the system" />} />
      <Route path="/login/employee" element={<LoginForm role="employee" title="Employee Login" subtitle="Login as an employee to manage your account" />} />


      <Route element={<Layout/>}>
        <Route path="/attendance" element={<Attendance/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/employees" element={<Employees/>}/>
        <Route path="/leave" element={<Leave/>}/>
        <Route path="/tasks" element={<Tasks/>}/>
        <Route path="/payslips" element={<PaySlips/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Route>

      <Route path="*" element={<Navigate to="/dashboard" replace /> } />
    </Routes>

    
    </>
  )
}

export default App