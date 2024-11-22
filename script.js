//LOAING
    $(window).on("load", function(){
        $(".loader_wrapper").fadeOut(200);
    });



document.addEventListener('DOMContentLoaded', function() {

  // FETCH HEADER
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
          path: 'resources/assets/menu/yab_logo.json'
        });

        //WALL
        let wall = lottie.loadAnimation({
          container: document.getElementById('wall'),
          renderer: 'svg',
          loop: true,
          autoplay: false, // Corrected typo
          path: 'resources/assets/menu/wall.json'
        });

        //CANVAS
        let canvas = lottie.loadAnimation({
          container: document.getElementById('canvas'),
          renderer: 'svg',
          loop: true,
          autoplay: false, 
          path: 'resources/assets/menu/canvas.json'
        });

        //MP4
        let mp4 = lottie.loadAnimation({
          container: document.getElementById('mp4'),
          renderer: 'svg',
          loop: true,
          autoplay: false, 
          path: 'resources/assets/menu/mp4.json'
        });

        //PUBLISH
        let publish = lottie.loadAnimation({
          container: document.getElementById('publish'), // Replace with your container's ID
          renderer: 'svg',
          loop: false, // Do not loop by default
          autoplay: false, // Do not autoplay
          path: 'resources/assets/menu/publish.json', // Path to your animation JSON
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
  

//WRAPPER//
    $(window).on("load",function(){
        $(".loader_wrapper").fadeOut("slow");
    });
    
    
  //FETCH FOOTER
    fetch('footer.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('footer').innerHTML = data;
    });

    const bugDiv = document.getElementById("bug");
    const bugVideo = document.getElementById("bugVideo");

    // Adjustable parameters
    const minDelay = 2;  // Minimum delay in seconds
    const maxDelay = 15; // Maximum delay in seconds
    const mandatoryInterval = 20; // Minimum interval in seconds between animations

    // Function to play the animation
    function playBugAnimation() {
        // Make the bug visible
        bugDiv.style.display = "block";

        // Start video playback from the beginning
        bugVideo.currentTime = 0;
        bugVideo.play();

        // Hide the animation when the video ends
        bugVideo.onended = () => {
            bugDiv.style.display = "none";

            // Schedule the next animation
            scheduleNextAnimation();
        };
    }

    // Function to schedule the next animation
    function scheduleNextAnimation() {
        // Generate a random delay between minDelay and maxDelay
        const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;

        // Ensure there's at least the mandatory interval between plays
        const adjustedDelay = Math.max(randomDelay, mandatoryInterval);

        // Schedule the next animation
        setTimeout(playBugAnimation, adjustedDelay * 1000);
    }

    // Schedule the first animation
    setTimeout(playBugAnimation, Math.random() * (maxDelay - minDelay) * 1000 + minDelay * 1000);
});





//CONTENT   
    const canvasPageData = [
        {
            imageSrc: "resources/canvas/canvas_1.webp",
            altText: "painting_1",
            title: "c#1",
            year: "2024",
            dimensions: "50x70cm",
            medium: "pen on paper"
        },
        {
            imageSrc: "resources/canvas/canvas_2.webp",
            altText: "painting_2",
            title: "c#1",
            year: "2024",
            dimensions: "50x70cm",
            medium: "pen on paper"
        },
        {
            imageSrc: "resources/canvas/canvas_3.webp",
            altText: "painting_2",
            title: "c#1",
            year: "2024",
            dimensions: "50x70cm",
            medium: "pen on paper"
        },
        {
            imageSrc: "resources/canvas/canvas_4.webp",
            altText: "painting_2",
            title: "c#1",
            year: "2024",
            dimensions: "50x70cm",
            medium: "pen on paper"
        },
    ];
    
    const wallPageData = [
        {
            imageSrc: "resources/wall/wall_20.webp",
            altText: "painting_1",
            title: "w#1",
            date: "2023",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_3.webp",
            altText: "painting_1",
            title: "w#1",
            date: "2023",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_1.webp",
            altText: "painting_1",
            title: "w#1",
            date: "2023",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_2.webp",
            altText: "painting_1",
            title: "w#1",
            date: "2023",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_6.webp",
            altText: "painting_1",
            title: "w#1",
            date: "2023",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_4.webp",
            altText: "painting_1",
            title: "w#1",
            date: "2023",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_5.webp",
            altText: "painting_1",
            title: "w#1",
            date: "2023",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_7.webp",
            altText: "painting_1",
            title: "w#1",
            date: "2023",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_8.webp",
            altText: "painting_1",
            title: "w#1",
            date: "2023",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_9.webp",
            altText: "painting_1",
            title: "w#1",
            date: "2023",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_10.webp",
            altText: "painting_1",
            title: "w#1",
            date: "2023",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_11.webp",
            altText: "painting_1",
            title: "w#1",
            date: "2023",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_12.webp",
            altText: "painting_1",
            title: "w#1",
            date: "2023",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_13.webp",
            altText: "painting_1",
            title: "w#1",
            date: "2023",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_14.webp",
            altText: "painting_1",
            title: "w#1",
            date: "2023",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_15.webp",
            altText: "painting_1",
            title: "w#1",
            date: "2023",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_16.webp",
            altText: "painting_1",
            title: "w#1",
            date: "2023",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_17.webp",
            altText: "painting_1",
            title: "w#1",
            date: "2023",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_18.webp",
            altText: "painting_1",
            title: "w#1",
            date: "2023",
            location: "Istanbul"
        },
        {
            imageSrc: "resources/wall/wall_19.webp",
            altText: "painting_1",
            title: "w#1",
            date: "2023",
            location: "Istanbul"
        },
    

    ];
    
    const motionPageData = [
        {
            videoSrc: "resources/mp4/motion_1.webm",
            altText: "animation1",
            title: "a#1",
            date: "2023",
            media: "digital",
            audio: "",
            credit: "",
            hasCustomStyle: true,
        },
        {
            videoSrc: "resources/mp4/motion_2.webm",
            altText: "animation1",
            title: "a#1",
            date: "2023",
            media: "digital",
            audio: "",
            credit: "",
            hasCustomStyle: true,
        },
        {
            videoSrc: "resources/mp4/motion_4.webm",
            altText: "animation1",
            title: "a#1",
            date: "2023",
            media: "digital",
            audio: "",
            credit: ""
        },
        {
            videoSrc: "resources/mp4/motion_5.webm",
            altText: "animation1",
            title: "Picnic",
            date: "2023",
            media: "digital",
            audio: "",
            credit: ""
        },
        {
            videoSrc: "resources/mp4/motion_6.webm",
            altText: "animation1",
            title: "Running from the police",
            date: "2024",
            media: "digital",
            audio: "",
            credit: ""
        },

    ];
    
    function generatePageContent(pageData, pageType) {
        const container = document.querySelector(`.${pageType}_container`);
        

        container.innerHTML = '';
    

        pageData.forEach(item => {
            const contentBox = document.createElement('div');
            contentBox.classList.add('content_box');

    

            const emptyDiv = document.createElement('div');
            emptyDiv.classList.add('empty');
            contentBox.appendChild(emptyDiv);
    

            if (pageType === 'motion') {
                const videoDiv = document.createElement('div');
                videoDiv.classList.add('content_img');
                const video = document.createElement('video');
                video.src = item.videoSrc; 
                video.controls = false; 
                video.autoplay = true;
                video.loop = true;

                if (item.hasCustomStyle) {
                    video.classList.add('custom-styled-media'); 
                }

                videoDiv.appendChild(video);
                contentBox.appendChild(videoDiv);
            } else {
                const imgDiv = document.createElement('div');
                imgDiv.classList.add('content_img');
                const img = document.createElement('img');
                img.src = item.imageSrc;
                img.alt = item.altText;
                imgDiv.appendChild(img);
                contentBox.appendChild(imgDiv);
    
            }
            




           
    
            // Description div
            const descriptionDiv = document.createElement('div');
            descriptionDiv.classList.add('description');
    

            if (pageType === 'canvas') {
                descriptionDiv.innerHTML = `
                    <h2>${item.title}</h2>
                    <p>${item.year}</p>
                    <p>${item.dimensions}</p>
                    <p>${item.medium}</p>
                `;
            } else if (pageType === 'wall') {
                descriptionDiv.innerHTML = `
                    <h2>${item.title}</h2>
                    <p class="date">${item.date}</p>
                    <p>${item.location}</p>
                `;
            } else if (pageType === 'motion') {
                descriptionDiv.innerHTML = `
                    <h2>${item.title}</h2>
                    <p class="date">${item.date}</p>
                    <p class="media">${item.media}</p>
                    <p class="audio">${item.audio}</p>
                    <p class="credit">${item.credit}</p>
                `;
            }
    
            contentBox.appendChild(descriptionDiv);
    
            // Closing div (if needed)
            const closingDiv = document.createElement('div');
            contentBox.appendChild(closingDiv);
    
            // Add to container
            container.appendChild(contentBox);
        });
    }
    

    document.addEventListener("DOMContentLoaded", () => {
        if (document.querySelector('.canvas_container')) {
            generatePageContent(canvasPageData, 'canvas');
        } else if (document.querySelector('.wall_container')) {
            generatePageContent(wallPageData, 'wall');
        } else if (document.querySelector('.motion_container')) {
            generatePageContent(motionPageData, 'motion');
        }











    });

