import React, { useState } from "react";
import axios from "axios";

function Get() {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    // This function runs when the button is clicked.
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data); 
    //   Store the received data in users
    } catch (error) {
      console.log(error);
      alert("Error getting data");
    }
  };

  return (
    <div>
      <h3>Get Users Data</h3>

      <button onClick={getData}>Get Data</button>
      {/* When we click the button → getData() runs. */}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} -- {user.phone}
            {/* goes through each user, shows their name on the screen,
             and helps React identify each user uniquely. */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Get;