<script lang="ts">
  import { onMount } from 'svelte';

  // Define the number of images to fall
  const numberOfImages = 30;

  // Create an array to hold image details
  let images: { left: number; top: number; opacity: number; rotation: number; size: number }[] = [];

  // Initialize the images with random positions, opacity, rotation, and size
  function initializeImages() {
    for (let i = 0; i < numberOfImages; i++) {
      images.push({
        left: Math.random() * window.innerWidth,
        top: -Math.random() * window.innerHeight, // Start from random positions above the screen
        opacity: Math.random(), // Random initial opacity
        rotation: Math.random() * 360, // Random initial rotation angle
        size: Math.random() * 0.03 + 0.02, // Random size between 0.5 and 1.0
      });
    }
  }

  // Function to update the position, rotation, and size of the falling images
  function fall() {
    images = images.map((image) => {
      // Update the top position to make the image fall
      const newTop = image.top + Math.random() * 5 + 2; // Random speed between 2 and 7

      // Calculate opacity based on the distance from the top of the viewport
      const distanceFromTop = window.innerHeight - newTop;
      const opacity = Math.max(0, distanceFromTop / (window.innerHeight * 1.5));

      // Slowly rotate the image as it falls
      const rotation = image.rotation + 0.2; // Adjust the rotation speed as needed

      // Reset the position, rotation, and size when image goes beyond the screen
      if (newTop > window.innerHeight) {
        return {
          left: Math.random() * window.innerWidth,
          top: -Math.random() * window.innerHeight, // Start from random positions above the screen
          opacity: Math.random(), // Reset opacity
          rotation: Math.random() * 360, // Random initial rotation angle
          size: Math.random() * 0.03 + 0.02, // Random size between 0.5 and 1.0
        };
      }

      return { ...image, top: newTop, opacity, rotation };
    });
  }

  onMount(() => {
    initializeImages();

    // Start the animation loop
    const animationLoop = setInterval(fall, 1000 / 60); // Update position roughly every frame

    // Clean up the interval when the component is destroyed
    return () => clearInterval(animationLoop);
  });
</script>

{#each images as { left, top, opacity, rotation, size }, i}
  <img src="./src/components/images/kokomirain.png" alt="Falling" style="
    position: absolute;
    left: {left}px;
    top: {top}px;
    opacity: {opacity};
    width: {size * 100}%; /* Adjust size */
    transform: rotate({rotation}deg); /* Apply rotation */
    transition: opacity 0.5s ease-out, transform 0.5s ease-out, width 0.5s ease-out; /* Add transition for fading, rotation, and size effect */
  ">
{/each}
