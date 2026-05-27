import React, { useState } from "react";
import axios from "axios";

function Patch() {
  const [name, setName] = useState("");

  const updateName = async () => {
    try {
      const response = await axios.patch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          name: name,  
        }
      );
    //   Update user with ID = 1,Change only the name field, 
    //   Do not change other data

      console.log(response.data);
      alert("Name updated successfully!"); 
    //    update works- show MessageChannel.
    } catch (error) {
      console.log(error);
      alert("Error updating name");
    }
    // if something fails it shows error
  };

  return (
    <div>
      <h3>Update User Name (PATCH)</h3>

      <input
        type="text"
        placeholder="Enter New Name"
        onChange={(e) => setName(e.target.value)}
        // when we type, the value will saved in name
      />

      <button onClick={updateName}>Update Name</button>
      {/* when we click, it will updateName and run  */}
    </div>
  );
}

export default Patch;