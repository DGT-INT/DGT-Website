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