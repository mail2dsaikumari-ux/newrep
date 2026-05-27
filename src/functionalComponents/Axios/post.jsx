import React, { useState } from "react";
import axios from "axios";

function Post() {
  const [name, setName] = useState("");

  const sendData = async () => {
    // This function runs when you click the Send button.
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name: name,
        }
      );
    // Send data to the server, Send the name inside an object, Wait for server response
      console.log(response.data);
      alert("Data sent successfully!");
    //   If everything works → show success message.
    } catch (error) {
      console.log(error);
      alert("Error sending data");
    }
    // If something fails → show error message.
  };

  return (
    <div>
      <h3>Send Data to Server</h3>

      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
    {/* It takes the typed value,Stores it in name */}
      <button onClick={sendData}>Send</button>
    </div>
  );
}

export default Post;