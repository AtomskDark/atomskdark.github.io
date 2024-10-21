document.addEventListener("DOMContentLoaded", function() {
  const welcomeSection = document.getElementById("Welcome");
  
  // Function to trigger the animation
  function fadeInScaleUpAnimation() {
    welcomeSection.classList.add("fade-in-scale-up");
  }
  
  // Trigger the animation
  fadeInScaleUpAnimation();
});