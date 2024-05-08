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
            
            openMenuContainer.style.display = "flex"
        } else {
            openMenuContainer.style.display = "none"
            
            
        }
    });



    let profileBtn = document.getElementById('profileBtn');
    let profile = document.querySelector('.profile');
    let profileMobile = document.getElementById('profileMobile')
    profileBtn.addEventListener('click',()=>{

        if(profile.style.display == "" || profile.style.display == "none"){ 
            profile.style.display = "flex"
        }else{ 
            profile.style.display = "none"
        }
    })


let url = localStorage.getItem('image');
let img = new Image();
img.src = url;
profileBtn.src = img.src;
profileBtnMobile.src = img.src; 
console.log(profileBtn.src);
