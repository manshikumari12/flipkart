
    const slider = document.querySelector('.slider');
let counter = 1;

function slide() {
    slider.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    slider.style.transform = `translateX(${-counter * 100}%)`;
}

// Automatic slide every 3 seconds
setInterval(slide, 4000);

// Reset to the first image for infinite loop
slider.addEventListener('transitionend', () => {
    if (counter >= slider.children.length - 1) {
        counter = 1;
        slider.style.transition = 'none';
        slider.style.transform = 'translateX(' + (-counter * 100) + '%)';
    }
});


function nextSlide() {
    counter++;
    slide();
}

function prevSlide() {
    counter--;
    slide();
}



let signupButton = document.getElementById("Signup");
let loginButton = document.getElementById("login");

signupButton.addEventListener("click", () => {
   
    window.location.href = "./signup.html";
});

loginButton.addEventListener("click", () => {
   
    window.location.href = "./login.html";
});


