import React, { useState } from "react";
import axios from "axios";

function B() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  // Async Arrow Function (Button Click Handler)
  const axiosBtn = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    //   setError(""); // clear previous error
    } catch (err) {
      setError("Something went wrong");
      console.log(err);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <p>To get the data from server click the button below</p>

      <button onClick={axiosBtn}>Click</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul style={{ listStyle: "none" }}>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} -- {user.email}--{user.phone}--{user.website}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default B;