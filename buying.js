let userDataJSON = localStorage.getItem("userData");
let userData = JSON.parse(userDataJSON);
let userInfo = document.getElementById('userinfo').innerHTML = `${userData.firstname + " " + userData.lastname}`;
let userInfoMobile = document.getElementById('userInfoMobile').innerHTML = `${userData.firstname + " " + userData.lastname}`;
let checkbox1 = document.getElementById('checkbox1');  
let checkbox2 = document.getElementById('checkbox2');  
let openMenu = document.getElementById('open');
let closeMenu = document.getElementById('close');
let mobile = document.getElementById('mobile');
let openBox = document.querySelector('.open-box')
let boxHeader = document.querySelector('.box5-header');
let boxBody= document.querySelector('.box5-body');

checkbox1.addEventListener('click', ()=>{ 
if(!boxBody.classList.contains('background')){ 
if(!boxHeader.classList.contains('background')){ 
    boxHeader.classList.add("background")
    checkbox1.src = "images6/icon (1).svg";
}else{ 
    boxHeader.classList.remove("background")
    checkbox1.src = "images6/icon.svg";
    checkbox1.style.width = ""
}
    
}


})

checkbox2.addEventListener('click', ()=>{ 
if(!boxHeader.classList.contains("background")){ 
    if(!boxBody.classList.contains('background')){ 
        boxBody.classList.add("background")
        checkbox2.src = "images6/icon (1).svg";
    }else{ 
        boxBody.classList.remove("background")
        checkbox2.src = "images6/icon.svg";
        checkbox2.style.width = ""
    }
}
    
    })
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