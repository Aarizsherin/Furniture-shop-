/**
 * Comfort Home Furniture - Main JavaScript
 * Interactive Features: Product catalog, live filtering, search, cart, checkout, modal, toast
 */

// =============================================================================
// 1. PRODUCT DATASET (Local Sample Data)
// =============================================================================
const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Modern Sofa",
    category: "Sofas",
    price: 25999,
    originalPrice: 31999,
    rating: 4.8,
    reviewsCount: 142,
    badge: "Best Seller",
    shortDesc: "Plush 3-seater living room sofa with high-density ergonomic foam and spill-resistant fabric weave.",
    longDesc: "Transform your living room into a cozy haven with our signature Modern 3-Seater Sofa. Built with a kiln-dried solid teak inner frame and layered with high-resilience foam, this couch offers superior lumbar comfort for movie nights, family gatherings, and everyday lounging.",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493663284041-c423e1085a17?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Forest Green", hex: "#3A5A40" },
      { name: "Slate Grey", hex: "#5C677D" },
      { name: "Warm Beige", hex: "#D6C7B2" },
      { name: "Terracotta", hex: "#C07044" }
    ],
    sizes: ["3-Seater (Standard)", "2-Seater (Compact)", "L-Shape Modular"],
    specs: {
      dimensions: "84\" W x 35\" D x 32\" H",
      material: "Kiln-dried Teak & Premium Linen",
      finish: "Natural Matte Wood Feet",
      warranty: "5 Years Manufacturer Warranty",
      assembly: "Free technician assembly on delivery"
    }
  },
  {
    id: 2,
    name: "Wooden King Bed",
    category: "Beds",
    price: 32999,
    originalPrice: 39999,
    rating: 4.9,
    reviewsCount: 189,
    badge: "Customer Favorite",
    shortDesc: "Handcrafted solid Sheesham wood king size bed with acoustic-cushioned wooden slat base.",
    longDesc: "Experience serene sleep every single night. Our Wooden King Bed is carefully fashioned from sustainably harvested Sheesham hardwood, exhibiting exquisite natural grain patterns. The reinforced center beam and acoustic-dampened slats ensure zero squeaks and enduring durability.",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Honey Teak", hex: "#A47148" },
      { name: "Rich Walnut", hex: "#4A2E1F" },
      { name: "Natural Oak", hex: "#C8A165" }
    ],
    sizes: ["King (78\" x 72\")", "Queen (78\" x 60\")", "Single (78\" x 36\")"],
    specs: {
      dimensions: "82\" L x 76\" W x 42\" H (Headboard)",
      material: "100% Solid Sheesham Hardwood",
      finish: "Hand-rubbed Melamine Matte Polish",
      warranty: "10 Years Structural Warranty",
      assembly: "Free technician assembly on delivery"
    }
  },
  {
    id: 3,
    name: "Dining Table Set",
    category: "Dining Tables",
    price: 18499,
    originalPrice: 22999,
    rating: 4.7,
    reviewsCount: 96,
    badge: "Special Offer",
    shortDesc: "Timeless 4-seater wooden dining table set with upholstered cushioned chairs for cozy dinners.",
    longDesc: "Gather friends and family around a dining table that radiates hospitality. Built from seasoned solid wood with a spill-resistant protective sealant, this set comes complete with four ergonomically contoured chairs with stain-resistant fabric seats.",
    images: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Warm Chestnut", hex: "#6E4728" },
      { name: "Light Honey", hex: "#C29B63" }
    ],
    sizes: ["4-Seater (48\" x 36\")", "6-Seater (66\" x 36\")"],
    specs: {
      dimensions: "48\" L x 36\" W x 30\" H (Table)",
      material: "Seasoned Solid Rubberwood & Teak Polish",
      finish: "Waterproof Polyurethane Matte",
      warranty: "5 Years Warranty",
      assembly: "Free technician assembly on delivery"
    }
  },
  {
    id: 4,
    name: "Office Chair",
    category: "Chairs",
    price: 6999,
    originalPrice: 8999,
    rating: 4.6,
    reviewsCount: 215,
    badge: "Top Rated",
    shortDesc: "Ergonomic mesh office chair with adjustable lumbar support, 3D armrests, and smooth castors.",
    longDesc: "Work for hours in effortless comfort. Featuring a breathable dual-mesh backrest, pneumatic gas lift, tilt-tension mechanism, and multi-directional lumbar support, this chair is engineered to reduce fatigue during demanding workdays.",
    images: [
      "https://images.unsplash.com/photo-1580481077195-c3288006b527?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Onyx Black", hex: "#1F1F1F" },
      { name: "Cool Grey", hex: "#7E8287" },
      { name: "Navy Blue", hex: "#233D4D" }
    ],
    sizes: ["Standard Adjustable (Universal)"],
    specs: {
      dimensions: "26\" W x 26\" D x 39\"-44\" H",
      material: "High-Grade Nylon Base & Breathable Mesh",
      finish: "Matte Black Chrome Gas Lift",
      warranty: "3 Years Mechanism Warranty",
      assembly: "Do-It-Yourself in 10 mins (Toolkit included)"
    }
  },
  {
    id: 5,
    name: "Wooden Wardrobe",
    category: "Wardrobes",
    price: 22999,
    originalPrice: 28499,
    rating: 4.8,
    reviewsCount: 112,
    badge: "Storage Master",
    shortDesc: "Spacious 3-door wardrobe with built-in full length mirror, internal drawers, and hanging rod.",
    longDesc: "Keep your bedroom impeccably organized with our 3-Door Solid Finish Wardrobe. Designed with deep shelving compartments, two lockable security drawers, and a rust-resistant hanging rail for formal attire.",
    images: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Natural Teak", hex: "#8A5A36" },
      { name: "Dark Walnut", hex: "#382318" }
    ],
    sizes: ["3-Door (Standard)", "4-Door (Spacious)", "2-Door (Compact)"],
    specs: {
      dimensions: "48\" W x 21\" D x 75\" H",
      material: "High-Density Engineered Wood with Teak Veneer",
      finish: "Scratch-resistant Melamine Coating",
      warranty: "5 Years Warranty",
      assembly: "Free technician assembly on delivery"
    }
  },
  {
    id: 6,
    name: "Coffee Table",
    category: "Coffee Tables",
    price: 7499,
    originalPrice: 9499,
    rating: 4.5,
    reviewsCount: 88,
    badge: "Popular",
    shortDesc: "Minimalist Scandinavian wooden center coffee table with integrated lower magazine shelf.",
    longDesc: "Anchor your living room with a touch of organic warmth. Crafted with beveled safe edges and solid tapered legs, this coffee table provides ample surface space for your afternoon espresso, books, and decor accents.",
    images: [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Honey Oak", hex: "#C89D66" },
      { name: "Smoked Espresso", hex: "#2E1C14" }
    ],
    sizes: ["Rectangle (42\" x 22\")", "Square (34\" x 34\")"],
    specs: {
      dimensions: "42\" L x 22\" W x 18\" H",
      material: "Solid Teakwood & Engineered Base",
      finish: "Silky Smooth Satin Lacquer",
      warranty: "3 Years Warranty",
      assembly: "Free technician assembly on delivery"
    }
  },
  {
    id: 7,
    name: "Executive Office Desk",
    category: "Office Furniture",
    price: 14999,
    originalPrice: 17999,
    rating: 4.7,
    reviewsCount: 74,
    badge: "Workplace",
    shortDesc: "Spacious solid wooden executive study desk with 3 lockable utility drawers and cable grommet.",
    longDesc: "Bring poise and focus to your study or remote workstation. This executive wooden desk combines a clean expansive worktop with smart concealed wire channels and quiet ball-bearing slider drawers.",
    images: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580481077195-c3288006b527?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Vintage Teak", hex: "#7E5233" },
      { name: "Classic Walnut", hex: "#3B2519" }
    ],
    sizes: ["Medium (48\" x 24\")", "Large (60\" x 28\")"],
    specs: {
      dimensions: "54\" W x 26\" D x 30\" H",
      material: "Kiln-dried Sheesham & Powder-coated Steel Legs",
      finish: "Matte Natural Wood Finish",
      warranty: "5 Years Warranty",
      assembly: "Free technician assembly on delivery"
    }
  },
  {
    id: 8,
    name: "Minimalist TV Unit",
    category: "TV Units",
    price: 12499,
    originalPrice: 15999,
    rating: 4.8,
    reviewsCount: 104,
    badge: "Modern Living",
    shortDesc: "Low-profile media entertainment console with cable management holes and soft-close cabinets.",
    longDesc: "Create a clutter-free cinematic corner. Accommodates TVs up to 65 inches with dedicated ventilated shelving for soundbars, set-top boxes, and gaming consoles, complemented by sleek soft-closing fluted cabinet doors.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Oak & Ivory", hex: "#C7B299" },
      { name: "Walnut Dark", hex: "#43281C" }
    ],
    sizes: ["Standard (55\" TV)", "Wide (65\"+ TV)"],
    specs: {
      dimensions: "58\" W x 16\" D x 18\" H",
      material: "Solid Teak Face with High Moisture-Resistant Core",
      finish: "Protective Satin Matte Coat",
      warranty: "5 Years Warranty",
      assembly: "Free technician assembly on delivery"
    }
  },
  {
    id: 9,
    name: "Velvet Accent Chair",
    category: "Chairs",
    price: 8999,
    originalPrice: 11499,
    rating: 4.9,
    reviewsCount: 138,
    badge: "Trendsetter",
    shortDesc: "Deep-seated lounge armchair with luxe velvet upholstery and tapered brushed brass metal legs.",
    longDesc: "The ultimate reading nook statement piece. Delicately curved backrest gently cradles your shoulders, while premium high-density foam padding guarantees that this armchair retains its tailored profile year after year.",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Mustard Gold", hex: "#D4A373" },
      { name: "Velvet Teal", hex: "#1D4E5B" },
      { name: "Dusty Rose", hex: "#B87D7D" }
    ],
    sizes: ["Standard Accent"],
    specs: {
      dimensions: "31\" W x 32\" D x 34\" H",
      material: "Stain-resistant Velvet & Brass Plated Steel",
      finish: "Brushed Brass Metal Legs",
      warranty: "3 Years Warranty",
      assembly: "Legs screw-in under 5 mins"
    }
  },
  {
    id: 10,
    name: "Solid Teak Bedside Table",
    category: "Beds",
    price: 4499,
    originalPrice: 5999,
    rating: 4.6,
    reviewsCount: 65,
    badge: "Handmade",
    shortDesc: "Compact nightstand with smooth glide drawer, open display cubby, and rounded brass knob.",
    longDesc: "An indispensable bedside companion. Keeps your phone, reading lamp, books, and night-time essentials neatly arranged within arm's reach, built from authentic seasoned teak with handcrafted joinery.",
    images: [
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Honey Teak", hex: "#A47148" },
      { name: "Rich Walnut", hex: "#4A2E1F" }
    ],
    sizes: ["Standard (18\" x 16\")"],
    specs: {
      dimensions: "18\" W x 16\" D x 20\" H",
      material: "100% Solid Teak Hardwood",
      finish: "Hand-rubbed Melamine Polish",
      warranty: "5 Years Warranty",
      assembly: "Pre-assembled in box"
    }
  },
  {
    id: 11,
    name: "Solid Oak 6-Seater Dining Set",
    category: "Dining Tables",
    price: 38999,
    originalPrice: 47999,
    rating: 4.9,
    reviewsCount: 82,
    badge: "Artisan Wood",
    shortDesc: "Grand solid oak dining table accompanied by 6 cushioned high-back chairs for celebrations.",
    longDesc: "Crafted for enduring family milestones and festive feasts. The solid oak surface displays distinct cathedral grain patterns with a bevelled edge, while the 6 chairs feature ergonomic contours and premium linen weave seats.",
    images: [
      "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Natural Oak", hex: "#B89569" },
      { name: "Dark Walnut", hex: "#3B2519" }
    ],
    sizes: ["6-Seater (72\" x 38\")"],
    specs: {
      dimensions: "72\" L x 38\" W x 30\" H",
      material: "Grade-A Solid Oak & High-Density Cushions",
      finish: "Heat & Moisture Resistant Matte Coating",
      warranty: "10 Years Structural Warranty",
      assembly: "Free technician assembly on delivery"
    }
  },
  {
    id: 12,
    name: "L-Shaped Sectional Sofa",
    category: "Sofas",
    price: 44999,
    originalPrice: 54999,
    rating: 4.9,
    reviewsCount: 167,
    badge: "Luxury Living",
    shortDesc: "Reversible chaise sectional sofa with deep feather-blend seats and removable washable covers.",
    longDesc: "The pinnacle of lounge comfort. Features a versatile reversible chaise that can be positioned on the left or right to suit your room layout, built with multi-density foam and anti-sag pocket spring suspension.",
    images: [
      "https://images.unsplash.com/photo-1493663284041-c423e1085a17?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Oatmeal Beige", hex: "#D6C7B2" },
      { name: "Charcoal Slate", hex: "#42474D" },
      { name: "Warm Olive", hex: "#556B2F" }
    ],
    sizes: ["Right/Left Reversible Chaise (108\" x 64\")"],
    specs: {
      dimensions: "108\" W x 64\" D (Chaise) x 33\" H",
      material: "Kiln-dried Hardwood Frame & Belgian Linen",
      finish: "Oiled Solid Wood Tapered Legs",
      warranty: "7 Years Warranty",
      assembly: "Free technician assembly on delivery"
    }
  }
];

// =============================================================================
// 2. STATE MANAGEMENT
// =============================================================================
const state = {
  products: [...PRODUCTS_DATA],
  filteredProducts: [...PRODUCTS_DATA],
  filters: {
    searchQuery: "",
    category: "all",
    priceRange: "all",
    minRating: "all",
    sortBy: "featured"
  },
  cart: [],
  appliedCoupon: null, // { code: 'COMFORT20', discountPercent: 20 } or null
  activeModalProduct: null,
  selectedColorIndex: 0,
  selectedSizeIndex: 0,
  selectedQuantity: 1
};

// =============================================================================
// 3. UTILITY FUNCTIONS
// =============================================================================

/**
 * Format numeric amount to Indian Rupee representation (e.g. ₹25,999)
 */
function formatCurrency(amount) {
  return "₹" + Math.round(amount).toLocaleString("en-IN");
}

/**
 * Render star icons and rating number
 */
function renderStarRating(rating, count) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  let starsHtml = "";

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      starsHtml += "★";
    } else if (i === fullStars && hasHalf) {
      starsHtml += "★";
    } else {
      starsHtml += "☆";
    }
  }

  return `
    <div class="product-rating">
      <div class="stars-row">${starsHtml}</div>
      <span class="rating-score">${rating.toFixed(1)}</span>
      ${count ? `<span class="rating-count">(${count})</span>` : ""}
    </div>
  `;
}

/**
 * Show a modern floating toast notification
 */
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let iconSvg = "";
  if (type === "success") {
    iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  } else {
    iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
  }

  toast.innerHTML = `${iconSvg} <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// =============================================================================
// 4. CART LOGIC & PERSISTENCE
// =============================================================================

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("comfort_home_cart");
    if (saved) {
      state.cart = JSON.parse(saved);
    }
  } catch (e) {
    console.warn("Could not load cart from localStorage", e);
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem("comfort_home_cart", JSON.stringify(state.cart));
  } catch (e) {
    console.warn("Could not save cart to localStorage", e);
  }
}

/**
 * Add product to cart with chosen attributes
 */
function addToCart(productId, quantity = 1, color = null, size = null) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const chosenColor = color || (product.colors && product.colors[0] ? product.colors[0].name : "Standard");
  const chosenSize = size || (product.sizes && product.sizes[0] ? product.sizes[0] : "Standard");
  const cartKey = `${productId}-${chosenColor}-${chosenSize}`;

  const existingItem = state.cart.find(item => item.cartKey === cartKey);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    state.cart.push({
      cartKey: cartKey,
      productId: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      image: product.images[0],
      color: chosenColor,
      size: chosenSize,
      quantity: quantity
    });
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`Added "${product.name}" (${quantity}) to cart!`, "success");
}

/**
 * Update quantity of an item in cart
 */
function updateCartItemQuantity(cartKey, delta) {
  const item = state.cart.find(i => i.cartKey === cartKey);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(cartKey);
    return;
  }

  saveCartToStorage();
  updateCartUI();
}

/**
 * Remove an item from cart
 */
function removeFromCart(cartKey) {
  const item = state.cart.find(i => i.cartKey === cartKey);
  const itemName = item ? item.name : "Item";
  state.cart = state.cart.filter(i => i.cartKey !== cartKey);
  saveCartToStorage();
  updateCartUI();
  showToast(`Removed "${itemName}" from cart`, "info");
}

/**
 * Calculate totals and update Cart Drawer UI elements
 */
function updateCartUI() {
  const cartBadge = document.getElementById("cartBadge");
  const drawerCartCount = document.getElementById("drawerCartCount");
  const cartItemsList = document.getElementById("cartItemsList");
  const cartEmptyState = document.getElementById("cartEmptyState");
  const cartFooter = document.getElementById("cartFooter");

  const cartSubtotalEl = document.getElementById("cartSubtotal");
  const cartDiscountRow = document.getElementById("cartDiscountRow");
  const cartDiscountEl = document.getElementById("cartDiscount");
  const cartDeliveryChargeEl = document.getElementById("cartDeliveryCharge");
  const cartTotalEl = document.getElementById("cartTotal");

  const shippingNoticeText = document.getElementById("shippingNoticeText");
  const shippingProgressFill = document.getElementById("shippingProgressFill");

  // Total count of items
  const totalItemsCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartBadge) cartBadge.textContent = totalItemsCount;
  if (drawerCartCount) drawerCartCount.textContent = totalItemsCount;

  // If cart is empty
  if (state.cart.length === 0) {
    if (cartEmptyState) cartEmptyState.classList.remove("hidden");
    if (cartItemsList) cartItemsList.innerHTML = "";
    if (cartFooter) cartFooter.classList.add("hidden");
    if (shippingProgressFill) shippingProgressFill.style.width = "0%";
    if (shippingNoticeText) shippingNoticeText.textContent = "Add ₹50,000 for FREE Doorstep Delivery & Assembly";
    return;
  }

  // Not empty
  if (cartEmptyState) cartEmptyState.classList.add("hidden");
  if (cartFooter) cartFooter.classList.remove("hidden");

  // Calculate Subtotal
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Delivery charge calculation (Free above ₹50,000, else ₹999)
  const freeShippingThreshold = 50000;
  let deliveryCharge = subtotal >= freeShippingThreshold ? 0 : 999;

  // Shipping tracker progress
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  if (shippingProgressFill) shippingProgressFill.style.width = `${progressPercent}%`;

  if (shippingNoticeText) {
    if (subtotal >= freeShippingThreshold) {
      shippingNoticeText.innerHTML = `🎉 <strong>Congratulations!</strong> You've unlocked FREE Doorstep Delivery!`;
    } else {
      const remaining = freeShippingThreshold - subtotal;
      shippingNoticeText.innerHTML = `Add <strong>${formatCurrency(remaining)}</strong> more to get <strong>FREE Delivery & Assembly</strong>`;
    }
  }

  // Coupon Discount Calculation
  let discountAmount = 0;
  if (state.appliedCoupon) {
    if (state.appliedCoupon.discountPercent) {
      discountAmount = (subtotal * state.appliedCoupon.discountPercent) / 100;
    } else if (state.appliedCoupon.freeDelivery) {
      deliveryCharge = 0;
    }
  }

  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryCharge);

  // Update Summary Figures
  if (cartSubtotalEl) cartSubtotalEl.textContent = formatCurrency(subtotal);
  if (cartDeliveryChargeEl) {
    cartDeliveryChargeEl.textContent = deliveryCharge === 0 ? "FREE" : formatCurrency(deliveryCharge);
    cartDeliveryChargeEl.style.color = deliveryCharge === 0 ? "var(--success)" : "inherit";
  }

  if (discountAmount > 0) {
    if (cartDiscountRow) cartDiscountRow.classList.remove("hidden");
    if (cartDiscountEl) cartDiscountEl.textContent = `-${formatCurrency(discountAmount)}`;
  } else {
    if (cartDiscountRow) cartDiscountRow.classList.add("hidden");
  }

  if (cartTotalEl) cartTotalEl.textContent = formatCurrency(grandTotal);

  // Render items rows
  if (cartItemsList) {
    cartItemsList.innerHTML = state.cart.map(item => `
      <div class="cart-item-row" data-key="${item.cartKey}">
        <div class="cart-item-img">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.name}</h4>
          <span class="cart-item-meta">${item.color} • ${item.size}</span>
          <span class="cart-item-price">${formatCurrency(item.price)}</span>
        </div>
        <div class="cart-item-controls">
          <button class="cart-remove-btn" onclick="removeFromCart('${item.cartKey}')" title="Remove item" aria-label="Remove item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
          <div class="cart-qty-stepper">
            <button class="cart-qty-btn" onclick="updateCartItemQuantity('${item.cartKey}', -1)" aria-label="Decrease quantity">-</button>
            <span class="cart-qty-val">${item.quantity}</span>
            <button class="cart-qty-btn" onclick="updateCartItemQuantity('${item.cartKey}', 1)" aria-label="Increase quantity">+</button>
          </div>
        </div>
      </div>
    `).join("");
  }
}

/**
 * Open/Close Cart Drawer
 */
function openCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  if (drawer && backdrop) {
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    backdrop.classList.add("open");
    backdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  if (drawer && backdrop) {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    backdrop.classList.remove("open");
    backdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}

/**
 * Apply Coupon Code
 */
function applyCoupon(code) {
  const cleanCode = (code || "").trim().toUpperCase();
  if (!cleanCode) return;

  if (cleanCode === "COMFORT20") {
    state.appliedCoupon = { code: "COMFORT20", discountPercent: 20 };
    showToast("Coupon COMFORT20 applied! 20% discount added.", "success");
  } else if (cleanCode === "BEDROOM15") {
    state.appliedCoupon = { code: "BEDROOM15", discountPercent: 15 };
    showToast("Coupon BEDROOM15 applied! 15% discount added.", "success");
  } else if (cleanCode === "FREEDEL" || cleanCode === "FREESHIP") {
    state.appliedCoupon = { code: cleanCode, freeDelivery: true };
    showToast("Free Delivery coupon applied!", "success");
  } else {
    showToast("Invalid coupon code. Try COMFORT20 or BEDROOM15.", "info");
    return;
  }

  // Update UI Tag
  const couponAppliedTag = document.getElementById("couponAppliedTag");
  const appliedCouponCode = document.getElementById("appliedCouponCode");
  const couponInput = document.getElementById("cartCouponInput");

  if (couponAppliedTag && appliedCouponCode) {
    appliedCouponCode.textContent = cleanCode;
    couponAppliedTag.classList.remove("hidden");
  }
  if (couponInput) couponInput.value = "";

  updateCartUI();
}

function removeCoupon() {
  state.appliedCoupon = null;
  const couponAppliedTag = document.getElementById("couponAppliedTag");
  if (couponAppliedTag) couponAppliedTag.classList.add("hidden");
  showToast("Coupon removed", "info");
  updateCartUI();
}

// =============================================================================
// 5. PRODUCT CATALOG FILTERING & RENDERING
// =============================================================================

function filterProducts() {
  const { searchQuery, category, priceRange, minRating, sortBy } = state.filters;

  let results = PRODUCTS_DATA.filter(product => {
    // 1. Search Query Filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchName = product.name.toLowerCase().includes(q);
      const matchCategory = product.category.toLowerCase().includes(q);
      const matchDesc = product.shortDesc.toLowerCase().includes(q);
      if (!matchName && !matchCategory && !matchDesc) {
        return false;
      }
    }

    // 2. Category Filter
    if (category !== "all" && product.category.toLowerCase() !== category.toLowerCase()) {
      return false;
    }

    // 3. Price Range Filter
    if (priceRange === "under-10000" && product.price >= 10000) return false;
    if (priceRange === "10000-25000" && (product.price < 10000 || product.price > 25000)) return false;
    if (priceRange === "25000-40000" && (product.price < 25000 || product.price > 40000)) return false;
    if (priceRange === "above-40000" && product.price <= 40000) return false;

    // 4. Min Rating Filter
    if (minRating !== "all") {
      const minVal = parseFloat(minRating);
      if (product.rating < minVal) return false;
    }

    return true;
  });

  // 5. Sorting
  if (sortBy === "price-low") {
    results.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    results.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    results.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "name") {
    results.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    // featured: original ordering
    results.sort((a, b) => a.id - b.id);
  }

  state.filteredProducts = results;
  renderProductsGrid();
}

function renderProductsGrid() {
  const grid = document.getElementById("productsGrid");
  const noProductsState = document.getElementById("noProductsState");
  const resultsCount = document.getElementById("resultsCount");
  const activeFilterTag = document.getElementById("activeFilterTag");

  if (!grid) return;

  const count = state.filteredProducts.length;
  if (resultsCount) {
    resultsCount.textContent = `Showing ${count} product${count === 1 ? "" : "s"}`;
  }

  if (activeFilterTag) {
    const catName = state.filters.category === "all" ? "All Categories" : state.filters.category;
    activeFilterTag.textContent = catName;
  }

  if (count === 0) {
    grid.innerHTML = "";
    if (noProductsState) noProductsState.classList.remove("hidden");
    return;
  }

  if (noProductsState) noProductsState.classList.add("hidden");

  grid.innerHTML = state.filteredProducts.map(product => {
    const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    return `
      <article class="product-card" data-product-id="${product.id}">
        <div class="product-media">
          <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
          ${product.badge ? `<span class="product-badge ${product.badge.toLowerCase().includes("offer") || product.badge.toLowerCase().includes("sale") ? "sale" : ""}">${product.badge}</span>` : ""}
        </div>
        <div class="product-card-body">
          <span class="product-category-meta">${product.category}</span>
          <h3 class="product-name">${product.name}</h3>
          <p class="product-desc">${product.shortDesc}</p>
          
          ${renderStarRating(product.rating, product.reviewsCount)}

          <div class="product-price-row">
            <span class="price-current">${formatCurrency(product.price)}</span>
            <span class="price-original">${formatCurrency(product.originalPrice)}</span>
            <span class="price-save">${discountPercent}% OFF</span>
          </div>

          <div class="product-card-actions">
            <button class="btn btn-outline view-details-btn" onclick="openProductModal(${product.id})">
              View Details
            </button>
            <button class="btn btn-primary add-to-cart-btn" onclick="addToCart(${product.id})">
              Add to Cart
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// =============================================================================
// 6. PRODUCT DETAILS MODAL QUICK VIEW
// =============================================================================

function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  state.activeModalProduct = product;
  state.selectedColorIndex = 0;
  state.selectedSizeIndex = 0;
  state.selectedQuantity = 1;

  const modalBackdrop = document.getElementById("productDetailModal");
  const modalContent = document.getElementById("productDetailContent");

  if (!modalBackdrop || !modalContent) return;

  renderModalContent();

  modalBackdrop.classList.add("open");
  modalBackdrop.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function renderModalContent() {
  const modalContent = document.getElementById("productDetailContent");
  const product = state.activeModalProduct;
  if (!product || !modalContent) return;

  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  // Render thumbnails
  const thumbnailsHtml = product.images.map((imgUrl, idx) => `
    <button class="thumb-btn ${idx === 0 ? "active" : ""}" onclick="switchModalImage('${imgUrl}', this)" aria-label="Thumbnail ${idx + 1}">
      <img src="${imgUrl}" alt="${product.name} thumbnail ${idx + 1}">
    </button>
  `).join("");

  // Render colors
  const colorsHtml = product.colors.map((color, idx) => `
    <button class="color-swatch-btn ${idx === state.selectedColorIndex ? "active" : ""}" 
            style="background-color: ${color.hex};" 
            title="${color.name}"
            onclick="selectModalColor(${idx})"
            aria-label="Color ${color.name}">
    </button>
  `).join("");

  // Render sizes
  const sizesHtml = product.sizes.map((size, idx) => `
    <button class="size-pill-btn ${idx === state.selectedSizeIndex ? "active" : ""}" 
            onclick="selectModalSize(${idx})">
      ${size}
    </button>
  `).join("");

  modalContent.innerHTML = `
    <!-- Left: Image Gallery -->
    <div class="detail-gallery">
      <div class="detail-main-img-box">
        <img id="modalMainImg" src="${product.images[0]}" alt="${product.name}">
      </div>
      <div class="detail-thumbnails">
        ${thumbnailsHtml}
      </div>
    </div>

    <!-- Right: Product Information & Options -->
    <div class="detail-info">
      <div class="detail-badge-row">
        <span class="detail-category">${product.category}</span>
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
      </div>

      <h2 class="detail-title" id="modalProductTitle">${product.name}</h2>

      ${renderStarRating(product.rating, product.reviewsCount)}

      <div class="detail-price-box">
        <span class="detail-current-price">${formatCurrency(product.price)}</span>
        <span class="detail-original-price">${formatCurrency(product.originalPrice)}</span>
        <span class="detail-discount-tag">Save ${discountPercent}%</span>
      </div>

      <p class="detail-description">${product.longDesc}</p>

      <!-- Color Swatches -->
      <div class="swatch-group">
        <span class="option-label">Color: <strong>${product.colors[state.selectedColorIndex].name}</strong></span>
        <div class="color-swatches-row">
          ${colorsHtml}
        </div>
      </div>

      <!-- Size Selection -->
      <div class="size-group">
        <span class="option-label">Selected Dimension / Configuration:</span>
        <div class="size-options-row">
          ${sizesHtml}
        </div>
      </div>

      <!-- Quantity & Action Buttons -->
      <div class="detail-actions-row">
        <div class="quantity-stepper">
          <button class="qty-btn" onclick="changeModalQuantity(-1)" aria-label="Decrease quantity">-</button>
          <input type="text" readonly class="qty-input" id="modalQtyInput" value="${state.selectedQuantity}">
          <button class="qty-btn" onclick="changeModalQuantity(1)" aria-label="Increase quantity">+</button>
        </div>

        <button class="btn btn-primary" style="flex: 1;" onclick="addModalItemToCart()">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          Add to Cart
        </button>

        <button class="btn btn-secondary" onclick="buyNowModalItem()">
          Buy Now
        </button>
      </div>

      <!-- Specifications Table -->
      <div class="specs-accordion">
        <h4 class="specs-title">Product Specifications</h4>
        <table class="specs-table">
          <tbody>
            <tr>
              <td class="specs-label">Dimensions:</td>
              <td class="specs-val">${product.specs.dimensions}</td>
            </tr>
            <tr>
              <td class="specs-label">Primary Material:</td>
              <td class="specs-val">${product.specs.material}</td>
            </tr>
            <tr>
              <td class="specs-label">Finish / Polish:</td>
              <td class="specs-val">${product.specs.finish}</td>
            </tr>
            <tr>
              <td class="specs-label">Warranty:</td>
              <td class="specs-val">${product.specs.warranty}</td>
            </tr>
            <tr>
              <td class="specs-label">Assembly:</td>
              <td class="specs-val">${product.specs.assembly}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function switchModalImage(imgUrl, triggerBtn) {
  const mainImg = document.getElementById("modalMainImg");
  if (mainImg) mainImg.src = imgUrl;

  document.querySelectorAll(".thumb-btn").forEach(btn => btn.classList.remove("active"));
  if (triggerBtn) triggerBtn.classList.add("active");
}

function selectModalColor(index) {
  state.selectedColorIndex = index;
  renderModalContent();
}

function selectModalSize(index) {
  state.selectedSizeIndex = index;
  renderModalContent();
}

function changeModalQuantity(delta) {
  state.selectedQuantity = Math.max(1, state.selectedQuantity + delta);
  const input = document.getElementById("modalQtyInput");
  if (input) input.value = state.selectedQuantity;
}

function addModalItemToCart() {
  if (!state.activeModalProduct) return;
  const product = state.activeModalProduct;
  const color = product.colors[state.selectedColorIndex].name;
  const size = product.sizes[state.selectedSizeIndex];
  addToCart(product.id, state.selectedQuantity, color, size);
  closeProductModal();
}

function buyNowModalItem() {
  if (!state.activeModalProduct) return;
  addModalItemToCart();
  closeProductModal();
  openCheckoutModal();
}

function closeProductModal() {
  const modalBackdrop = document.getElementById("productDetailModal");
  if (modalBackdrop) {
    modalBackdrop.classList.remove("open");
    modalBackdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}

// =============================================================================
// 7. CHECKOUT MODAL & ORDER PLACEMENT
// =============================================================================

function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast("Your cart is empty. Add products to proceed.", "info");
    return;
  }

  closeCartDrawer();
  const modal = document.getElementById("checkoutModal");
  if (!modal) return;

  // Render items preview
  const previewContainer = document.getElementById("checkoutItemsPreview");
  const checkoutSubtotal = document.getElementById("checkoutSubtotal");
  const checkoutDelivery = document.getElementById("checkoutDelivery");
  const checkoutGrandTotal = document.getElementById("checkoutGrandTotal");

  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  let deliveryCharge = subtotal >= 50000 ? 0 : 999;

  let discountAmount = 0;
  if (state.appliedCoupon) {
    if (state.appliedCoupon.discountPercent) {
      discountAmount = (subtotal * state.appliedCoupon.discountPercent) / 100;
    } else if (state.appliedCoupon.freeDelivery) {
      deliveryCharge = 0;
    }
  }

  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryCharge);

  if (previewContainer) {
    previewContainer.innerHTML = state.cart.map(item => `
      <div class="checkout-item-chip">
        <span>${item.name} × ${item.quantity}</span>
        <strong>${formatCurrency(item.price * item.quantity)}</strong>
      </div>
    `).join("");
  }

  if (checkoutSubtotal) checkoutSubtotal.textContent = formatCurrency(subtotal);
  if (checkoutDelivery) checkoutDelivery.textContent = deliveryCharge === 0 ? "FREE" : formatCurrency(deliveryCharge);
  if (checkoutGrandTotal) checkoutGrandTotal.textContent = formatCurrency(grandTotal);

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkoutModal");
  if (modal) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("shipName").value.trim();
  const phone = document.getElementById("shipPhone").value.trim();
  const address = document.getElementById("shipAddress").value.trim();

  if (!name || !phone || !address) {
    showToast("Please complete all shipping address fields.", "info");
    return;
  }

  // Generate reference Order ID
  const orderRef = "#CH-" + Math.floor(10000 + Math.random() * 90000);
  const orderIdLabel = document.getElementById("confirmedOrderId");
  if (orderIdLabel) orderIdLabel.textContent = orderRef;

  // Clear cart
  state.cart = [];
  state.appliedCoupon = null;
  saveCartToStorage();
  updateCartUI();

  closeCheckoutModal();

  // Show Order Success Modal
  const successModal = document.getElementById("orderSuccessModal");
  if (successModal) {
    successModal.classList.add("open");
    successModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
}

// =============================================================================
// 8. CONTACT FORM VALIDATION
// =============================================================================

function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nameInput = document.getElementById("contactName");
    const emailInput = document.getElementById("contactEmail");
    const phoneInput = document.getElementById("contactPhone");
    const messageInput = document.getElementById("contactMessage");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const messageError = document.getElementById("messageError");
    const successBox = document.getElementById("formSuccessNotice");

    let isValid = true;

    // Reset error styles
    [nameInput, emailInput, phoneInput, messageInput].forEach(inp => inp.classList.remove("invalid"));
    [nameError, emailError, phoneError, messageError].forEach(err => err.classList.remove("show"));

    // Name validation
    if (!nameInput.value.trim()) {
      nameInput.classList.add("invalid");
      nameError.classList.add("show");
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailInput.classList.add("invalid");
      emailError.classList.add("show");
      isValid = false;
    }

    // Phone validation (10 digits)
    const cleanPhone = phoneInput.value.replace(/[\s\-\+]/g, "");
    if (cleanPhone.length < 10) {
      phoneInput.classList.add("invalid");
      phoneError.classList.add("show");
      isValid = false;
    }

    // Message validation
    if (messageInput.value.trim().length < 10) {
      messageInput.classList.add("invalid");
      messageError.classList.add("show");
      isValid = false;
    }

    if (!isValid) {
      showToast("Please correct the marked fields.", "info");
      return;
    }

    // Success flow
    form.style.display = "none";
    if (successBox) successBox.classList.remove("hidden");
    showToast("Message sent successfully! We will contact you soon.", "success");
  });
}

// Newsletter subscriber helper
window.handleNewsletter = function() {
  const input = document.getElementById("newsletterEmail");
  if (!input || !input.value) return;
  showToast("Thank you for subscribing! Your discount coupon will arrive by email.", "success");
  input.value = "";
};

// =============================================================================
// 9. EVENT LISTENERS INITIALIZATION
// =============================================================================

document.addEventListener("DOMContentLoaded", function() {
  // 1. Load persisted cart
  loadCartFromStorage();
  updateCartUI();

  // 2. Initial Render of Products
  filterProducts();

  // 3. Dynamic Footer Year
  const yearEl = document.getElementById("currentYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 4. Cart Open / Close Buttons
  const cartOpenBtn = document.getElementById("cartOpenBtn");
  const cartCloseBtn = document.getElementById("cartCloseBtn");
  const cartBackdrop = document.getElementById("cartBackdrop");
  const cartContinueShoppingBtn = document.getElementById("cartContinueShoppingBtn");
  const cartContinueShoppingEmptyBtn = document.getElementById("cartContinueShoppingEmptyBtn");
  const cartCheckoutBtn = document.getElementById("cartCheckoutBtn");

  if (cartOpenBtn) cartOpenBtn.addEventListener("click", openCartDrawer);
  if (cartCloseBtn) cartCloseBtn.addEventListener("click", closeCartDrawer);
  if (cartBackdrop) cartBackdrop.addEventListener("click", closeCartDrawer);
  if (cartContinueShoppingBtn) cartContinueShoppingBtn.addEventListener("click", closeCartDrawer);
  if (cartContinueShoppingEmptyBtn) {
    cartContinueShoppingEmptyBtn.addEventListener("click", () => {
      closeCartDrawer();
      const pSec = document.getElementById("products");
      if (pSec) pSec.scrollIntoView({ behavior: "smooth" });
    });
  }
  if (cartCheckoutBtn) cartCheckoutBtn.addEventListener("click", openCheckoutModal);

  // 5. Coupon code button inside cart
  const cartCouponBtn = document.getElementById("cartCouponBtn");
  const cartCouponInput = document.getElementById("cartCouponInput");
  const removeCouponBtn = document.getElementById("removeCouponBtn");

  if (cartCouponBtn) {
    cartCouponBtn.addEventListener("click", () => {
      if (cartCouponInput) applyCoupon(cartCouponInput.value);
    });
  }
  if (cartCouponInput) {
    cartCouponInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        applyCoupon(cartCouponInput.value);
      }
    });
  }
  if (removeCouponBtn) {
    removeCouponBtn.addEventListener("click", removeCoupon);
  }

  // 6. Special Offers section coupon buttons click-to-copy
  document.querySelectorAll(".coupon-code-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      const code = this.getAttribute("data-coupon");
      if (code) {
        navigator.clipboard.writeText(code).then(() => {
          showToast(`Coupon "${code}" copied to clipboard!`, "success");
        }).catch(() => {
          showToast(`Coupon code: ${code}`, "info");
        });
      }
    });
  });

  // 7. Offer CTA buttons filter products
  document.querySelectorAll(".offer-cta-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      const targetCat = this.getAttribute("data-filter-category");
      if (targetCat) {
        setCategoryFilter(targetCat);
        const pSec = document.getElementById("products");
        if (pSec) pSec.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const shopAllOffersBtn = document.getElementById("shopAllOffersBtn");
  if (shopAllOffersBtn) {
    shopAllOffersBtn.addEventListener("click", () => {
      const pSec = document.getElementById("products");
      if (pSec) pSec.scrollIntoView({ behavior: "smooth" });
    });
  }

  // 8. Categories Grid "View Products" buttons
  document.querySelectorAll(".view-category-btn, .category-card").forEach(el => {
    el.addEventListener("click", function(e) {
      // Avoid firing if inner button clicked twice
      const category = this.getAttribute("data-category");
      if (category) {
        setCategoryFilter(category);
        const pSec = document.getElementById("products");
        if (pSec) pSec.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Footer Category Links
  document.querySelectorAll(".footer-cat-link").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const category = this.getAttribute("data-category");
      if (category) {
        setCategoryFilter(category);
        const pSec = document.getElementById("products");
        if (pSec) pSec.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 9. Category Pill Buttons
  const categoryPillsContainer = document.getElementById("categoryPills");
  if (categoryPillsContainer) {
    categoryPillsContainer.addEventListener("click", function(e) {
      const pill = e.target.closest(".category-pill");
      if (!pill) return;

      const cat = pill.getAttribute("data-category");
      setCategoryFilter(cat);
    });
  }

  function setCategoryFilter(categoryName) {
    state.filters.category = categoryName;

    // Update active pill UI
    document.querySelectorAll(".category-pill").forEach(p => {
      const pillCat = p.getAttribute("data-category");
      if (pillCat.toLowerCase() === categoryName.toLowerCase()) {
        p.classList.add("active");
      } else {
        p.classList.remove("active");
      }
    });

    filterProducts();
  }

  // 10. Product Search Input
  const searchInput = document.getElementById("productSearchInput");
  const searchClearBtn = document.getElementById("searchClearBtn");
  const searchTriggerBtn = document.getElementById("searchTriggerBtn");

  if (searchInput) {
    searchInput.addEventListener("input", function() {
      state.filters.searchQuery = this.value;
      if (searchClearBtn) {
        searchClearBtn.style.display = this.value.length > 0 ? "flex" : "none";
      }
      filterProducts();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener("click", function() {
      if (searchInput) {
        searchInput.value = "";
        state.filters.searchQuery = "";
        this.style.display = "none";
        filterProducts();
        searchInput.focus();
      }
    });
  }

  if (searchTriggerBtn) {
    searchTriggerBtn.addEventListener("click", () => {
      const pSec = document.getElementById("products");
      if (pSec) pSec.scrollIntoView({ behavior: "smooth" });
      if (searchInput) searchInput.focus();
    });
  }

  // 11. Dropdown Filters (Price, Rating, Sort)
  const priceFilter = document.getElementById("priceFilter");
  const ratingFilter = document.getElementById("ratingFilter");
  const sortFilter = document.getElementById("sortFilter");
  const resetFiltersBtn = document.getElementById("resetFiltersBtn");
  const clearAllFiltersBtn = document.getElementById("clearAllFiltersBtn");

  if (priceFilter) {
    priceFilter.addEventListener("change", function() {
      state.filters.priceRange = this.value;
      filterProducts();
    });
  }

  if (ratingFilter) {
    ratingFilter.addEventListener("change", function() {
      state.filters.minRating = this.value;
      filterProducts();
    });
  }

  if (sortFilter) {
    sortFilter.addEventListener("change", function() {
      state.filters.sortBy = this.value;
      filterProducts();
    });
  }

  function resetAllFilters() {
    state.filters.searchQuery = "";
    state.filters.category = "all";
    state.filters.priceRange = "all";
    state.filters.minRating = "all";
    state.filters.sortBy = "featured";

    if (searchInput) searchInput.value = "";
    if (searchClearBtn) searchClearBtn.style.display = "none";
    if (priceFilter) priceFilter.value = "all";
    if (ratingFilter) ratingFilter.value = "all";
    if (sortFilter) sortFilter.value = "featured";

    document.querySelectorAll(".category-pill").forEach(p => {
      p.classList.toggle("active", p.getAttribute("data-category") === "all");
    });

    filterProducts();
    showToast("Filters reset to default", "info");
  }

  if (resetFiltersBtn) resetFiltersBtn.addEventListener("click", resetAllFilters);
  if (clearAllFiltersBtn) clearAllFiltersBtn.addEventListener("click", resetAllFilters);

  // 12. Modal Close Buttons
  const closeDetailModalBtn = document.getElementById("closeDetailModalBtn");
  const productDetailModal = document.getElementById("productDetailModal");
  if (closeDetailModalBtn) closeDetailModalBtn.addEventListener("click", closeProductModal);
  if (productDetailModal) {
    productDetailModal.addEventListener("click", function(e) {
      if (e.target === this) closeProductModal();
    });
  }

  const closeCheckoutBtn = document.getElementById("closeCheckoutBtn");
  const checkoutModal = document.getElementById("checkoutModal");
  if (closeCheckoutBtn) closeCheckoutBtn.addEventListener("click", closeCheckoutModal);
  if (checkoutModal) {
    checkoutModal.addEventListener("click", function(e) {
      if (e.target === this) closeCheckoutModal();
    });
  }

  const successBackHomeBtn = document.getElementById("successBackHomeBtn");
  const orderSuccessModal = document.getElementById("orderSuccessModal");
  if (successBackHomeBtn && orderSuccessModal) {
    successBackHomeBtn.addEventListener("click", () => {
      orderSuccessModal.classList.remove("open");
      orderSuccessModal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      const hero = document.getElementById("hero");
      if (hero) hero.scrollIntoView({ behavior: "smooth" });
    });
  }

  // 13. Checkout Form Submit
  const checkoutForm = document.getElementById("checkoutForm");
  if (checkoutForm) checkoutForm.addEventListener("submit", handleCheckoutSubmit);

  // Payment radio option styling
  document.querySelectorAll(".payment-option-label input").forEach(radio => {
    radio.addEventListener("change", function() {
      document.querySelectorAll(".payment-option-label").forEach(l => l.classList.remove("selected"));
      this.closest(".payment-option-label").classList.add("selected");
    });
  });

  // 14. Contact Form Setup
  setupContactForm();

  // 15. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileDrawerClose = document.getElementById("mobileDrawerClose");

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileDrawer.classList.add("open");
      mobileDrawer.setAttribute("aria-hidden", "false");
    });
  }

  if (mobileDrawerClose && mobileDrawer) {
    mobileDrawerClose.addEventListener("click", () => {
      mobileDrawer.classList.remove("open");
      mobileDrawer.setAttribute("aria-hidden", "true");
    });
  }

  document.querySelectorAll("[data-close-drawer]").forEach(link => {
    link.addEventListener("click", () => {
      if (mobileDrawer) {
        mobileDrawer.classList.remove("open");
        mobileDrawer.setAttribute("aria-hidden", "true");
      }
    });
  });

  // 16. Header scroll shadow & Back to Top button
  const mainHeader = document.getElementById("mainHeader");
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (mainHeader) {
      if (scrollY > 50) {
        mainHeader.classList.add("scrolled");
      } else {
        mainHeader.classList.remove("scrolled");
      }
    }

    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }

    // Active nav link highlight based on scroll position
    updateActiveNavLink();
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 17. Active nav link on scroll
  function updateActiveNavLink() {
    const sections = ["hero", "products", "categories", "about", "offers", "contact"];
    const scrollPosition = window.scrollY + 120;

    for (const secId of sections) {
      const el = document.getElementById(secId);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          document.querySelectorAll(".nav-link").forEach(link => {
            if (link.getAttribute("href") === `#${secId}`) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
          break;
        }
      }
    }
  }

  // 18. Keyboard Escape key to close any open modal/drawer
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCartDrawer();
      closeProductModal();
      closeCheckoutModal();
      if (mobileDrawer) {
        mobileDrawer.classList.remove("open");
        mobileDrawer.setAttribute("aria-hidden", "true");
      }
    }
  });
});

// Expose globals for inline event handlers if needed
window.addToCart = addToCart;
window.updateCartItemQuantity = updateCartItemQuantity;
window.removeFromCart = removeFromCart;
window.openProductModal = openProductModal;
window.switchModalImage = switchModalImage;
window.selectModalColor = selectModalColor;
window.selectModalSize = selectModalSize;
window.changeModalQuantity = changeModalQuantity;
window.addModalItemToCart = addModalItemToCart;
window.buyNowModalItem = buyNowModalItem;
window.closeProductModal = closeProductModal;
window.openCheckoutModal = openCheckoutModal;
