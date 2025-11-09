// // Smooth Scroll for navigation links
// document.addEventListener('DOMContentLoaded', () => {
//   const links = document.querySelectorAll('header nav a');
//   const menu = document.getElementById('nav-menu');
//   links.forEach(link => {
//       link.addEventListener('click', function (e) {
//           e.preventDefault();
//           // document.querySelector(this.getAttribute('href')).scrollIntoView({
//           //     behavior: 'smooth'
//           // });
//         const target = document.querySelector(this.getAttribute('href'));
//         const offset = 80; // adjust this based on your navbar height (in px)
//         const elementPosition = target.getBoundingClientRect().top + window.scrollY;
//         const offsetPosition = elementPosition - offset;
        
//         window.scrollTo({
//           top: offsetPosition,
//           behavior: 'smooth'
//         });
//       });
//   });
//   // Event listener to close the menu when clicking outside of it
//   document.addEventListener('click', function (e) {
//       const menuToggle = document.querySelector('.menu-toggle'); // The button that opens the menu

//       if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
//           menu.classList.remove('active'); // Close menu if click is outside
//       }
//   });

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('header nav a');
  const header = document.querySelector('.header'); // your fixed header
  const extraOffset = 60; // adjust this value as needed

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const headerHeight = header.offsetHeight;

      // Calculate the position with extra offset
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - extraOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Close menu on mobile after click
      const menu = document.getElementById('nav-menu');
      menu.classList.remove('active');
    });
  });

  // Event listener to close the menu when clicking outside of it
  const menu = document.getElementById('nav-menu');
  document.addEventListener('click', function (e) {
    const menuToggle = document.querySelector('.menu-toggle');
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
      menu.classList.remove('active');
    }
  });
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

//skills bar section
const skills = document.querySelectorAll('.skill-fill');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          skill.style.width = skill.getAttribute('data-skill');
        }, index * 300); // 300ms delay between each bar
      });
      observer.disconnect(); // stop observing after animation starts
    }
  });
}, { threshold: 0.5 });

skills.forEach(skill => {
  skill.style.width = '0%'; // start from 0
  observer.observe(skill);
});
