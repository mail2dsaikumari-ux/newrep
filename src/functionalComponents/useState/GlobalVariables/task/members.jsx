function Login({ setRole }) {

  function handleLogin(selectedRole) {
    const fakeToken = "ABC123TOKEN";

    localStorage.setItem("token", fakeToken);
    localStorage.setItem("role", selectedRole);

    setRole(selectedRole);
  }

  return (
    <div>
      <h2>Select Role to Login</h2>

      <button onClick={() => handleLogin("HR")}>HR</button>
      <button onClick={() => handleLogin("Manager")}>Manager</button>
      <button onClick={() => handleLogin("Employee")}>Employee</button>
      <button onClick={() => handleLogin("Admin")}>Admin</button>
    </div>
  );
}

export default Login;
