$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
    loop:true,
    autoplay: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1,
        },
    },
});

// mobile nav
const openIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-times-circle");
const mobileBG = document.querySelector(".mobile-bg");
const mobileNav = document.querySelector(".mobile-nav");

openIcon.addEventListener('click' , () => {
    mobileBG.classList.toggle('display-none');
    mobileNav.classList.remove('slide-out');
    mobileNav.classList.toggle("slide-in");
    openIcon.classList.toggle("display-none");
});

closeIcon.addEventListener('click' , () => {
   setTimeout(( )=>{
        mobileBG.classList.toggle("display-none");
        openIcon.classList.toggle("display-none");
   }, 500)
   mobileNav.classList.toggle("slide-in");
   mobileNav.classList.toggle("slide-out");
});


// contact data
const contactForm = document.querySelector('.contact-form');
const fullName = document.querySelector('.full-name');
const emailAddress = document.querySelector('.email-address');
const subject = document.querySelector('.subject');
const message = document.querySelector('.message');
const submit = document.querySelector('.submit-form');
const modal = document.querySelector('.modal-wrap');
const close = document.querySelector('.modal-close');

submit.addEventListener('click', (e) =>{
    e.preventDefault();
    db.collection('contact-form').doc().set({
        fullName: fullName.value,
        email: emailAddress.value,
        subject: subject.value,
        message: message.value        
    }).then(() => {
        contactForm.reset();
        modal.classList.toggle("display-none");
    }); // create a new document in firebase
});

close.addEventListener("click", () =>{
    modal.classList.toggle("display-none");
})
