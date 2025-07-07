// create-account.js

function togglePassword(fieldId, icon) {
  const input = document.getElementById(fieldId);
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

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const otp = document.getElementById("otp").value;
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;
  const terms = document.getElementById("terms").checked;

  if (!email.endsWith("@diu.edu.bd")) {
    alert("Only DIU emails are allowed.");
    return;
  }

  if (password !== confirm) {
    alert("Passwords do not match.");
    return;
  }

  if (!terms) {
    alert("You must agree to the Terms & Conditions.");
    return;
  }

  // Simulate OTP check (for demo purposes)
  if (otp !== "123456") {
    alert("Invalid OTP. Please check your email.");
    return;
  }

  // Simulate account creation
  alert("✅ Account created successfully!");
  window.location.href = "login.html";
});
function togglePassword(fieldId, icon) {
  const input = document.getElementById(fieldId);
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
