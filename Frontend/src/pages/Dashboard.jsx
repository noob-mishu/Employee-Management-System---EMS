import React, { useEffect, useState } from "react";
import { dummyEmployeeDashboardData } from "../assets/assets";
const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(dummyEmployeeDashboardData);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

        <p className="mt-4 text-gray-500">Loading dashboard...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center text-red-500">
        Failed to load dashboard data.
      </div>
    );
  }

  if (data.role === "ADMIN") {
    return <div>admin dashboard</div>;
  }

  return <div>employee dashboard</div>;
};

export default Dashboard;
