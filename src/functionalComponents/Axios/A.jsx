import React, { useState, useEffect } from "react";
import axios from "axios";

function A() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        setError("Something went wrong");
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>User's List</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.phone} - {user.website}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default A;