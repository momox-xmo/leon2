document.addEventListener('DOMContentLoaded', function() {

  // Fetch Header
    fetch('header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header').innerHTML = data;


        //YABANCI
        let ani2 = lottie.loadAnimation({
          container: document.getElementById('ani2'),
          renderer: 'svg',
          loop: true,
          autoplay: true, // Corrected typo
          path: 'resources/anim/yab_logo.json'
        });

        //WALL
        let wall = lottie.loadAnimation({
          container: document.getElementById('wall'),
          renderer: 'svg',
          loop: true,
          autoplay: false, // Corrected typo
          path: 'resources/anim/wall.json'
        });

        //CANVAS
        let canvas = lottie.loadAnimation({
          container: document.getElementById('canvas'),
          renderer: 'svg',
          loop: true,
          autoplay: false, 
          path: 'resources/anim/canvas.json'
        });

        //MP4
        let mp4 = lottie.loadAnimation({
          container: document.getElementById('mp4'),
          renderer: 'svg',
          loop: true,
          autoplay: false, 
          path: 'resources/anim/mp4.json'
        });

        //PUBLISH
        let publish = lottie.loadAnimation({
          container: document.getElementById('publish'), // Replace with your container's ID
          renderer: 'svg',
          loop: false, // Do not loop by default
          autoplay: false, // Do not autoplay
          path: 'resources/anim/publish.json', // Path to your animation JSON
        });
  
        // Start at the first frame
        publish.goToAndStop(0, true);
  
        // Add hover event listeners
        let container = document.getElementById('publish');
  
        // On hover, play the animation at normal speed
        container.addEventListener('mouseenter', () => {
          publish.loop = true;
          publish.setSpeed(3); // Normal speed
          publish.play(); // Play animation
        });
  
        // On mouse leave, increase speed and continue playing
        container.addEventListener('mouseleave', () => {
          publish.loop = false;
          publish.setSpeed(20); // Increase speed
          publish.play(); // Continue playing
  
          // Reset to the first frame when the animation completes
          publish.addEventListener('complete', () => {
          publish.goToAndStop(0, true); // Reset to the first frame
          });
        });
      });
  
  });

  const bugDiv = document.getElementById("bug");
    const bugVideo = document.getElementById("bugVideo");
    const minTime = 1; // Minimum time (seconds) before the animation starts
    const maxTime = 30; // Maximum time (seconds) for random delays
    const minInterval = 10; // Minimum interval (seconds) between animations

    // Function to play the animation
    function playBugAnimation() {
        // Show the animation
        bugDiv.style.display = "block";
        bugVideo.currentTime = 0; // Start the video from the beginning
        bugVideo.play();

        // Hide the animation once the video ends
        bugVideo.onended = () => {
            bugDiv.style.display = "none";

            // Schedule the next animation
            scheduleNextAnimation();
        };
    }

    // Function to schedule the next animation
    function scheduleNextAnimation() {
        const delay = Math.random() * (maxTime - minTime) + minTime; // Random delay
        setTimeout(playBugAnimation, Math.max(delay * 1000, minInterval * 1000));
    }

    // Schedule the first animation
    setTimeout(playBugAnimation, Math.random() * (maxTime - minTime) * 1000 + minTime * 1000);









  // Fetch Footer
    fetch('footer.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('footer').innerHTML = data;
    });













//CANVAS ARRAY//
const canvasData = [
  
  {
      imageSrc: "resources/canvas/canvas_1.png",
      altText: "canvas_1",
      title: "c#2",
      year: "2023",
      dimensions: "60x80cm",
      medium: "oil on canvas"
  },
  {
      imageSrc: "resources/canvas/canvas_2.png",
      altText: "canvas_2",
      title: "c#3",
      year: "2022",
      dimensions: "70x90cm",
      medium: "acrylic on canvas"
  },
  {
    imageSrc: "resources/canvas/canvas_3.png",
    altText: "painting_1",
    title: "c#1",
    year: "2024",
    dimensions: "50x70cm",
    medium: "pen on paper"
}
];

// Function to generate canvas content dynamically
function generateCanvasContent() {
  const container = document.querySelector(".box_container"); // The parent container for canvas boxes

  canvasData.forEach(item => {
      const contentBox = document.createElement("div");
      contentBox.classList.add("content_box", "canvas_box");

      contentBox.innerHTML = `
          <div class="empty"></div>
          <div class="content_img">
              <img src="${item.imageSrc}" alt="${item.altText}">
          </div>
          <div class="description">
              <h2>${item.title}</h2>
              <p>${item.year}</p>
              <p>${item.dimensions}</p>
              <p>${item.medium}</p>
          </div>
      `;

      container.appendChild(contentBox);
  });
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", generateCanvasContent);
