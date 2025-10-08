// Small UI interactions: mobile nav, form submission, dynamic year
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle?.addEventListener('click', () => {
    if (!navLinks) return;
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.gap = '12px';
  });

  // Insert current year
  const y = new Date().getFullYear();
  document.getElementById('year').textContent = y;

  // Simple contact form handler (no backend) — shows success message
  window.submitContact = function(e){
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const msgEl = document.getElementById('formMsg');
    if (!name || !email) {
      msgEl.textContent = 'Please fill the required fields.';
      msgEl.style.color = 'crimson';
      return false;
    }
    // Normally you'd POST to an API — for now we simulate success
    form.reset();
    msgEl.style.color = 'green';
    msgEl.textContent = 'Thanks — your message has been received. We will get back to you shortly.';
    return false;
  };
});
