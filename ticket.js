let openMenu = document.getElementById('open');
let closeMenu = document.getElementById('close');
let mobile = document.getElementById('mobile');
let openBox = document.querySelector('.open-box');
let profileBtn = document.getElementById('profileBtn');
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

      let userDataJSON = localStorage.getItem("userData");

    
        let userData = JSON.parse(userDataJSON);
        let userInfo = document.getElementById('userinfo').innerHTML = `${userData.firstname + " " + userData.lastname}`;
        let userInfoMobile = document.getElementById('userInfoMobile').innerHTML = `${userData.firstname + " " + userData.lastname}`;
    console.log(userData.lastname)
  
  
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
          openMenu.style.display = "flex";
      } else {
          openMenu.style.display = "none";
          
      }
  });
  let profileBtn3 = document.getElementById('profileBtn3');
let profileBtn2 = document.getElementById('profileBtn2');
  let url = localStorage.getItem('image');
let img = new Image();
img.src = url;
profileBtn.src = img.src;
profileBtn2.src = img.src;
profileBtn3.src = img.src;
console.log(profileBtn.src);



    let profile = document.querySelector('.profile');
    let profileMobile = document.getElementById('profileMobile')
    profileBtn.addEventListener('click',()=>{

        if(profile.style.display == "" || profile.style.display == "none"){ 
            profile.style.display = "flex"
        }else{ 
            profile.style.display = "none"
        }
    })

