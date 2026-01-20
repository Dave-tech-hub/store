// FORGOT PASSWORD (send code)
document.getElementById("forgetForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let email = document.getElementById("forCode").value;
  let identifier = document.getElementById("forCode").value.trim();
  let users = JSON.parse(localStorage.getItem('users'));
  let user = users.find (u => 
    u.email === identifier ||
    u.username === identifier ||
    u.phone === identifier 
  );


  if (user && (user.email === email || user.phone === email)) {
    // generate fake code
    let code = Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem("resetCode", code);
    localStorage.setItem("currentUser", JSON.stringify(user));
    alert("Your reset code is: " + code); // simulate email
    let users = JSON.parse(localStorage.getItem('users')) || [];
    localStorage.setItem('users', JSON.stringify(users));
    window.location.href = 'reset.html';
  } else {
    alert("Email/Phone not found!");
  }
});