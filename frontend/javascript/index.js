
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


const cartButton = document.getElementById("cart");

cartButton.addEventListener("click", () => {
    if (checkLoggedIn()) {
        // User is logged in, redirect to the cart
        redirectToCart();
    } else {
        // User is not logged in, show a message or redirect to the login page
        alert("Please log in first.");
        // Alternatively, you can redirect to the login page:
        // window.location.href = "/login"; // Replace "/login" with your actual login page URL
    }
});

function checkLoggedIn() {
    // Assuming you have a way to check if the user is logged in.
    // You can use your authentication logic here.
    const userID = localStorage.getItem("userID");
    return userID !== null; // Assuming userID is set upon login
}




// let cart=document.getElementById("cart")
// cart.addEventListener("click", () => {
   
//     window.location.href = "./cart.html";
// });
let boxcontainers = document.getElementsByClassName("boxcontainer");
for (let i = 0; i < boxcontainers.length; i++) {
    boxcontainers[i].addEventListener("click", () => {
        window.location.href = "./product.html";
    });
}


let bestones = document.getElementsByClassName("bestone");
for (let i = 0; i < bestones.length; i++) {
    bestones[i].addEventListener("click", () => {
        window.location.href = "./product.html";
    });
}


let images = document.getElementsByClassName("image");
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", () => {
        window.location.href = "./product.html";
    });
}




