//selectors
const burger = document.querySelector('.burger');
const nav = document.querySelector('.navlinks');
const navLinks = document.querySelectorAll('.navlinks li');



//event listeners

//toggle the nav burger
burger.addEventListener('click', () =>{
    nav.classList.toggle('nav-active');

    //animate the links
    navLinks.forEach((links, index) =>{
            if(List.style.animation){
                list.style.animation = ""
            }else{
                list.style.animation = `navlinksfade 0.9s ease forwards ${index / 7+ 1}s`
            }
    });
});