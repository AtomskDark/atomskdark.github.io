// Document Ready Event
document.addEventListener("DOMContentLoaded", function() {
  // Welcome Section Animation
  const welcomeSection = document.getElementById("Welcome");
  
  // Function to trigger the animation
  function fadeInScaleUpAnimation() {
      welcomeSection.classList.add("fade-in-scale-up");
  }
  
  // Trigger the animation
  fadeInScaleUpAnimation();
  
  // Navigation Menu - Smooth Scrolling
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href');
          const target = document.querySelector(targetId);
          target.scrollIntoView({ behavior:'smooth', block: 'center' });
      });
  });
  
  // Hero Button - Learn More
  const learnMoreButton = document.querySelector('#hero button');
  learnMoreButton.addEventListener('click', () => {
      const portfolioSection = document.getElementById('portfolio');
      portfolioSection.scrollIntoView({ behavior:'smooth', block: 'center' });
  });
  
  // Portfolio Item - Image Enlargement (Basic Example)
  const portfolioImages = document.querySelectorAll('.portfolio-item img');
  portfolioImages.forEach(img => {
      img.addEventListener('click', () => {
          // Simple Alert for Demonstration
          // For Actual Implementation, consider using a Lightbox or Modal Library
          alert('Image Clicked. Implement Lightbox or Modal for better UX.');
      });
  });
});