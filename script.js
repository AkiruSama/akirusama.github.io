// Smooth Scroll for navigation links
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('header nav a');
  const menu = document.getElementById('nav-menu');
  links.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          // document.querySelector(this.getAttribute('href')).scrollIntoView({
          //     behavior: 'smooth'
          // });
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 80; // adjust this based on your navbar height (in px)
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;
        
        window.scrollTo({
          top: offsetPosition,
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

  const skills = document.querySelectorAll('.skill-fill');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transition = 'width 1.5s ease-in-out';
        entry.target.style.width = entry.target.getAttribute('style').split(':')[1];
      }
    });
  }, { threshold: 0.5 });

  skills.forEach(skill => observer.observe(skill));
