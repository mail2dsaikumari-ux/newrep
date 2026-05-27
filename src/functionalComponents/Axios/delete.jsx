import React from "react";
import axios from "axios";

function Delete() {

  const deleteUser = async () => {
    // This function runs when you click the button.
    // async → because we use await inside.
    try {
      const response = await axios.delete(
        "https://jsonplaceholder.typicode.com/users/1"
      );
    // Go to the server, Delete user with ID = 1
      console.log(response.data);
      alert("User deleted successfully!");
    //   If delete works → show success message.
    } catch (error) {
      console.log(error);
      alert("Error deleting user");
    }
  };

  return (
    <div>
      <h3>Delete User</h3>
      <button onClick={deleteUser}>Delete User</button>
      {/* When clicked → deleteUser() runs. */}
    </div>
  );
}

export default Delete;