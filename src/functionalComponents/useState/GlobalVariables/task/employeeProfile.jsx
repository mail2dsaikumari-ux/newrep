function EmployeeProfile() {
  function logout() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div>
      <h2>Employee Profile Page</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default EmployeeProfile;
