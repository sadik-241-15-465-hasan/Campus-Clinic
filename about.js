// Loader hide after page load
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.display = 'none';
  }
});

// Dark Mode Toggle
const darkToggle = document.getElementById('darkToggle');
if (darkToggle) {
  darkToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  });

  // Set initial theme from localStorage
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  }
}

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
  });
}

// AOS Animation Init (scroll animation)
AOS.init({
  duration: 1000,
  once: true,
});



// ========= Reviews tab logic =========
// ========= Reviews tab logic =========
document.addEventListener('DOMContentLoaded', () => {

  const items   = document.querySelectorAll('.timeline-item');
  const reviews = document.querySelectorAll('.review-card');

  // fill stars (CSS variable --i)
  reviews.forEach(card => card.querySelector('.stars')
                             .style.setProperty('--i', '100%'));

  // click listener
  items.forEach(item => {
    item.addEventListener('click', () => {
      const idx = item.dataset.index;

      // left list active
      items.forEach(li => li.classList.toggle('active', li === item));

      // right review active
      reviews.forEach(r => r.classList.toggle('active',
                                             r.dataset.index === idx));
    });
  });

});


/*FAQ what people */

const faqs = [
  {
    question: "What services does ProHealth offer?",
    answer: "ProHealth offers a wide range of services including primary care, urgent care, lab tests, vaccinations, wellness check-ups, and chronic disease management."
  },
  {
    question: "How do I schedule an appointment with ProHealth?",
    answer: "You can schedule an appointment by calling our office, using our online portal, or through our mobile app."
  },
  {
    question: "Do you accept insurance?",
    answer: "Yes, we accept most major insurance plans. Please check with your insurance provider to confirm that we are in-network. If you have any questions about insurance or billing, please contact our office at 123-456-7890."
  },
  {
    question: "What should I bring to my appointment?",
    answer: "Please bring a valid ID, your insurance card, a list of current medications, and any previous medical records if applicable."
  },
  {
    question: "How do I request a prescription refill?",
    answer: "You can request a prescription refill through our patient portal, by contacting your pharmacy, or by calling our office directly."
  }
];

const faqContainer = document.getElementById('faq');

faqs.forEach((faq, index) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'rounded-lg border border-gray-200 overflow-hidden shadow-sm';

  const button = document.createElement('button');
  button.className = 'w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50';
  button.setAttribute('data-index', index);

  const text = document.createElement('span');
  text.textContent = faq.question;

  const icon = document.createElement('span');
  icon.className = 'text-blue-500';
  icon.innerHTML = '&#9432;'; // ℹ️

  button.appendChild(text);
  button.appendChild(icon);

  const answer = document.createElement('div');
  answer.className = `p-4 bg-blue-50 text-sm text-gray-700 ${faq.answer ? '' : 'hidden'}`;
  answer.textContent = faq.answer;

  wrapper.appendChild(button);
  wrapper.appendChild(answer);
  faqContainer.appendChild(wrapper);

  button.addEventListener('click', () => {
    answer.classList.toggle('hidden');
  });
});
