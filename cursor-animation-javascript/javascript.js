// script.js
document.addEventListener('mousemove', (event) => {
    // Get cursor position
    const { clientX, clientY } = event;
  
    // Create a trail element
    const trail = document.createElement('div');
    trail.classList.add('trail');
  
    // Randomize the color
    const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    trail.style.backgroundColor = randomColor;
  
    // Position the trail element
    trail.style.left = `${clientX}px`;
    trail.style.top = `${clientY}px`;
  
    // Add the trail to the body
    document.body.appendChild(trail);
  
    // Remove the trail after the animation ends
    setTimeout(() => {
      trail.remove();
    }, 1000); // Matches the animation duration
  });
  