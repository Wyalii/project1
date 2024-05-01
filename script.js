let closeMenu = document.getElementById('closeMenu');
let openMenu = document.getElementById('openMenu');
let mobile = document.getElementById('mobile');

// function openMobileMenu() {
//     mobile.style.display = "flex";
//     openMenu.style.display = "none"; 
    
// }

// function closeMobileMenu() {
//     mobile.style.display = "none";
//     openMenu.style.display = "block";
//     document.querySelector('.part1-body').style.display = "block" 
//     document.querySelector('.part1-footer').style.display = "flex"
// }





openMenu.addEventListener('click', ()=>{ 
mobile.style.animationName = "show"

setTimeout(()=>{ 
    mobile.style.display = "flex";
openBox.style.display = "none"
}, 150)


})
closeMenu.addEventListener('click',() =>{ 
    mobile.style.animationName = "hide"
    setTimeout(()=>{ 
        mobile.style.display = "none";
        openBox.style.display = "flex"
        
    }, 300)

   
   
})

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        openMenu.style.display = "block";
    } else {
        openMenu.style.display = "none";
    }
});


    
