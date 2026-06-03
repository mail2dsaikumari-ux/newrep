document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded");

  const output = document.getElementById("output");
  const errorDiv = document.getElementById("error");

  window.getData = function () {
    errorDiv.innerText = "";
    output.innerHTML = "";

    const name = document.getElementById("name").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !username || !email) {
      errorDiv.innerText = "All fields are required";
      return;
    }

    if (!navigator.geolocation) {
      errorDiv.innerText = "Geolocation not supported";
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userData = {
          name,
          username,
          email,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };

        localStorage.setItem("userData", JSON.stringify(userData));
        displayData(userData);
      },
      () => {
        errorDiv.innerText = "Permission denied for Geolocation";
      }
    );
  };

  window.displayData = function (data) {
    output.innerHTML = `
      <h3>Stored Data</h3>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Username:</b> ${data.username}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Latitude:</b> ${data.latitude}</p>
      <p><b>Longitude:</b> ${data.longitude}</p>
    `;
  };

  window.clearData = function () {
    localStorage.removeItem("userData");
    output.innerHTML = "";
    errorDiv.innerText = "";

    document.getElementById("name").value = "";
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
  };
});

