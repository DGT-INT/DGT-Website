// Type Animation
/*
var typed = new Typed(".typing",{
    strings:["", "web Designer", "Web Developer", "Graphic Designer", "Data Scientist"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})
    */
document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".typing",{
        strings:["Data Scientist", "Data Analyst", "Machine Learning Engineer", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 1200,   // Pause before erasing
        startDelay: 300,  // Pause before typing starts
        loop: true
    });
});

/*================ MIXITUP FILTER PORTFOLIO ================*/
let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

/*=========== Link active Work ===========*/
const linkWork = document.querySelectorAll('.work_item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach(l=> l.addEventListener('click', activeWork));

/*======= Work Popup =======*/
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work_button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio_popup").classList.toggle("open");
}

document.querySelector(".portfolio_popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".work_img").src;
    document.querySelector(".portfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
    document.querySelector(".portfolio_popup-body").innerHTML = portfolioItem.querySelector(".portfolio_item-details").innerHTML;
}

/*========== INPUT ANIMATIONS ===========*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
   let parent = this.parentNode;
   if(this.value == "") {
    parent.classList.remove("focus");
   } 
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

/*============ SCROLL SECTIONS ACTIVE LINK ===============*/    /* I NEED TO COME BACK TO THIS SCROLL BAR ISSUE */
// get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");

// add an event Listener Listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter()
{
// get current scroll position
let scrollY = window.pageYOffset;
// Now we loop through sections to get height, top and ID values for each
sections.forEach(current => {
const sectionHeight = current.offsetHeight;
const sectionTop = current.offsetTop - 50,
sectionId = current.getAttribute("id");
/* - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation Link, else remove it
- To know which Link needs an active class, we use sectionid variable we are getting while Looping through sections as an selector */
if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
{
document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add("active-Link");
}
else
{
document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove("active-Link");
}
})
}




