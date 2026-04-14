  <!-- =====================================================
       JAVASCRIPT
  ===================================================== -->
  <script>
    // ── Sticky nav: add .scrolled when page is scrolled ──────────────────
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });

    // ── Mobile menu toggle ────────────────────────────────────────────────
    const toggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    toggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
    // Close when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });

    // ── Scroll reveal ─────────────────────────────────────────────────────
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger siblings within the same parent
          const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
          const idx = siblings.indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, idx * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));

    // ── Smooth nav link active state ──────────────────────────────────────
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
      });
      navLinks.forEach(a => {
        a.style.color = '';
        if (a.getAttribute('href') === '#' + current) {
          a.style.color = 'var(--gold)';
        }
      });
    }, { passive: true });

    // ── Counter animation for impact stats ───────────────────────────────
    function animateCounter(el, target, suffix = '', duration = 1600) {
      let start = 0;
      const step = target / (duration / 16);
      const timer = setInterval(() => {
        start += step;
        if (start >= target) {
          el.textContent = target.toLocaleString() + suffix;
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(start).toLocaleString() + suffix;
        }
      }, 16);
    }

    // Trigger counters when stats section is visible
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const nums = entry.target.querySelectorAll('.stat-banner-num');
          // These are text-based, skip auto-animation for '<2%' style values
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    const statBanner = document.querySelector('.stat-banner');
    if (statBanner) statsObserver.observe(statBanner);

    // ── Form submission handler ───────────────────────────────────────────
    function handleFormSubmit() {
      const email = document.getElementById('email').value;
      const name  = document.getElementById('firstName').value;
      if (!email || !name) {
        alert('Please fill in your name and email address.');
        return;
      }
      // Replace with actual form submission logic (e.g. Formspree, EmailJS)
      const btn = document.querySelector('.contact-form .btn-navy');
      btn.textContent = '✓ Message Sent!';
      btn.style.background = '#1A6A3A';
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = 'Send Message <svg viewBox="0 0 16 16" fill="none" width="16" height="16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    }

    // ── CTA card click handlers ───────────────────────────────────────────
    document.querySelectorAll('.cta-card').forEach(card => {
      card.addEventListener('click', () => {
        const title = card.querySelector('.cta-card-title').textContent;
        document.getElementById('subject').value =
          title.includes('Donat') ? 'Donating to the Foundation' :
          title.includes('Partner') ? 'Corporate / CSR Partnership' :
          'Volunteering';
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      });
    });

    // ── Newsletter form ───────────────────────────────────────────────────
    document.querySelector('.newsletter-submit').addEventListener('click', function() {
      const input = document.querySelector('.newsletter-input');
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
  </script>
