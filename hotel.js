let userDataJSON = localStorage.getItem("userData");
let userData = JSON.parse(userDataJSON);
let userInfo = document.getElementById('userinfo').innerHTML = `${userData.firstname + " " + userData.lastname}`;
let userinfomobile = document.getElementById('userinfomobile').innerHTML = `${userData.firstname + " " + userData.lastname}`;
let profileUserInfo = document.querySelector('.profileUserInfo').innerHTML = `${userData.firstname + " " + userData.lastname}`;
console.log(userData.lastname);

let openMenu = document.getElementById('openMenu');
let openMenuContainer = document.querySelector('.open-box-container');
let mobile = document.querySelector('.header-mobile');
let closeMenu = document.getElementById('closeMenu');
let profileBtnMobile = document.getElementById('profileBtnMobile');

openMenu.addEventListener('click', ()=>{ 
    mobile.style.animationName = "show"
    
    setTimeout(()=>{ 
        mobile.style.display = "flex";
    openMenuContainer.style.display = "none"
    }, 150)
    
    
    })
    closeMenu.addEventListener('click',() =>{ 
        mobile.style.animationName = "hide"
        profile.style.display = "none"
        setTimeout(()=>{ 
            mobile.style.display = "none";
            openMenuContainer.style.display = "flex"
            
        }, 300)
    
       
       
    })

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            openMenu.style.display = "flex";
        } else {
            openMenu.style.display = "none";
            
        }
    });



    let profileBtn = document.getElementById('profileBtn');
    let profile = document.querySelector('.profile');
    profileBtn.addEventListener('click',()=>{

        if(profile.style.display == "" || profile.style.display == "none"){ 
            profile.style.display = "flex"
        }else{ 
            profile.style.display = "none"
        }
    })

    profileBtnMobile.addEventListener('click',()=>{
        if(profile.style.display == "" || profile.style.display == "none"){ 
            profile.style.display = "flex"
            profile.style.top = "100px"
            
        }else if(profile.style.display = "flex"){ 
            profile.style.display = "none"
        }
    })