import React, { useState } from "react";
import axios from "axios";

function Put() {
  const [name, setName] = useState("");

  const updateData = async () => {
    try {
      const response = await axios.put(
        "https://jsonplaceholder.typicode.com/users/1", 
        {
          name: name,
        }
      );
    //    Update user with ID = 1, Send new data to replace old data, 
    // Wait for server response

      console.log(response.data);
      alert("Data updated successfully!");
    } catch (error) {
      console.log(error);
      alert("Error updating data");
    }
  };

  return (
    <div>
      <h3>Update User Name</h3>

      <input
        type="text"
        placeholder="Enter New Name"
        onChange={(e) => setName(e.target.value)}
        // When we type, it stores the value in name.
      />

      <button onClick={updateData}>Update</button>
    </div>
  );
}

export default Put;