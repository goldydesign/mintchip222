// On narrow screens, :hover can't open the Calculators dropdown (no mouse),
// so the first tap on its trigger opens the menu instead of navigating away.
document.querySelectorAll('.nav-dropdown > a').forEach(function (trigger) {
  trigger.addEventListener('click', function (e) {
    var dropdown = trigger.parentElement;
    if (window.matchMedia('(max-width: 700px)').matches) {
      e.preventDefault();
      dropdown.classList.toggle('open');
    }
  });
});

document.addEventListener('click', function (e) {
  document.querySelectorAll('.nav-dropdown.open').forEach(function (dropdown) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });
});
