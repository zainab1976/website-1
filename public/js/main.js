document.addEventListener('DOMContentLoaded', () => {
  initPageLoader();
  initScrollProgress();
  initNavbarBlur();
  initMobileMenu();
  initScrollReveal();
  initHeroCarousel();
  initGallerySlider();
  initLightbox();
  initProductTabs();
  initTestimonialSlider();
  initEmailCopy();
  initStickyWhatsAppBar();
  trackWhatsAppClicks();
});

function initPageLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;

  document.body.classList.add('loading');

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.classList.remove('loading');
    }, 800);
  });

  setTimeout(() => {
    loader.classList.add('hidden');
    document.body.classList.remove('loading');
  }, 2500);
}

function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${progress}%`;
  }, { passive: true });
}

function initNavbarBlur() {
  const navbar = document.getElementById('main-navbar');
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    iconOpen.classList.toggle('hidden', !isOpen);
    iconClose.classList.toggle('hidden', isOpen);
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
    });
  });
}

function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}

function initHeroCarousel() {
  const slider = document.querySelector('.hero-carousel');
  if (!slider) return;

  const slides = slider.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.hero-dot');
  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');
  let current = 0;
  let interval;
  let touchStartX = 0;
  let touchEndX = 0;

  function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
    current = index;
  }

  function next() {
    showSlide((current + 1) % slides.length);
  }

  function prev() {
    showSlide((current - 1 + slides.length) % slides.length);
  }

  function startAuto() {
    interval = setInterval(next, 4500);
  }

  function resetAuto() {
    clearInterval(interval);
    startAuto();
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { showSlide(i); resetAuto(); });
  });

  prevBtn?.addEventListener('click', () => { prev(); resetAuto(); });
  nextBtn?.addEventListener('click', () => { next(); resetAuto(); });

  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
      resetAuto();
    }
  }, { passive: true });

  showSlide(0);
  startAuto();
}

function initGallerySlider() {
  const gallery = document.querySelector('.gallery-slider');
  if (!gallery) return;

  const slides = gallery.querySelectorAll('.gallery-slide');
  const thumbs = document.querySelectorAll('.gallery-thumb');
  const prevBtn = document.getElementById('gallery-prev');
  const nextBtn = document.getElementById('gallery-next');
  let current = 4;

  window.showGallerySlide = function showGallerySlide(index) {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    thumbs.forEach((t, i) => {
      t.classList.toggle('ring-2', i === index);
      t.classList.toggle('ring-gold', i === index);
      t.classList.toggle('opacity-100', i === index);
      t.classList.toggle('opacity-60', i !== index);
    });
    current = index;
    window._galleryCurrent = index;
  };

  window._galleryCurrent = current;
  window._gallerySlides = slides;

  thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => window.showGallerySlide(i));
  });

  prevBtn?.addEventListener('click', () => {
    window.showGallerySlide((current - 1 + slides.length) % slides.length);
  });

  nextBtn?.addEventListener('click', () => {
    window.showGallerySlide((current + 1) % slides.length);
  });

  window.showGallerySlide(current);
}

function initLightbox() {
  const gallery = document.querySelector('.gallery-slider');
  if (!gallery) return;

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (!lightbox || !lightboxImg) return;

  let lbIndex = 0;

  function openLightbox(index) {
    const slides = window._gallerySlides;
    if (!slides) return;
    lbIndex = index;
    const img = slides[index]?.querySelector('img');
    if (!img) return;
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function navLightbox(dir) {
    const slides = window._gallerySlides;
    if (!slides) return;
    lbIndex = (lbIndex + dir + slides.length) % slides.length;
    const img = slides[lbIndex]?.querySelector('img');
    if (img) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    }
    if (window.showGallerySlide) window.showGallerySlide(lbIndex);
  }

  gallery.querySelectorAll('.gallery-slide').forEach((slide, i) => {
    slide.addEventListener('click', () => openLightbox(i));
  });

  document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
  document.getElementById('lightbox-prev')?.addEventListener('click', () => navLightbox(-1));
  document.getElementById('lightbox-next')?.addEventListener('click', () => navLightbox(1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navLightbox(-1);
    if (e.key === 'ArrowRight') navLightbox(1);
  });
}

function initProductTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach((t) => t.classList.toggle('active', t.dataset.tab === target));
      panels.forEach((p) => p.classList.toggle('active', p.dataset.panel === target));
    });
  });
}

function initTestimonialSlider() {
  const track = document.getElementById('testimonial-track');
  if (!track) return;

  const slides = track.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');
  let current = 0;

  function getVisibleCount() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  function maxIndex() {
    return Math.max(0, slides.length - getVisibleCount());
  }

  function update() {
    const slideWidth = slides[0]?.offsetWidth || 0;
    track.style.transform = `translateX(-${current * slideWidth}px)`;
  }

  prevBtn?.addEventListener('click', () => {
    current = current <= 0 ? maxIndex() : current - 1;
    update();
  });

  nextBtn?.addEventListener('click', () => {
    current = current >= maxIndex() ? 0 : current + 1;
    update();
  });

  let testimonialInterval = setInterval(() => {
    current = current >= maxIndex() ? 0 : current + 1;
    update();
  }, 5000);

  track.addEventListener('mouseenter', () => clearInterval(testimonialInterval));
  track.addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(() => {
      current = current >= maxIndex() ? 0 : current + 1;
      update();
    }, 5000);
  });

  window.addEventListener('resize', () => {
    if (current > maxIndex()) current = maxIndex();
    update();
  });
}

function initEmailCopy() {
  const copyBtn = document.getElementById('copy-email');
  const emailEl = document.getElementById('contact-email');
  if (!copyBtn || !emailEl) return;

  copyBtn.addEventListener('click', async () => {
    const email = emailEl.dataset.email || emailEl.textContent.trim();
    try {
      await navigator.clipboard.writeText(email);
      copyBtn.textContent = 'Copied!';
      copyBtn.classList.add('copied');
      setTimeout(() => {
        copyBtn.textContent = 'Copy';
        copyBtn.classList.remove('copied');
      }, 2000);
    } catch {
      copyBtn.textContent = 'Failed';
      setTimeout(() => { copyBtn.textContent = 'Copy'; }, 2000);
    }
  });
}

function initStickyWhatsAppBar() {
  const bar = document.getElementById('sticky-whatsapp-bar');
  if (!bar) return;

  document.body.classList.add('has-sticky-cta');

  const showBar = () => {
    bar.classList.toggle('visible', window.scrollY > 300);
  };

  window.addEventListener('scroll', showBar, { passive: true });
  showBar();
}

function trackWhatsAppClicks() {
  document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach((link) => {
    link.addEventListener('click', () => {
      const label = link.getAttribute('aria-label') || link.textContent.trim().slice(0, 40);
      const page = window.location.pathname;
      console.log(`[LANZAA CTA] WhatsApp click — page: ${page}, label: "${label}"`);
    });
  });
}
