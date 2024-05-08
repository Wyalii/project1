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
let continueBtn = document.querySelector('.continue');
let box6 = document.querySelector('.box6');
let box9 = document.querySelector('.box9');
let checkbox3 = document.getElementById('checkbox3');
let box9Header = document.querySelector('.box9-header');
let sweetalert = document.getElementById('sweetalert')



    console.log(userData.lastname)


checkbox3.addEventListener('click',()=>{ 
if(!box9Header.classList.contains('background')){
    box9Header.classList.add('background');
    checkbox3.src = 'images6/icon (1).svg'
}else{ 
    box9Header.classList.remove('background');
    checkbox3.src = 'images6/icon.svg'
}
})

continueBtn.addEventListener('click',()=>{ 
    box6.style.display = "none";
    box9.style.display = "flex"

})
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





sweetalert.addEventListener('click',()=>{ 
    
    Swal.fire({
        html:`
        <div class="card">
            <fieldset class="fieldset1">
                <legend>Card Number</legend>
                4321 4321 4321
            </fieldset>

            <div class="fieldset-box1">
                <fieldset class="fieldset2">
                    <legend>Exp Date</legend>
                    02/27
                </fieldset>

                <fieldset class="fieldset2">
                    <legend>CVC</legend>
                    123
                </fieldset>
            </div>

            <fieldset class="fieldset1">
                <legend>Name on card</legend>
                ${userData.firstname + " " + userData.lastname}
            </fieldset>

            <fieldset class="fieldset1">
                <legend>Country or region</legend>
                Country
            </fieldset>
            <div class="card-div">
                Securely save my information for 1-click checkout
            </div>

            
            
        </div>
        
        
        `
        
        
      }).then(function() {
        window.location = "ticketInfo.html";
    });
      
     
})


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

    let profileBtn3 = document.getElementById('profileBtn3');
let profileBtn2 = document.getElementById('profileBtn2');
    let url = localStorage.getItem('image');
let img = new Image();
img.src = url;
profileBtn.src = img.src;
profileBtn2.src = img.src;
profileBtn3.src = img.src;
console.log(profileBtn.src);

