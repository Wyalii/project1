let openMenu = document.getElementById('open');
let closeMenu = document.getElementById('close');
let mobile = document.getElementById('mobile');
let openBox = document.querySelector('.open-box');

let userDataJSON = localStorage.getItem("userData");
    let userData = JSON.parse(userDataJSON);
    let userInfo1 = document.getElementById('userInfo').innerHTML = `${userData.firstname + " " + userData.lastname}`;
    let userInfo = document.getElementById('userinfo').innerHTML = `${userData.firstname + " " + userData.lastname}`;
    let userInfoMobile = document.getElementById('userInfoMobile').innerHTML = `${userData.firstname + " " + userData.lastname}`;
    console.log(userInfo1)

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
        openMenu.style.display = "flex";
    } else {
        openMenu.style.display = "none";
        
    }
});