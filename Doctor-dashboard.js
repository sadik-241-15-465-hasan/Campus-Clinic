/* ========== Sidebar mobile toggle ========== */
const mobileToggle = document.getElementById('mobileToggle');
const sidebar = document.querySelector('.sidebar');
mobileToggle.addEventListener('click', () => sidebar.classList.toggle('hide'));

/* ========== Donut Chart ========== */
const ctx = document.getElementById('donutChart');
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['New', 'Old', 'Total'],
    datasets: [{
      data: [350, 650, 1000],
      backgroundColor: ['#ffbe0b', '#1976ff', '#ff4d4f'],
      borderWidth: 0
    }]
  },
  options: {
    cutout: '60%',
    plugins: { legend: { display: false } }
  }
});

/* ========== Today's Appointment List ========== */
const todayAppointments = [
  { name: 'MJ Mical', diagnosis: 'Health Checkup', time: '09:00', status: 'On Going' },
  { name: 'Sanath Deo', diagnosis: 'Report', time: '12:30' },
  { name: 'Loeare PhanJ', diagnosis: 'Report', time: '01:00' },
  { name: 'Komola Haris', diagnosis: 'Common Cold', time: '01:30' }
];

const tbody = document.getElementById('todayList');
todayAppointments.forEach(a => {
  tbody.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${a.name}</td>
      <td>${a.diagnosis}</td>
      <td>${a.time} PM</td>
      <td>${a.status ? `<span class="badge going">${a.status}</span>` : ''}</td>
    </tr>
  `);
});



/* ========== Appointment Request List ========== */
const requests = [
  { name: 'Maria Sarafat', reason: 'Covid‑19', avatar: 'https://i.ibb.co/4WFqPG8/avatar-female.png' },
  { name: 'Jhon Deo', reason: 'Over sweating', avatar: 'https://i.ibb.co/8MPnGLR/avatar-male.png' }
];

const requestList = document.getElementById('requestList');
requests.forEach(r => {
  requestList.insertAdjacentHTML('beforeend', `
    <li class="request-item">
      <div class="avatar">
        <img src="${r.avatar}" alt="" />
        <span>${r.name}<br /><small>${r.reason}</small></span>
      </div>
      <div class="icons">
        <i class="fas fa-check accept"></i>
        <i class="fas fa-xmark decline"></i>
      </div>
    </li>
  `);
});

/* ========== Mini Calendar ========== */
const monthLabel = document.getElementById('monthLabel');
const calTable = document.getElementById('calendar');

function buildCalendar(date = new Date()) {
  const year = date.getFullYear();
  const month = date.getMonth();
  monthLabel.textContent = date.toLocaleString('en-US', { month: 'long', year: 'numeric' });

  // First day index & total days
  const firstDayIdx = new Date(year, month, 1).getDay();    // 0=Sun
  const totalDays = new Date(year, month + 1, 0).getDate();

  // Build header
  const weekDays = ['Su','Mo','Tu','We','Th','Fr','Sa'];
  calTable.innerHTML = `<thead><tr>${weekDays.map(d=>`<th>${d}</th>`).join('')}</tr></thead><tbody></tbody>`;
  const tbody = calTable.querySelector('tbody');

  let cells = '';
  let day = 1;
  for (let i = 0; i < 6; i++) {
    cells += '<tr>';
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayIdx) {
        cells += '<td class="inactive"> </td>';
      } else if (day > totalDays) {
        cells += '<td class="inactive"> </td>';
      } else {
        const booked = [6, 10, 18, 21].includes(day);   // demo booked dates
        const isToday = day === date.getDate();
        cells += `<td class="${isToday ? 'active' : ''} ${booked ? 'booked' : ''}">${day}</td>`;
        day++;
      }
    }
    cells += '</tr>';
  }
  tbody.innerHTML = cells;
}

buildCalendar();

/* ========== Logout Confirm ========== */
document.getElementById('logoutBtn').addEventListener('click', () => {
  if (confirm('Are you sure you want to logout?')) {
    // redirect to login page (demo)
    window.location.href = 'login.html';
  }
});
