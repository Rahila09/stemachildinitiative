
// ── Sticky nav ──────────────────────────────────────────────────────────────
const nav = document.getElementById('mainNav');
if (nav) {
  const updateNav = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });
}

// ── Mobile menu ──────────────────────────────────────────────────────────────
const toggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => mobileMenu.classList.remove('open'))
  );
}

// ── Nav active state (multi-page) ────────────────────────────────────────────
(function () {
  const segment = window.location.pathname.split('/').filter(Boolean)[0] || '';
  document.querySelectorAll('.nav-links a, .nav-mobile-menu a').forEach(a => {
    if (a.classList.contains('nav-cta')) return;
    const href = a.getAttribute('href') || '';
    const linkSegment = href.replace(/^\//, '').split('/')[0];
    if (linkSegment && linkSegment === segment) {
      a.classList.add('nav-active');
    }
  });
})();

// ── Scroll reveal ─────────────────────────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => entry.target.classList.add('visible'), idx * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => observer.observe(el));
}

// ── CTA card click: navigate to contact page ─────────────────────────────────
document.querySelectorAll('.cta-card').forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('.cta-card-title').textContent;
    const topic = title.includes('Donat') ? 'donation'
                : title.includes('Partner') ? 'csr'
                : 'volunteer';
    window.location.href = `/contact/?topic=${topic}`;
  });
});

// ── Pre-fill contact form from URL params ─────────────────────────────────────
const urlTopic = new URLSearchParams(window.location.search).get('topic');
const subjectEl = document.getElementById('subject');
if (urlTopic && subjectEl) subjectEl.value = urlTopic;

// ── Newsletter ────────────────────────────────────────────────────────────────
document.querySelectorAll('.newsletter-submit').forEach(btn => {
  btn.addEventListener('click', function () {
    const input = this.closest('.newsletter-form').querySelector('.newsletter-input');
    if (!input.value || !input.value.includes('@')) {
      input.style.borderColor = 'var(--gold)';
      input.focus();
      return;
    }
    this.textContent = '✓ Subscribed!';
    this.style.background = '#1A6A3A';
    this.style.color = 'white';
    input.value = '';
    setTimeout(() => {
      this.textContent = 'Subscribe';
      this.style.background = '';
      this.style.color = '';
    }, 3000);
  });
});

// ── Stat banner observer ──────────────────────────────────────────────────────
const statBanner = document.querySelector('.stat-banner');
if (statBanner) {
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting) e.target.classList.add('visible');
  }, { threshold: 0.3 }).observe(statBanner);
}
