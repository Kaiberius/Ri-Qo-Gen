const burgerMenu = document.querySelector(".burger-menu");

burgerMenu.addEventListener("click", () => {
    const navMenu = document.querySelector(".nav");

    navMenu.classList.toggle("nav-active");
})

const genBtn = document.querySelector("#gen-btn");

function generateRandomQuote() {

    var quotes = [
      "I could stare at you forever and still feel like I haven't had enough.",
      "I get lost in your eyes every time I look at you.",
      "You are the only one who can make my heart beat faster and slower at the same time.",
      "Your smile is the reason I believe in love.",
      "I want to hold your hand and never let go.",
      "You are my sun, my moon, and all my stars.",
      "I never believed in love at first sight until I met you.",
      "You make every day feel like a fairytale.",
      "You are the missing piece that I've been searching for all my life.",
      "I am addicted to the way you make me feel.",
      "Every moment spent with you feels like a dream come true.",
      "You are my favorite thought, my favorite feeling, and my favorite person.",
      "I never knew how much I needed you until you came into my life.",
      "You are the embodiment of all my deepest desires and dreams.",
      "I could listen to your voice for hours and never get tired of it.",
      "You have the power to make my heart skip a beat with just a single glance."
    ];
  
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
    return randomQuote;
}

genBtn.addEventListener("click", function() {
    const GQ = document.querySelector(".gen-qoute");

    GQ.innerHTML = generateRandomQuote();
});

const signUpBtn = document.querySelector("#signup-btn");

signUpBtn.addEventListener("click", () => {
    window.location.href = "/sign-up.html";
})

const demoLink = document.querySelector("#test-demo");
const demoSection = document.querySelector("#demo");

demoLink.addEventListener("click", () => {
  window.scrollTo({
    top: demoSection.offsetTop,
    behavior: "smooth"
  });
});
