//HIDE/SEE PASSWORD
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

// RESET PASSWORD
document.getElementById("resetForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let codeInput = document.getElementById("codeInput").value;
  let newPass = document.getElementById("newPassword").value;
  let newPassConfirm = document.getElementById('confirmNewPassword').value;
  let realCode = localStorage.getItem("resetCode");
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let users = JSON.parse(localStorage.getItem('users')) || [];

  if (codeInput === realCode) {
    if(newPass !== newPassConfirm){
      alert('Password do not match!');
      return;
    } else if(newPass === currentUser.password){
        alert('Password must be different from old one!');
        return;
    } else {
        currentUser.password = newPass;
    }

    // remove user from array
    let index = users.findIndex(u => u.email === currentUser.email);
    if (index !== -1) {
      // Replace the old user data with updated one
      users[index] = currentUser;
    }

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.removeItem('currentUser');
    localStorage.removeItem("resetCode");
    alert("Password reset successful! You can now login.");
    window.location.href = 'login.html'
  } else {
    alert("Invalid code!");
  }
});