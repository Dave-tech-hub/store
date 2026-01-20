//HIDE/SEE PASSWORD
function togglePassword(id, icon) {
  const input = document.getElementById(id);

      if (input.type === "password") {
      input.type = "text";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
      } 
      else {
      input.type = "password";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
      }
};


// CHECK LOGIN AUTH
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let identifier = document.getElementById("logMail").value.trim();
  let username = document.getElementById("logMail").value;
  let password = document.getElementById("logPassword").value;

  let users = JSON.parse(localStorage.getItem('users'));
  let user = users.find (u => 
    u.email === identifier ||
    u.username === identifier ||
    u.phone === identifier 
  );

  if (user &&
      (user.email === username || user.username === username || user.phone === username) &&
      user.password === password) {
    alert("Login successful!");
    window.location.href = "../home.html";
    localStorage.setItem("loggedIn", 'true');
    localStorage.setItem("currentUser", JSON.stringify(user));
  } 
  else {
    localStorage.setItem("loggedIn", 'false');
    alert("Invalid username/email/phone or password!");
  }
});

