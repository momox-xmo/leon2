//BUG//
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


