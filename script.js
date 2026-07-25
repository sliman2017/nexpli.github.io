// Nav border-on-scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });

// The hero demo (highlight, icon, and summary card) is visible by default —
// it no longer depends on scroll position or JavaScript to render correctly.
// Its entrance animation is pure CSS (see the sweepIn/popIn keyframes in
// style.css), so it always renders even if this script fails to load.
