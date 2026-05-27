import { useState } from "react";
import Login from "./Login";
import HrProfile from "./hrProfile";
import ManagerProfile from "./managerProfile";
import EmployeeProfile from "./employeeProfile";
import AdminProfile from "./adminProfile";

function Profile() {
  const [role, setRole] = useState(() => {
    const token = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");
    return token && storedRole ? storedRole : null;
  });

  const renderProfile = () => {
    switch (role) {
      case "HR":
        return <HrProfile setRole={setRole} />;
      case "Manager":
        return <ManagerProfile setRole={setRole} />;
      case "Employee":
        return <EmployeeProfile setRole={setRole} />;
      case "Admin":
        return <AdminProfile setRole={setRole} />;
      default:
        localStorage.clear();
        return <Login setRole={setRole} />;
    }
  };

  return <>{renderProfile()}</>;
}

export default Profile;
