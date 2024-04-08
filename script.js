const year = new Date().getFullYear();
document.getElementsByClassName("copyright")[0].innerHTML = `Copyright © ${year} `;

const contents = ['Student', 'Freelancer', 'Developer'];
const contentElement = document.getElementsByClassName('disc')[0]; // Get the first element with the class name 'disc'

let currentIndex = 0;

function changeContent() {
  // Fade out the content
  contentElement.style.opacity = 0;

  setTimeout(function() {
    // Update the content text
    contentElement.textContent = contents[currentIndex];

    // Fade in the new content
    contentElement.style.opacity = 1;

    // Increment the index for the next content change
    currentIndex = (currentIndex + 1) % contents.length;
  }, 100); // Wait for 500 milliseconds (0.5 seconds) for the fade-out effect to complete
}

// Initial call to update content immediately
changeContent();
setInterval(changeContent, 2000); // Change content every two seconds

const images = ['1.png', '2.png']; // Array of image sources
const imageElement = document.getElementsByClassName('profile-pic')[0]; // Get the first element with the class name 'profile-pic'

let currentIndexs = 0;

function changeImage() {
  // Fade out the image
  imageElement.style.opacity = 0;

  setTimeout(function() {
    // Update the image source
    imageElement.src = `assets/profile/${images[currentIndexs]}`;

    // Fade in the new image
    imageElement.style.opacity = 1;

    // Increment the index for the next image change
    currentIndexs = (currentIndexs + 1) % images.length;
  }, 500); // Wait for 500 milliseconds (0.5 seconds) for the fade-out effect to complete
}

// Initial call to change image immediately
changeImage();
setInterval(changeImage, 5000); // Change image every five seconds
