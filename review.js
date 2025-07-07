/*  সহজ ট্যাব‑লজিক: বাম পাশের নাম ক্লিক ➔ সে‑রিভিউ দেখাও */

// DOM রেফারেন্স
const items   = document.querySelectorAll('.timeline-item');
const reviews = document.querySelectorAll('.review-card');

// স্টার অ্যানিমেশন setup (ঐচ্ছিক চমৎকার এফেক্ট)
reviews.forEach(card => {
  card.querySelector('.stars').style.setProperty('--i', '100%');
});

// ইভেন্ট লুপ
items.forEach(item => {
  item.addEventListener('click', () => {
      const idx = item.dataset.index;

      // active ক্লাস ম্যানেজ — বাম টাইমলাইন
      items.forEach(i => i.classList.toggle('active', i === item));

      // active ক্লাস ম্যানেজ — ডানের রিভিউ
      reviews.forEach(r => r.classList.toggle('active', r.dataset.index === idx));
  });
});
