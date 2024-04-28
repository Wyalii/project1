let openMenu = document.getElementById('open');
let closeMenu = document.getElementById('close');
let mobile = document.getElementById('mobile');
let openBox = document.querySelector('.open-box');

openMenu.addEventListener('click', ()=>{ 
    mobile.style.display = "flex";
    openBox.style.display = "none"
    })


    closeMenu.addEventListener('click',() =>{ 
        mobile.style.display = "none";
        openBox.style.display = "flex"
      })