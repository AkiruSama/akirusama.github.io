document.addEventListener("DOMContentLoaded", () => {
  const headerHeight = 120; // Adjust offset for fixed header
  const navLinks = document.querySelectorAll('nav ul li a');

  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;

      const topPos = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: topPos,
        behavior: 'smooth'
      });

      // Close menu on mobile after clicking
      const menu = document.getElementById('nav-menu');
      menu.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  const menu = document.getElementById('nav-menu');
  document.addEventListener('click', function (e) {
    const menuToggle = document.querySelector('.menu-toggle');
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
      menu.classList.remove('active');
    }
  });

  // Back to top button
  const backToTopButton = document.querySelector('.back-to-top');
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Close navbar menu on scroll
  window.addEventListener('scroll', () => {
    menu.classList.remove('active');
  });

  // Skills bar animation when visible
  const skills = document.querySelectorAll('.skill-fill');

  // Store actual width in a data attribute
  skills.forEach(skill => {
    const actualWidth = skill.style.width;
    skill.setAttribute('data-skill', actualWidth);
    skill.style.width = '0%'; // start from 0
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skills.forEach((skill, index) => {
          setTimeout(() => {
            skill.style.width = skill.getAttribute('data-skill');
          }, index * 200);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  const skillsSection = document.querySelector('#skills');
  if (skillsSection) observer.observe(skillsSection);
});

// Toggle mobile menu
function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('active');
}
