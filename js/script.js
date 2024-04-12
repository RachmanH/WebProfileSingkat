// Select the menu button and navbar elements
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');

// Add click event listener to the menu button
menuBtn.addEventListener('click', () => {
    // Toggle the 'open' class on the navbar to show/hide it
    navbar.classList.toggle('open');
});

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
});

sr.reveal('.logo',{delay:200, origin: 'left'});
sr.reveal('.navbar',{delay:400, origin: 'top'});
sr.reveal('.menu-btn',{delay:520, origin: 'right'});

sr.reveal('.home-text span',{delay:600, origin: 'top'});
sr.reveal('.home-text h1',{delay:680, origin: 'left'});
sr.reveal('.home-text p',{delay:750, origin: 'right'});
sr.reveal('.main-btn',{delay:860, origin: 'left'});

sr.reveal('.share',{delay:950, origin: 'bottom'});

sr.reveal('.home-img',{delay:1000, origin: 'right'});

sr.reveal('.share',{delay:1050, origin: 'left'});
sr.reveal('.social',{delay:1090, origin: 'left'});
