// Global variables
let currentImageIndex = 0;
const images = [
  "/Images/photo_1.jpg",
  "/Images/photo_2.jpg",
  "/Images/photo_3.jpg",
  "/Images/photo_4.jpg",
  "/Images/photo_5.jpg",
  "/Images/photo_6.jpg",
  "/Images/photo_7.jpg",
  "/Images/photo_8.jpg",
  "/Images/photo_9.jpg",
];

// Open full-screen overlay
function openFullScreen(index) {
  currentImageIndex = index;
  document.getElementById("fullscreen-image").src = images[currentImageIndex];
  document.getElementById("description").textContent = getDescription(currentImageIndex);
  document.getElementById("fullscreen-overlay").style.display = "block";
  document.body.style.overflow = "hidden";
  document.addEventListener("keydown", handleKeyDown);
}

// Close full-screen overlay
function closeFullScreen() {
  document.getElementById("fullscreen-overlay").style.display = "none";
  document.body.style.overflow = "auto";
  document.removeEventListener("keydown", handleKeyDown);
}

// Handle keyboard events
function handleKeyDown(event) {
  if (event.key === "ArrowLeft") {
    changeImage(-1); // Move to the previous image
  } else if (event.key === "ArrowRight") {
    changeImage(1); // Move to the next image
  }
}

// Change image in full-screen overlay
function changeImage(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
      currentImageIndex = 0; // Clamp index to the first image
    } else if (currentImageIndex >= images.length) {
      currentImageIndex = images.length - 1; // Clamp index to the last image
    }
    
    document.getElementById("fullscreen-image").src = images[currentImageIndex];
    document.getElementById("description").textContent = getDescription(currentImageIndex);
  }


// Get image description based on index
function getDescription(index) {
  // Add your image descriptions here
  const descriptions = [
    "Your cute smile in this photo just melts my heart and fills every corner of my day with Happiness.",
    "My princess... your this cute smile could light up the world, and that red kurti perfectly suits your stunning beauty!",
    "That's my queen... I can't explain how adorable you are looking in that photo! Seeing you with those two medals from that memorable sports day just makes my heart fill with pride and love for you.",
    "My ray of light.... your smile shines brighter than the sun as you gaze out that window, capturing the beauty of the world with your cute face.",
    "Even in moments of sadness of my princess, your gentle beauty spreads out, making the world a more tendable place. This picture says this to me",
    "Monday has never looked so beautiful, only for you it looks now, as you shine in your school dress and that playful filter, adding a touch of magic to your already cute face.",
    "My dancing angel... your cuteness in that dancing dress is simply breathtaking, capturing the joy and excitement of your  dance class in a picture-perfect moment.",
    "Archi, your cuteness in that  yellow saree spreads the joy of  Holi, filling my heart with joy and fulfillment. Holi had never been special to me, until you came...",
    "My cute princess... your natural beauty always shines through... also without any filter and makeup reminding me that your inner glow and genuine charm make every moment with you truly special.... ",
  ];
  return descriptions[index];
}

//navbar-responsiveness
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarButtons = document.querySelector('.navbar-buttons');

navbarToggle.addEventListener('click', function() {
  this.classList.toggle('active');
  navbarButtons.classList.toggle('active');
});

document.addEventListener('click', function(event) {
  const targetElement = event.target;
  if (!navbarToggle.contains(targetElement) && !navbarButtons.contains(targetElement)) {
    navbarToggle.classList.remove('active');
    navbarButtons.classList.remove('active');
  }
});


  