function ManagerProfile() {
  function logout() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div>
      <h2>Manager Profile Page</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default ManagerProfile;
