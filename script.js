// Smooth Scroll for navigation links
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('header nav a');
  const menu = document.getElementById('nav-menu');
  links.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
  // Event listener to close the menu when clicking outside of it
  document.addEventListener('click', function (e) {
      const menuToggle = document.querySelector('.menu-toggle'); // The button that opens the menu

      if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
          menu.classList.remove('active'); // Close menu if click is outside
      }
  });

});
function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('active');
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggle Navbar Active State on Scroll
window.addEventListener('scroll', function () {
  const menu = document.getElementById('nav-menu');
  menu.classList.remove('active');
});
