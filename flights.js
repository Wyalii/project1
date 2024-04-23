let closeMenu = document.getElementById('closeMenu');
let openMenu = document.getElementById('openMenuBox');
let mobile = document.getElementById('mobile');

function openMobileMenu() {
    mobile.style.display = "flex";
    openMenu.style.display = "none";
    closeMenu.style.display = "block" 
    
}

function closeMobileMenu() {
    mobile.style.display = "none";
    openMenu.style.display = "flex";
    
}


openMenu.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        openMenu.style.display = "flex";
    } else {
        openMenu.style.display = "none";
        
    }
});