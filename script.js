let closeMenu = document.getElementById('closeMenu');
let openMenu = document.getElementById('openMenu');
let mobile = document.getElementById('mobile');

function openMobileMenu() {
    mobile.style.display = "flex";
    openMenu.style.display = "none"; 
    
}

function closeMobileMenu() {
    mobile.style.display = "none";
    openMenu.style.display = "block";
    document.querySelector('.part1-body').style.display = "block" 
    document.querySelector('.part1-footer').style.display = "flex"
}


openMenu.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        openMenu.style.display = "block";
    } else {
        openMenu.style.display = "none";
    }
});


    
