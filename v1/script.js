
// Select elements
const message = document.getElementById("message");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

// Function to check authentication
function checkAuth() {
  const token = localStorage.getItem("authToken");

  if (token) {
    // User is logged in
    message.innerText = "Hello User 👋";
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
  } else {
    // User is not logged in
    message.innerText = "Please Login";
    loginBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
  }
}

// Login action
loginBtn.addEventListener("click", () => {
  localStorage.setItem("authToken", "12345abc"); // dummy token
  checkAuth();
});

// Logout action
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("authToken");
  checkAuth();
});

// Check auth on page load
checkAuth();
