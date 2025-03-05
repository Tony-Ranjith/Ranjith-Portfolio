document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio Website Loaded!");
});

// Slider Script
let index = 0;
let interval;

function moveSlide(direction) {
    const slider = document.querySelector(".slider");
    const totalCards = document.querySelectorAll(".certification-card").length;
    const cardWidth = document.querySelector(".certification-card").offsetWidth + 20; // Card width + gap
    const visibleCards = Math.floor(document.querySelector(".slider-container").offsetWidth / cardWidth);

    const maxIndex = totalCards - visibleCards;
    
    index += direction;

    if (index < 0) {
        index = maxIndex;
    } else if (index > maxIndex) {
        index = 0;
    }

    slider.style.transform = `translateX(-${index * cardWidth}px)`;
}

// Function to auto-slide
function autoSlide() {
    interval = setInterval(() => {
        moveSlide(1);
    }, 3000); // Adjust time (3000ms = 3 seconds)
}

// Pause auto-slide on hover
document.querySelector(".slider-container").addEventListener("mouseenter", () => {
    clearInterval(interval);
});

// Resume auto-slide on mouse leave
document.querySelector(".slider-container").addEventListener("mouseleave", autoSlide);

// Start auto-slide on page load
autoSlide();


// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for reaching out, " + name + "! I'll get back to you soon.");
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill in all fields.");
    }
});

