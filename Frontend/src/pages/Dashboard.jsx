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
      <div className="text-center text-gray-500">Loading dashboard...</div>
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
