let userDataJSON = localStorage.getItem("userData");
let userData = JSON.parse(userDataJSON);
let userInfo = document.getElementById('userinfo').innerHTML = `${userData.firstname + " " + userData.lastname}`;
let userinfomobile = document.getElementById('userinfomobile').innerHTML = `${userData.firstname + " " + userData.lastname}`;
let logoUserInfo = document.getElementById('logoUserInfo').innerHTML = `${userData.firstname + " " + userData.lastname}`;
let logoEmail = document.getElementById('logoEmail').innerHTML = `${userData.email}`;
let openMenu = document.getElementById('openMenu');
let openMenuContainer = document.querySelector('.open-box-container');
let mobile = document.querySelector('.header-mobile');
let closeMenu = document.getElementById('closeMenu');
let profileBtnMobile = document.getElementById('profileBtnMobile');
let userName = document.querySelector('.userName').innerHTML = `${userData.firstname + " " + userData.lastname}`;

openMenu.addEventListener('click', ()=>{ 
    mobile.style.animationName = "show"
    
    setTimeout(()=>{ 
        mobile.style.display = "flex";
        openMenuContainer.style.display = "none"
    }, 150)
    
    
    })
    closeMenu.addEventListener('click',() =>{ 
        mobile.style.animationName = "hide"
        
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


let btn2 = document.querySelector('.btn2');
let profileBtn2 = document.getElementById('profileBtn2');
let url = localStorage.getItem('image');
let img = new Image();
img.src = url;
btn2.src = img.src
profileBtn.src = img.src;
profileBtnMobile.src = img.src; 
console.log(profileBtn.src);


let image = document.getElementById('get-image');
image.addEventListener('change', () => {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(image.files[0]);

    fileReader.addEventListener('load', () => {
        let url = fileReader.result;
        localStorage.setItem('image',url)
    });
    btn2.src = img.src;
    window.location.reload()
});

let url2 = localStorage.getItem('backgroundImg');
let bgImage = new Image();
bgImage.src = url2;
let background = document.querySelector('.background');
background.style.backgroundImage = `url(${url2})`;
let btn1 = document.querySelector('#get-background');
btn1.addEventListener('change', () => {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(btn1.files[0]);

    fileReader.addEventListener('load', () => {
        let url = fileReader.result;
        localStorage.setItem('backgroundImg',url)
    });
    
    window.location.reload()
});










