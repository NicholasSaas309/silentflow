// Checkout redirect spinner
const spinner = document.getElementById('spinner');
document.querySelectorAll('[data-checkout]').forEach(a => {
  a.addEventListener('click', () => {
    spinner.style.display = 'flex';
    setTimeout(() => { spinner.style.display = 'none'; }, 6000);
  });
});

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  q.addEventListener('click', () => {
    const open = item.classList.toggle('open');
    a.style.maxHeight = open ? a.scrollHeight + 'px' : 0;
  });
});

// Video: autoplay muted loop, tap the speaker to unmute
document.querySelectorAll('.mute-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const v = btn.closest('.video-frame').querySelector('video');
    v.muted = !v.muted;
    btn.classList.toggle('is-unmuted', !v.muted);
    if (!v.muted) v.play().catch(() => {});
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
