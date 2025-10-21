// Function to toggle the menu
function toggleMenu() {
    const navLinks = document.querySelector('.header-nav-links');
    navLinks.classList.toggle('active');
  }
  
  // Function to close the menu if clicked outside
  function closeMenuOnClickOutside(event) {
    const navLinks = document.querySelector('.header-nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
  
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
      navLinks.classList.remove('active');
    }
  }
  
  // Function to close the menu on scroll
  function closeMenuOnScroll() {
    const navLinks = document.querySelector('.header-nav-links');
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  }
  
  // Add event listeners
  document.addEventListener('click', closeMenuOnClickOutside);
  document.addEventListener('scroll', closeMenuOnScroll);
  
