// doctor.js

// Dummy data for doctors
const doctors = [
  {
    id: 1,
    name: "Dr. Ahmed Hossain",
    title: "MD, Cardiologist",
    specialty: "Cardiology",
    department: "Cardiology",
    schedule: "Tue, Thu - 11AM to 3PM",
    phone: "+880171234561",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    appointmentsThisWeek: 8,
    status: "Available",
    rating: 3.6,
    bio: "Dr. Ahmed has expertise in cardiology and over 19 years of experience.",
    location: "Room 305, Cardiology Dept.",
    consultationTypes: ["In-person", "Online"],
    languages: ["English"],
    certifications: ["Certified Cardiology Specialist"],
    social: {}
  },
  {
    id: 2,
    name: "Dr. Fatima Begum",
    title: "MBBS, Dermatologist",
    specialty: "Dermatology",
    department: "Dermatology",
    schedule: "Mon, Wed, Fri - 10AM to 2PM",
    phone: "+880172234562",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    appointmentsThisWeek: 10,
    status: "Available",
    rating: 4.9,
    bio: "Dr. Fatima has expertise in dermatology and over 13 years of experience.",
    location: "Room 210, Dermatology Dept.",
    consultationTypes: ["Online"],
    languages: ["Arabic", "English"],
    certifications: ["Certified Dermatology Specialist"],
    social: {}
  },
  {
    id: 3,
    name: "Dr. Nasir Uddin",
    title: "PhD, Neurologist",
    specialty: "Neurology",
    department: "Neurology",
    schedule: "Mon - Fri - 9AM to 12PM",
    phone: "+880173234563",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    appointmentsThisWeek: 17,
    status: "Off Duty",
    rating: 3.7,
    bio: "Dr. Nasir has expertise in neurology and over 7 years of experience.",
    location: "Room 410, Neurology Dept.",
    consultationTypes: ["In-person"],
    languages: ["English"],
    certifications: ["Certified Neurology Specialist"],
    social: {}
  },
  {
    id: 4,
    name: "Dr. Jamil Rahman",
    title: "MS, Orthopedic Surgeon",
    specialty: "Orthopedics",
    department: "Orthopedics",
    schedule: "Tue, Thu - 11AM to 3PM",
    phone: "+880174234564",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    appointmentsThisWeek: 20,
    status: "Off Duty",
    rating: 4.3,
    bio: "Dr. Jamil has expertise in orthopedics and over 17 years of experience.",
    location: "Room 112, Orthopedics Dept.",
    consultationTypes: ["Online"],
    languages: ["Hindi"],
    certifications: ["Certified Orthopedics Specialist"],
    social: {}
  },
  {
    id: 5,
    name: "Dr. Samira Akhter",
    title: "MD, Pediatrician",
    specialty: "Pediatrics",
    department: "Pediatrics",
    schedule: "Mon - Fri - 9AM to 12PM",
    phone: "+880175234565",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    appointmentsThisWeek: 18,
    status: "Off Duty",
    rating: 4.2,
    bio: "Dr. Samira has expertise in pediatrics and over 9 years of experience.",
    location: "Room 214, Pediatrics Dept.",
    consultationTypes: ["In-person"],
    languages: ["Arabic", "Bangla"],
    certifications: ["Certified Pediatrics Specialist"],
    social: {}
  },
  {
    id: 6,
    name: "Dr. Tareq Hasan",
    title: "MD, Oncologist",
    specialty: "Oncology",
    department: "Oncology",
    schedule: "Tue, Thu - 11AM to 3PM",
    phone: "+880176234566",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    appointmentsThisWeek: 14,
    status: "Off Duty",
    rating: 4.1,
    bio: "Dr. Tareq has expertise in oncology and over 5 years of experience.",
    location: "Room 320, Oncology Dept.",
    consultationTypes: ["In-person"],
    languages: ["Hindi", "Arabic"],
    certifications: ["Certified Oncology Specialist"],
    social: {}
  },
  {
    id: 7,
    name: "Dr. Lima Chowdhury",
    title: "MBBS, Endocrinologist",
    specialty: "Endocrinology",
    department: "Endocrinology",
    schedule: "Mon, Wed, Fri - 10AM to 2PM",
    phone: "+880177234567",
    image: "https://randomuser.me/api/portraits/women/43.jpg",
    appointmentsThisWeek: 9,
    status: "Off Duty",
    rating: 3.5,
    bio: "Dr. Lima has expertise in endocrinology and over 19 years of experience.",
    location: "Room 308, Endocrinology Dept.",
    consultationTypes: ["In-person", "Online"],
    languages: ["English"],
    certifications: ["Certified Endocrinology Specialist"],
    social: {}
  },
  {
    id: 8,
    name: "Dr. Arif Mahmud",
    title: "MS, ENT Specialist",
    specialty: "ENT",
    department: "ENT",
    schedule: "Mon, Wed, Fri - 10AM to 2PM",
    phone: "+880178234568",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    appointmentsThisWeek: 15,
    status: "Available",
    rating: 4.6,
    bio: "Dr. Arif has expertise in ent and over 11 years of experience.",
    location: "Room 415, ENT Dept.",
    consultationTypes: ["In-person"],
    languages: ["Hindi"],
    certifications: ["Certified ENT Specialist"],
    social: {}
  },
  {
    id: 9,
    name: "Dr. Nusrat Jahan",
    title: "MD, Gynecologist",
    specialty: "Gynecology",
    department: "Gynecology",
    schedule: "Tue, Thu - 11AM to 3PM",
    phone: "+880179234569",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
    appointmentsThisWeek: 6,
    status: "Off Duty",
    rating: 4.6,
    bio: "Dr. Nusrat has expertise in gynecology and over 10 years of experience.",
    location: "Room 119, Gynecology Dept.",
    consultationTypes: ["In-person", "Online"],
    languages: ["Hindi", "English"],
    certifications: ["Certified Gynecology Specialist"],
    social: {}
  },
  {
    id: 10,
    name: "Dr. Rafiq Islam",
    title: "MBBS, General Surgeon",
    specialty: "Surgery",
    department: "Surgery",
    schedule: "Tue, Thu - 11AM to 3PM",
    phone: "+88017102345610",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    appointmentsThisWeek: 5,
    status: "Off Duty",
    rating: 3.6,
    bio: "Dr. Rafiq has expertise in surgery and over 15 years of experience.",
    location: "Room 220, Surgery Dept.",
    consultationTypes: ["In-person"],
    languages: ["Hindi"],
    certifications: ["Certified Surgery Specialist"],
    social: {}
  },
  // Added 2 more doctors as requested
  {
    id: 11,
    name: "Dr. Nabila Chowdhury",
    title: "MD, Rheumatologist",
    specialty: "Rheumatology",
    department: "Rheumatology",
    schedule: "Mon, Wed - 10AM to 2PM",
    phone: "+880191234570",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    appointmentsThisWeek: 7,
    status: "Available",
    rating: 4.8,
    bio: "Dr. Nabila specializes in rheumatology with over 12 years of experience.",
    location: "Room 502, Rheumatology Dept.",
    consultationTypes: ["Online"],
    languages: ["English", "Bangla"],
    certifications: ["Certified Rheumatology Specialist"],
    social: {}
  },
  {
    id: 12,
    name: "Dr. Salman Karim",
    title: "PhD, Psychiatrist",
    specialty: "Psychiatry",
    department: "Psychiatry",
    schedule: "Tue, Thu - 1PM to 5PM",
    phone: "+880192234571",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    appointmentsThisWeek: 9,
    status: "Available",
    rating: 4.4,
    bio: "Dr. Salman has expertise in psychiatry and over 14 years of experience.",
    location: "Room 210, Psychiatry Dept.",
    consultationTypes: ["In-person", "Online"],
    languages: ["English", "Hindi"],
    certifications: ["Certified Psychiatry Specialist"],
    social: {}
  }
];

// Populate department filter options dynamically
const filterDepartment = document.getElementById('filterDepartment');
const uniqueDepartments = [...new Set(doctors.map(doc => doc.department))];
uniqueDepartments.sort();
uniqueDepartments.forEach(dep => {
  const option = document.createElement('option');
  option.value = dep;
  option.textContent = dep;
  filterDepartment.appendChild(option);
});

// Render star rating helper
function renderStars(rating) {
  let starsHTML = '';
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  for (let i = 0; i < fullStars; i++) {
    starsHTML += `<i class="fas fa-star"></i>`;
  }
  if (halfStar) starsHTML += `<i class="fas fa-star-half-alt"></i>`;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += `<i class="far fa-star"></i>`;
  }
  return `<div class="rating text-yellow-400">${starsHTML}</div>`;
}

// Render consultation type icons
function renderConsultationTypes(types) {
  const iconsMap = {
    "Online": `<span class="consult-type"><i class="fas fa-video consult-icon"></i>Online</span>`,
    "In-person": `<span class="consult-type"><i class="fas fa-user-md consult-icon"></i>In-person</span>`
  };
  return types.map(t => iconsMap[t] || '').join('');
}

// Render doctor cards
function renderDoctors() {
  const grid = document.getElementById('doctorGrid');
  const searchVal = document.getElementById('searchInput').value.toLowerCase();
  const filterVal = document.getElementById('filterDepartment').value;

  grid.innerHTML = '';

  const filteredDoctors = doctors.filter(doc => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchVal) ||
      doc.specialty.toLowerCase().includes(searchVal) ||
      doc.department.toLowerCase().includes(searchVal);
    const matchesFilter = filterVal === '' || doc.department === filterVal;
    return matchesSearch && matchesFilter;
  });

  if (filteredDoctors.length === 0) {
    grid.innerHTML = `<p class="col-span-full text-center text-gray-500 dark:text-gray-400">No doctors found.</p>`;
    return;
  }

  filteredDoctors.forEach(doc => {
    const card = document.createElement('article');
    card.className = 'doctor-card p-6 flex flex-col';

    card.innerHTML = `
      <div class="flex items-center space-x-4">
        <img src="${doc.image}" alt="${doc.name}" class="doctor-image" />
        <div class="flex-1">
          <h2 class="text-xl font-semibold text-blue-700 dark:text-blue-400">${doc.name}</h2>
          <p class="text-sm font-medium text-gray-600 dark:text-gray-300">${doc.title}</p>
          ${renderStars(doc.rating)}
        </div>
      </div>

      <p class="bio-text text-gray-700 dark:text-gray-300 mt-4">${doc.bio}</p>

      <p><strong>Specialty:</strong> ${doc.specialty}</p>
      <p><strong>Department:</strong> ${doc.department}</p>
      <p><strong>Schedule:</strong> ${doc.schedule}</p>
      <p class="location">📍 ${doc.location}</p>

      <div class="consultation-types mt-2">${renderConsultationTypes(doc.consultationTypes)}</div>

      <p class="languages mt-2">🗣️ Languages: ${doc.languages.join(', ')}</p>

      <p><strong>Appointments this week:</strong> ${doc.appointmentsThisWeek}</p>

      <p>Status: 
        <span class="badge ${doc.status === 'Available' ? 'available' : 'off-duty'}">
          ${doc.status === 'Available' ? '✅ Available Today' : '❌ Off Duty'}
        </span>
      </p>

      <div class="mt-4 flex flex-wrap items-center gap-2">
        <a href="tel:${doc.phone}" class="contact-btn" aria-label="Call ${doc.name}"><i class="fas fa-phone"></i> Call</a>
        <a href="https://wa.me/${doc.phone.replace(/\D/g,'')}" target="_blank" class="contact-btn" aria-label="WhatsApp ${doc.name}"><i class="fab fa-whatsapp"></i> WhatsApp</a>
        <a href="${doc.social.linkedin || '#'}" target="_blank" class="contact-btn" aria-label="LinkedIn ${doc.name}" ${doc.social.linkedin ? '' : 'hidden'}>
          <i class="fab fa-linkedin-in"></i> LinkedIn
        </a>
        <a href="${doc.social.twitter || '#'}" target="_blank" class="contact-btn" aria-label="Twitter ${doc.name}" ${doc.social.twitter ? '' : 'hidden'}>
          <i class="fab fa-twitter"></i> Twitter
        </a>
      </div>

      <a href="index.html#appointment" class="book-btn mt-6" aria-label="Book appointment with ${doc.name}">
        <i class="fas fa-calendar-check"></i> Book Appointment
      </a>
    `;

    grid.appendChild(card);
  });
}

// Event listeners for search/filter
document.getElementById('searchInput').addEventListener('input', renderDoctors);
document.getElementById('filterDepartment').addEventListener('change', renderDoctors);

// Initial render
renderDoctors();

// Dark mode toggle
document.getElementById('darkToggle').addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});
