// Dark mode toggle
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});

// Mobile nav toggle
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('hidden');
});

// Chatbot toggle
document.getElementById('chatBtn').addEventListener('click', () => {
  document.getElementById('chatBox').classList.toggle('hidden');
});

// Chatbot reply
document.getElementById('chatInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const msg = this.value.toLowerCase();
    const reply = document.getElementById('chatReply');
    if (msg.includes('ambulance')) {
      reply.textContent = '🚑 Our ambulance is available 24/7.';
    } else if (msg.includes('appointment')) {
      reply.textContent = '📅 You can book appointments via the appointment section.';
    } else {
      reply.textContent = '🤖 Please contact support for help.';
    }
    this.value = '';
  }
});

// FAQ toggle
document.querySelectorAll('.toggle-faq').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.nextElementSibling.classList.toggle('hidden');
  });
});

// Stat counters
let count = 0;
const patients = document.getElementById('patientsCount');
const interval = setInterval(() => {
  if (count < 1200) {
    count += 10;
    patients.textContent = `${count}+`;
  } else {
    clearInterval(interval);
  }
}, 30);
document.getElementById('supportCount').textContent = '24/7';

// Dynamic service cards
const services = [
  {
    name: "Emergency Treatment",
    description: "24/7 emergency response team ready to support critical conditions.",
    category: "Outdoor", days: "Mon - Sun", status: "Open",
    button: { label: "Call Now", iconClass: "fas fa-phone", href: "tel:+880123456789" }
  },
  {
    name: "Ambulance Service",
    description: "Fast ambulance support within campus and nearby areas.",
    category: "Outdoor", days: "Mon - Sun", status: "Open",
    button: { label: "Call Now", iconClass: "fas fa-phone", href: "tel:+880987654321" }
  },
  {
    name: "Online Medical Shop",
    description: "Order medicines online delivered to your doorstep.",
    category: "Online", days: "Mon - Sat", status: "Open",
    button: { label: "Shop Now", iconClass: "fas fa-shopping-cart", href: "medical-shop.html" }
  },
  {
    name: "Doctor Consultation",
    description: "Book appointments with our experienced doctors online.",
    category: "Outdoor", days: "Mon - Fri", status: "Open",
    button: { label: "Book Appointment", iconClass: "fas fa-calendar-check", href: "index.html#appointment" }
  }
];

function renderServices() {
  const grid = document.getElementById('servicesGrid');
  const search = document.getElementById('searchInput').value.toLowerCase();
  const category = document.getElementById('categoryFilter').value;
  grid.innerHTML = '';

  const filtered = services.filter(s => {
    return (s.name.toLowerCase().includes(search) || s.description.toLowerCase().includes(search)) &&
           (category === '' || s.category === category);
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="col-span-full text-center text-gray-500 dark:text-gray-400">No services found.</p>`;
    return;
  }

  filtered.forEach(s => {
    const div = document.createElement('div');
    div.className = 'bg-white dark:bg-gray-800 rounded-lg p-6 shadow flex flex-col justify-between border-2 border-blue-500';
    let html = `
      <h3 class="text-xl font-semibold mb-2 text-blue-600">${s.name}</h3>
      <p class="mb-3">${s.description}</p>
      <p><strong>Category:</strong> ${s.category}</p>
      <p><strong>Days:</strong> ${s.days}</p>
      <p><strong>Status:</strong> ${s.status}</p>
    `;
    if (s.button) {
      html += `<a href="${s.button.href}" class="service-button"><i class="${s.button.iconClass}"></i> ${s.button.label}</a>`;
    }
    div.innerHTML = html;
    grid.appendChild(div);
  });
}

document.getElementById('searchInput').addEventListener('input', renderServices);
document.getElementById('categoryFilter').addEventListener('change', renderServices);
renderServices();
