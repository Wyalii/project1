let closeMenu = document.getElementById('closeMenu');
let openMenu = document.getElementById('openMenuBox');
let mobile = document.getElementById('mobile');
openMenu.addEventListener('click',()=>{ 
    mobile.style.animationName = "show"
    setTimeout(()=>{ 
        mobile.style.display = "flex";
        openMenu.style.display = "none";
        closeMenu.style.display = "block" 
        
    }, 150)
})

closeMenu.addEventListener('click',() =>{ 
    mobile.style.animationName = "hide"
    setTimeout(()=>{ 
        mobile.style.display = "none";
        openMenu.style.display = "flex";
        
    }, 300)

   
   
})

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        openMenu.style.display = "flex";
    } else {
        openMenu.style.display = "none";
        
    }
});


let url = localStorage.getItem('image');
let img = new Image();
img.src = url;
profileBtn.src = img.src;
console.log(profileBtn.src);
