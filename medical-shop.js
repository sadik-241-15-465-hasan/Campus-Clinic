"use strict";

  const toggleBtn = document.getElementById('darkToggle');
  const htmlElement = document.documentElement;

  // Load theme from localStorage
  if (localStorage.getItem('theme') === 'dark') {
    htmlElement.classList.add('dark');
  }

  toggleBtn.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');

    // Save preference
    if (htmlElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });


/* ======== Medicine Data (১০ টি আইটেম) ======== */
const medicines = [
  {
    id: 1,
    name: "Napa Extra",
    generic: "Paracetamol + Caffeine",
    category: "Tablet",
    brand: "Square",
    price: 15,
    availability: "in-stock",
    image: "/medical-shop.png",
    uses: "Relieves pain and fever",
    sideEffects: "Dizziness, nausea",
    dosage: "1 tablet every 8 hours",
    precautions: "Avoid alcohol",
    manufacturer: "Square Pharmaceuticals",
    expiryDate: "2026-05-31",
  },
  {
    id: 2,
    name: "Renal Syrup",
    generic: "Herbal mixture",
    category: "Syrup",
    brand: "Renata",
    price: 120,
    availability: "out-of-stock",
    image: "/medical-shop.png",
    uses: "Supports kidney function",
    sideEffects: "None known",
    dosage: "10 ml twice daily",
    precautions: "Keep refrigerated",
    manufacturer: "Renata Limited",
    expiryDate: "2025-12-15",
  },
  {
    id: 3,
    name: "Azithromycin Injection",
    generic: "Azithromycin",
    category: "Injection",
    brand: "ACI",
    price: 300,
    availability: "in-stock",
    image: "/medical-shop.png",
    uses: "Bacterial infections",
    sideEffects: "Pain at injection site",
    dosage: "1 injection daily",
    precautions: "Consult doctor",
    manufacturer: "ACI Limited",
    expiryDate: "2027-01-01",
  },
  {
    id: 4,
    name: "Ointment Plus",
    generic: "Antibiotic ointment",
    category: "Ointment",
    brand: "Square",
    price: 90,
    availability: "in-stock",
    image: "/medical-shop.png",
    uses: "Skin infections",
    sideEffects: "Skin irritation",
    dosage: "Apply twice daily",
    precautions: "Avoid eyes",
    manufacturer: "Square Pharmaceuticals",
    expiryDate: "2026-09-30",
  },
    {
    id: 5,
    name: "Ointment Plus",
    generic: "Antibiotic ointment",
    category: "Ointment",
    brand: "Square",
    price: 90,
    availability: "in-stock",
    image: "/medical-shop.png",
    uses: "Skin infections",
    sideEffects: "Skin irritation",
    dosage: "Apply twice daily",
    precautions: "Avoid eyes",
    manufacturer: "Square Pharmaceuticals",
    expiryDate: "2026-09-30",
  },
    {
    id: 6,
    name: "Ointment Plus",
    generic: "Antibiotic ointment",
    category: "Ointment",
    brand: "Square",
    price: 90,
    availability: "in-stock",
    image: "/medical-shop.png",
    uses: "Skin infections",
    sideEffects: "Skin irritation",
    dosage: "Apply twice daily",
    precautions: "Avoid eyes",
    manufacturer: "Square Pharmaceuticals",
    expiryDate: "2026-09-30",
  },
  /* ---- Extra demo items ---- */
  {
    id: 7,
    name: "Zimax 500",
    generic: "Azithromycin",
    category: "Tablet",
    brand: "Incepta",
    price: 35,
    availability: "in-stock",
    image: "/medical-shop.png",
    uses: "Upper‑respiratory infection",
    sideEffects: "Diarrhoea",
    dosage: "1 tablet daily",
    precautions: "Take after meal",
    manufacturer: "Incepta Pharmaceuticals",
    expiryDate: "2026-11-30",
  },
  {
    id: 8,
    name: "Salbutamol Inhaler",
    generic: "Salbutamol",
    category: "Inhaler",
    brand: "Incepta",
    price: 250,
    availability: "out-of-stock",
    image: "/medical-shop.png",
    uses: "Asthma relief",
    sideEffects: "Tremor, palpitations",
    dosage: "2 puffs as needed",
    precautions: "Shake well",
    manufacturer: "Incepta Pharmaceuticals",
    expiryDate: "2025-08-31",
  },
  {
    id: 9,
    name: "Vitamin C 1000",
    generic: "Ascorbic Acid",
    category: "Tablet",
    brand: "Eskayef",
    price: 10,
    availability: "in-stock",
    image: "/medical-shop.png",
    uses: "Boost immunity",
    sideEffects: "Heartburn",
    dosage: "1 tablet daily",
    precautions: "Take with water",
    manufacturer: "Eskayef Pharma",
    expiryDate: "2027-02-10",
  },
  {
    id: 10,
    name: "Amoxicillin Suspension",
    generic: "Amoxicillin",
    category: "Syrup",
    brand: "Beximco",
    price: 80,
    availability: "in-stock",
    image: "/medical-shop.png",
    uses: "Ear & throat infection",
    sideEffects: "Rash",
    dosage: "5 ml thrice daily",
    precautions: "Shake before use",
    manufacturer: "Beximco Pharma",
    expiryDate: "2026-07-15",
  },
  {
    id: 11,
    name: "Omeprazole Capsule",
    generic: "Omeprazole",
    category: "Capsule",
    brand: "Beacon",
    price: 20,
    availability: "in-stock",
    image: "/medical-shop.png",
    uses: "Gastric ulcer",
    sideEffects: "Headache",
    dosage: "1 capsule before meal",
    precautions: "Do not crush",
    manufacturer: "Beacon Pharmaceuticals",
    expiryDate: "2026-03-01",
  },
  {
    id: 12,
    name: "Diclofenac Gel",
    generic: "Diclofenac",
    category: "Ointment",
    brand: "ACI",
    price: 110,
    availability: "out-of-stock",
    image: "/medical-shop.png",
    uses: "Joint pain relief",
    sideEffects: "Local irritation",
    dosage: "Apply 3‑4× daily",
    precautions: "Avoid broken skin",
    manufacturer: "ACI Limited",
    expiryDate: "2025-10-20",
  },
   {
    id: 13,
    name: "Diclofenac Gel",
    generic: "Diclofenac",
    category: "Ointment",
    brand: "ACI",
    price: 110,
    availability: "out-of-stock",
    image: "/medical-shop.png",
    uses: "Joint pain relief",
    sideEffects: "Local irritation",
    dosage: "Apply 3‑4× daily",
    precautions: "Avoid broken skin",
    manufacturer: "ACI Limited",
    expiryDate: "2025-10-20",
  },
 
];

/* ======== Cart & UI State ======== */
let cart = [];

/* Cached DOM ========= */
const medicineGrid         = document.getElementById("medicineGrid");
const cartCount            = document.getElementById("cartCount");
const cartBtn              = document.getElementById("cartBtn");
const cartModal            = document.getElementById("cartModal");
const closeCartBtn         = document.getElementById("closeCartBtn");
const cartItemsContainer   = document.getElementById("cartItems");
const cartTotalPrice       = document.getElementById("cartTotalPrice");
const checkoutBtn          = document.getElementById("checkoutBtn");

const searchInput          = document.getElementById("searchInput");
const categoryFilter       = document.getElementById("categoryFilter");
const brandFilter          = document.getElementById("brandFilter");
const availabilityFilter   = document.getElementById("availabilityFilter");

const medicineModal        = document.getElementById("medicineModal");
const medicineDetailsContent = document.getElementById("medicineDetailsContent");
const closeMedicineModal   = document.getElementById("closeMedicineModal");

const prescriptionFileInput= document.getElementById("prescriptionFile");
const prescriptionTextArea = document.getElementById("prescriptionText");
const processPrescriptionBtn = document.getElementById("processPrescriptionBtn");

const outOfStockSection    = document.getElementById("outOfStockSection");
const outOfStockList       = document.getElementById("outOfStockList");

const darkToggle           = document.getElementById("darkToggle");

/* ======== Init ======== */
function init() {
  populateFilterOptions();
  renderMedicines(medicines);
  updateCartCount();
  setupEventListeners();
}
window.addEventListener("DOMContentLoaded", init);

/* ======== Populate Filter Dropdowns ======== */
function populateFilterOptions() {
  const categories = [...new Set(medicines.map(m => m.category))];
  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat.toLowerCase();
    option.textContent = cat;
    categoryFilter.appendChild(option);
  });

  const brands = [...new Set(medicines.map(m => m.brand))];
  brands.forEach(brand => {
    const option = document.createElement("option");
    option.value = brand.toLowerCase();
    option.textContent = brand;
    brandFilter.appendChild(option);
  });
}

/* ======== Render Medicines ======== */
function renderMedicines(list) {
  medicineGrid.innerHTML = "";

  const inStock = list.filter(m => m.availability === "in-stock");
  const outStock = list.filter(m => m.availability === "out-of-stock");

  if (inStock.length === 0) {
    medicineGrid.innerHTML = "<p class='text-center col-span-full'>No medicines found.</p>";
  } else {
    inStock.forEach(med => {
      const card = createMedicineCard(med);
      medicineGrid.appendChild(card);
    });
  }

  // Show out-of-stock separately
  if (outStock.length > 0) {
    outOfStockSection.classList.remove("hidden");
    outOfStockList.innerHTML = "";
    outStock.forEach(med => {
      const card = createMedicineCard(med);
      outOfStockList.appendChild(card);
    });
  } else {
    outOfStockSection.classList.add("hidden");
  }
}

/* ======== Create Medicine Card ======== */
function createMedicineCard(med) {
  const card = document.createElement("article");
  card.className = "medicine-card";

  card.innerHTML = `
    <img src="${med.image}" alt="${med.name}" loading="lazy" />
    <div class="medicine-card-content">
      <h3 class="medicine-name">${med.name}</h3>
      <p class="medicine-generic italic">${med.generic}</p>
      <p class="medicine-category">Category: ${med.category}</p>
      <p class="medicine-brand">Brand: ${med.brand}</p>
      <p class="medicine-price font-semibold">৳${med.price.toFixed(2)}</p>
      <p class="medicine-availability ${med.availability === "in-stock" ? "avail-in-stock" : "avail-out-stock"}">
        ${med.availability === "in-stock" ? "✅ In Stock" : "❌ Out of Stock"}
      </p>
      <button class="btn-add-cart" ${med.availability === "out-of-stock" ? "disabled" : ""} data-id="${med.id}">Add to Cart</button>
    </div>
  `;

  /* Card click → details modal */
  card.addEventListener("click", (e) => {
    if (!e.target.classList.contains("btn-add-cart")) {
      openMedicineDetails(med);
    }
  });

  /* Add to cart button */
  card.querySelector(".btn-add-cart").addEventListener("click", (e) => {
    e.stopPropagation();
    addToCart(med.id);
  });

  return card;
}

/* ======== Medicine Details Modal ======== */
function openMedicineDetails(med) {
  medicineDetailsContent.innerHTML = `
    <h2 class="text-2xl font-bold mb-3">${med.name}</h2>
    <img src="${med.image}" alt="${med.name}" class="w-full max-h-48 object-contain mb-4" />
    <p><strong>Generic Name:</strong> ${med.generic}</p>
    <p><strong>Category:</strong> ${med.category}</p>
    <p><strong>Brand:</strong> ${med.brand}</p>
    <p><strong>Price:</strong> ৳${med.price.toFixed(2)}</p>
    <p><strong>Availability:</strong> ${med.availability === "in-stock" ? "In Stock" : "Out of Stock"}</p>
    <p><strong>Uses:</strong> ${med.uses}</p>
    <p><strong>Side Effects:</strong> ${med.sideEffects}</p>
    <p><strong>Dosage:</strong> ${med.dosage}</p>
    <p><strong>Precautions:</strong> ${med.precautions}</p>
    <p><strong>Manufacturer:</strong> ${med.manufacturer}</p>
    <p><strong>Expiry Date:</strong> ${med.expiryDate}</p>
  `;
  medicineModal.classList.add("flex");
}
closeMedicineModal.addEventListener("click", () => medicineModal.classList.remove("flex"));

/* ======== Cart Operations ======== */
function addToCart(id) {
  const med = medicines.find(m => m.id === id);
  if (!med) return;

  const existing = cart.find(item => item.id === id);
  if (existing) existing.quantity++;
  else cart.push({...med, quantity: 1});

  updateCartCount();
  renderCart();
  alert(`Added ${med.name} to cart.`);
}

function updateCartCount() {
  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function renderCart() {
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
      cartTotalPrice.textContent = "৳0.00";
      return;
    }

    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
      total += item.price * item.quantity;
      const div = document.createElement("div");
      div.className = "flex justify-between items-center border-b border-gray-300 dark:border-gray-600 pb-2";
      div.innerHTML = `
        <div>
          <p class="font-semibold">${item.name}</p>
          <p>৳${item.price.toFixed(2)} × ${item.quantity}</p>
        </div>
        <div class="flex items-center space-x-2">
          <button class="text-red-600 hover:text-red-800" data-id="${item.id}" data-action="remove-one">-</button>
          <span>${item.quantity}</span>
          <button class="text-green-600 hover:text-green-800" data-id="${item.id}" data-action="add-one">+</button>
        </div>
      `;
      cartItemsContainer.appendChild(div);
    });

    cartTotalPrice.textContent = `৳${total.toFixed(2)}`;

    cartItemsContainer.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => {
        modifyCartItem(Number(btn.dataset.id), btn.dataset.action);
      });
    });
}

function modifyCartItem(id, action) {
  const idx = cart.findIndex(i => i.id === id);
  if (idx === -1) return;

  if (action === "add-one") cart[idx].quantity++;
  else if (action === "remove-one") {
    cart[idx].quantity--;
    if (cart[idx].quantity <= 0) cart.splice(idx, 1);
  }
  updateCartCount();
  renderCart();
}

/* Cart modal open / close */
cartBtn.addEventListener("click", () => cartModal.classList.toggle("flex"));
closeCartBtn.addEventListener("click", () => cartModal.classList.remove("flex"));
cartModal.addEventListener("click", (e) => { if (e.target === cartModal) cartModal.classList.remove("flex"); });

/* Checkout dummy */
checkoutBtn.addEventListener("click", () => {
  if (!cart.length) { alert("Your cart is empty!"); return; }
  alert("Proceeding to checkout. (Demo)");
});

/* ======== Filters & Search ======== */
function filterAndSearch() {
  let filtered = [...medicines];

  const q = searchInput.value.trim().toLowerCase();
  if (q) filtered = filtered.filter(m => m.name.toLowerCase().includes(q) || m.category.toLowerCase().includes(q) || m.brand.toLowerCase().includes(q));

  if (categoryFilter.value) filtered = filtered.filter(m => m.category.toLowerCase() === categoryFilter.value);
  if (brandFilter.value)    filtered = filtered.filter(m => m.brand.toLowerCase() === brandFilter.value);
  if (availabilityFilter.value) filtered = filtered.filter(m => m.availability === availabilityFilter.value);

  renderMedicines(filtered);
}
[searchInput, categoryFilter, brandFilter, availabilityFilter].forEach(el => el.addEventListener("input", filterAndSearch));
categoryFilter.addEventListener("change", filterAndSearch);
brandFilter.addEventListener("change", filterAndSearch);
availabilityFilter.addEventListener("change", filterAndSearch);

/* ======== Prescription Processing (simple) ======== */
processPrescriptionBtn.addEventListener("click", () => {
  const file = prescriptionFileInput.files[0];
  const txt  = prescriptionTextArea.value.trim();
  if (file) readFilePrescription(file);
  else if (txt) processPrescriptionText(txt);
  else alert("Please upload a prescription file or enter text.");
});

function readFilePrescription(file) {
  if (file.type === "text/plain") {
    const reader = new FileReader();
    reader.onload = () => processPrescriptionText(reader.result);
    reader.readAsText(file);
  } else alert("Only .txt files supported in this demo.");
}

function processPrescriptionText(text) {
  const lines = text.split("\n").map(l => l.trim()).filter(Boolean);
  if (!lines.length) { alert("No medicines found."); return; }

  cart = [];
  const notAvailable = [];

  lines.forEach(line => {
    const parts = line.split(" ");
    if (parts.length < 3) return;
    const dose = Number(parts.pop());
    const days = Number(parts.pop());
    const name = parts.join(" ").toLowerCase();
    if (isNaN(dose) || isNaN(days)) return;

    const med = medicines.find(m => m.name.toLowerCase() === name);
    if (!med || med.availability !== "in-stock") { notAvailable.push(line); return; }

    cart.push({...med, quantity: dose * days});
  });

  updateCartCount();
  renderCart();
  cartModal.classList.add("flex");

  if (notAvailable.length) alert(`These medicines are not available or unknown:\n${notAvailable.join("\n")}`);
}


