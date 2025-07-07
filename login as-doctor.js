const form       = document.getElementById('loginForm');
const email      = document.getElementById('email');
const password   = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passError  = document.getElementById('passError');

form.addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;

  // Email must end with @diu.edu.bd
  if (!email.value.trim().endsWith('@diu.edu.bd')) {
    emailError.classList.remove('hidden');
    valid = false;
  } else {
    emailError.classList.add('hidden');
  }

  // Password ≥6 chars
  if (password.value.length < 6) {
    passError.classList.remove('hidden');
    valid = false;
  } else {
    passError.classList.add('hidden');
  }

  if (valid) {
    alert('Login successful!');
    // window.location.href = 'dashboard.html'; // বাস্তবে রিডাইরেক্ট
  }
});
