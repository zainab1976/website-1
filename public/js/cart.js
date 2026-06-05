const CART_KEY = 'lanzaa_cart';

const Cart = {
  getItems() {
    try {
      const items = JSON.parse(localStorage.getItem(CART_KEY)) || [];
      return items.map((item) => ({
        ...item,
        image: item.image || '/images/image9.jpg'
      }));
    } catch {
      return [];
    }
  },

  saveItems(items) {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    this.updateUI();
  },

  addItem(product, qty = 1) {
    const items = this.getItems();
    const existing = items.find((item) => item.id === product.id);

    if (existing) {
      existing.qty += qty;
    } else {
      items.push({ ...product, qty });
    }

    this.saveItems(items);
    this.showToast(`${product.name} added to cart`);
  },

  updateQty(id, qty) {
    const items = this.getItems();
    const item = items.find((i) => i.id === id);
    if (!item) return;

    item.qty = Math.max(1, Math.min(99, qty));
    this.saveItems(items);
  },

  removeItem(id) {
    const items = this.getItems().filter((i) => i.id !== id);
    this.saveItems(items);
  },

  getTotalQty() {
    return this.getItems().reduce((sum, item) => sum + item.qty, 0);
  },

  buildOrderMessage({ name, phone, address, notes, items }) {
    const lines = [
      'Hello! I want to place an order:',
      '',
      '*Order Details*'
    ];

    items.forEach((item) => {
      lines.push(`• ${item.name} (${item.volume})`);
      lines.push(`  Qty: ${item.qty}`);
      if (item.price) lines.push(`  Price: Rs. ${item.price} each`);
    });

    lines.push('');
    lines.push(`*Customer Name:* ${name}`);
    lines.push(`*Phone:* ${phone}`);
    lines.push(`*Address:* ${address}`);

    if (notes) {
      lines.push(`*Notes:* ${notes}`);
    }

    lines.push('');
    lines.push('Sent from LANZAA website');

    return lines.join('\n');
  },

  buildProductOrderMessage({ name, phone, address, notes, product, qty }) {
    return this.buildOrderMessage({
      name,
      phone,
      address,
      notes,
      items: [{ ...product, qty }]
    });
  },

  openWhatsApp(message, phone = '923194426308') {
    console.log(`[LANZAA CTA] WhatsApp order — page: ${window.location.pathname}, phone: ${phone}`);
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  },

  showToast(msg) {
    const toast = document.getElementById('cart-toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.remove('opacity-0', 'translate-y-2');
    toast.classList.add('opacity-100', 'translate-y-0');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      toast.classList.remove('opacity-100', 'translate-y-0');
    }, 2500);
  },

  updateUI() {
    const count = this.getTotalQty();
    document.querySelectorAll('[data-cart-count]').forEach((el) => {
      el.textContent = count;
      el.classList.toggle('hidden', count === 0);
    });
    this.renderDrawer();
  },

  renderDrawer() {
    const list = document.getElementById('cart-items');
    const empty = document.getElementById('cart-empty');
    const footer = document.getElementById('cart-footer');
    if (!list) return;

    const items = this.getItems();
    list.innerHTML = '';

    if (items.length === 0) {
      if (empty) empty.classList.remove('hidden');
      if (footer) footer.classList.add('hidden');
      return;
    }

    if (empty) empty.classList.add('hidden');
    if (footer) footer.classList.remove('hidden');

    items.forEach((item) => {
      const image = item.image || '/images/image9.jpg';
      const row = document.createElement('div');
      row.className = 'cart-item flex gap-3 p-3 bg-beige rounded-xl border border-beige-dark';
      row.innerHTML = `
        <img src="${image}" alt="${item.name}" class="w-16 h-16 rounded-lg object-cover flex-shrink-0" loading="lazy">
        <div class="flex-1 min-w-0">
          <p class="text-sm font-semibold text-black-brand truncate">${item.name}</p>
          <p class="text-xs text-gray-500">${item.volume}</p>
          ${item.price ? `<p class="text-xs text-gold mt-1">Rs. ${item.price}</p>` : ''}
          <div class="flex items-center gap-2 mt-2">
            <button type="button" class="qty-btn cart-qty-minus w-7 h-7 rounded-full border border-gold text-gold text-sm" data-id="${item.id}" aria-label="Decrease quantity">−</button>
            <span class="text-sm font-medium w-6 text-center cart-item-qty">${item.qty}</span>
            <button type="button" class="qty-btn cart-qty-plus w-7 h-7 rounded-full border border-gold text-gold text-sm" data-id="${item.id}" aria-label="Increase quantity">+</button>
            <button type="button" class="cart-remove ml-auto text-xs text-gray-400 hover:text-maroon" data-id="${item.id}">Remove</button>
          </div>
        </div>
      `;
      list.appendChild(row);
    });

    list.querySelectorAll('.cart-qty-minus').forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = items.find((i) => i.id === btn.dataset.id);
        if (item) Cart.updateQty(item.id, item.qty - 1);
      });
    });

    list.querySelectorAll('.cart-qty-plus').forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = items.find((i) => i.id === btn.dataset.id);
        if (item) Cart.updateQty(item.id, item.qty + 1);
      });
    });

    list.querySelectorAll('.cart-remove').forEach((btn) => {
      btn.addEventListener('click', () => Cart.removeItem(btn.dataset.id));
    });
  },

  openDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (!drawer) return;
    drawer.classList.remove('translate-x-full');
    overlay?.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  },

  closeDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (!drawer) return;
    drawer.classList.add('translate-x-full');
    overlay?.classList.add('hidden');
    document.body.style.overflow = '';
  },

  migrateCartImages() {
    const items = this.getItems().map((item) =>
      item.id === 'lanzaa-onion-hair-oil'
        ? { ...item, image: '/images/image9.jpg' }
        : item
    );
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  },

  init() {
    this.migrateCartImages();
    this.updateUI();

    document.querySelectorAll('[data-cart-open]').forEach((btn) => {
      btn.addEventListener('click', () => this.openDrawer());
    });

    document.getElementById('cart-close')?.addEventListener('click', () => this.closeDrawer());
    document.getElementById('cart-overlay')?.addEventListener('click', () => this.closeDrawer());

    document.getElementById('cart-checkout')?.addEventListener('click', () => {
      const items = this.getItems();
      if (items.length === 0) return;

      const name = document.getElementById('cart-name')?.value.trim();
      const phone = document.getElementById('cart-phone')?.value.trim();
      const address = document.getElementById('cart-address')?.value.trim();
      const notes = document.getElementById('cart-notes')?.value.trim();

      if (!name || !phone || !address) {
        this.showToast('Please fill name, phone & address');
        return;
      }

      const message = this.buildOrderMessage({ name, phone, address, notes, items });
      const phoneNum = document.getElementById('cart-drawer')?.dataset.whatsapp || '923194426308';
      this.openWhatsApp(message, phoneNum);
    });

    this.initProductPage();
  },

  initProductPage() {
    const productEl = document.getElementById('product-data');
    if (!productEl) return;

    const product = {
      id: productEl.dataset.id,
      name: productEl.dataset.name,
      volume: productEl.dataset.volume,
      price: Number(productEl.dataset.price) || 0,
      image: productEl.dataset.image
    };

    const qtyInput = document.getElementById('product-qty');
    const minusBtn = document.getElementById('qty-minus');
    const plusBtn = document.getElementById('qty-plus');
    const addBtn = document.getElementById('add-to-cart');
    const orderForm = document.getElementById('order-form');

    function getQty() {
      return Math.max(1, Math.min(99, parseInt(qtyInput?.value || '1', 10)));
    }

    function setQty(val) {
      if (qtyInput) qtyInput.value = Math.max(1, Math.min(99, val));
    }

    minusBtn?.addEventListener('click', () => setQty(getQty() - 1));
    plusBtn?.addEventListener('click', () => setQty(getQty() + 1));

    qtyInput?.addEventListener('change', () => setQty(getQty()));

    addBtn?.addEventListener('click', () => {
      this.addItem(product, getQty());
    });

    orderForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('order-name')?.value.trim();
      const phone = document.getElementById('order-phone')?.value.trim();
      const address = document.getElementById('order-address')?.value.trim();
      const notes = document.getElementById('order-notes')?.value.trim();
      const qty = getQty();

      if (!name || !phone || !address) {
        this.showToast('Please fill all required fields');
        return;
      }

      const message = this.buildProductOrderMessage({ name, phone, address, notes, product, qty });
      this.openWhatsApp(message, productEl.dataset.whatsapp);
    });
  }
};

document.addEventListener('DOMContentLoaded', () => Cart.init());
