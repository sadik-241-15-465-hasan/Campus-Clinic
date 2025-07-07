// 🌙 Dark Mode Toggle
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});

// 📁 File Upload Preview
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');
fileInput.addEventListener('change', () => {
  fileList.innerHTML = '';
  Array.from(fileInput.files).forEach(file => {
    const li = document.createElement('li');
    li.textContent = `${file.name} (${Math.round(file.size / 1024)} KB)`;
    fileList.appendChild(li);
  });
});

// ✏️ Profile Edit Logic
const editBtn = document.getElementById('editProfileBtn');
const form = document.getElementById('editProfileForm');
const saveBtn = document.getElementById('saveBtn');
const cancelBtn = document.getElementById('cancelBtn');

const nameField = document.getElementById('nameInput');
const emailField = document.getElementById('emailInput');
const phoneField = document.getElementById('phoneInput');
const ageField = document.getElementById('ageInput');
const genderField = document.getElementById('genderInput');
const bloodField = document.getElementById('bloodInput');

const displayName = document.getElementById('displayName');
const displayEmail = document.getElementById('displayEmail');
const displayPhone = document.getElementById('displayPhone');
const displayExtra = document.getElementById('displayExtra');

editBtn.addEventListener('click', () => {
  form.classList.remove('hidden');

  // Pre-fill current values
  nameField.value = displayName.textContent;
  emailField.value = displayEmail.textContent.replace('Email: ', '');
  phoneField.value = displayPhone.textContent.replace('Phone: ', '');

  const match = displayExtra.textContent.match(/Age: (\d+) \| Gender: (\w+) \| Blood Group: ([\w+-]+)/);
  if (match) {
    ageField.value = match[1];
    genderField.value = match[2];
    bloodField.value = match[3];
  }
});

saveBtn.addEventListener('click', () => {
  displayName.textContent = nameField.value;
  displayEmail.textContent = `Email: ${emailField.value}`;
  displayPhone.textContent = `Phone: ${phoneField.value}`;
  displayExtra.textContent = `Age: ${ageField.value} | Gender: ${genderField.value} | Blood Group: ${bloodField.value}`;
  form.classList.add('hidden');
  showToast();
});

cancelBtn.addEventListener('click', () => {
  form.classList.add('hidden');
});

// 🔔 Toast Notification
function showToast(message = "✅ Profile updated successfully!") {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}

// 📱 Sidebar Toggle on Mobile
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('-translate-x-full');
});
