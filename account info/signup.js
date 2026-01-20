function togglePassword(id, icon) {
  const input = document.getElementById(id);
  
  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let email = document.getElementById("mailInput").value.trim();
  let firstName = document.getElementById("firstName").value.trim();
  let lastName = document.getElementById("lastName").value.trim();
  let password = document.getElementById("passwordInput").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (!email || !firstName || !lastName || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // load existing users (safe default to empty array)
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // check duplicate (case-insensitive)
  let used = users.find(u => (u.email || "").toLowerCase() === email);

  if (used) {
    alert("Email already exists!");
    return;
  }

  let user = {
    email: document.getElementById("mailInput").value,
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    password: document.getElementById("passwordInput").value,
  };

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  //Auto Login
  localStorage.setItem("currentUser", JSON.stringify(user));

  alert("Account created successfully!");
  window.location.href = "../home.html";
  localStorage.setItem('loggedIn', 'true');
});