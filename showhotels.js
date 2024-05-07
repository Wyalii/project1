let minSlider = document.getElementById('min');
let maxSlider = document.getElementById('max');
let outputMin = document.getElementById('min-value');
let openMenu = document.getElementById('open');
let closeMenu = document.getElementById('close');
let mobile = document.getElementById('mobile');
let openBox = document.querySelector('.open-box')

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

minSlider.oninput = function(){ 
  outputMin.innerHTML = `${this.value}$`;
}
outputMin.innerHTML = `${minSlider.value}$`




const startSlider = document.getElementById("startSlider");
const endSlider = document.getElementById("endSlider");
const timeRange = document.getElementById("timeRange");

function updateTimeRange() {
  const startTime = startSlider.value;
  const endTime = endSlider.value;
  timeRange.textContent = `${startTime}:00 - ${endTime}:00`;
}

startSlider.addEventListener("input", function() {
  if (parseInt(this.value) >= parseInt(endSlider.value)) {
    this.value = parseInt(endSlider.value) - 1;
  }
  updateTimeRange();
});

endSlider.addEventListener("input", function() {
  if (parseInt(this.value) <= parseInt(startSlider.value)) {
    this.value = parseInt(startSlider.value) + 1;
  }
  updateTimeRange();
});

updateTimeRange();


let ratings = document.getElementById('rates'); 
let airlanes = document.getElementById('planes');
let trips = document.getElementById('trip');

let ratingButton = document.getElementById('rateButton');
let airlaneButton = document.getElementById('airlineButton');
let tripsButton = document.getElementById('tripButton');

ratingButton.addEventListener('click', ()=>{ 
if(ratings.style.display !=="flex"){ 
  ratings.style.display = "flex"
}else{ 
  ratings.style.display = "none"
}
})

airlaneButton.addEventListener('click', ()=>{ 
  if(airlanes.style.display !=="flex"){ 
    airlanes.style.display = "flex"
  }else{ 
    airlanes.style.display = "none"
  }
  }) 

  tripsButton.addEventListener('click', ()=>{ 
    if(trips.style.display !=="flex"){ 
      trips.style.display = "flex"
    }else{ 
      trips.style.display = "none"
    }
    })
let ticket1 = document.getElementById('ticket1');
let ticket2 = document.getElementById('ticket2');
let ticket3 = document.getElementById('ticket3');
let ticket4 = document.getElementById('ticket4');
let filterByPrice = document.getElementById('filterByPrice');
filterByPrice.addEventListener('click', () => {
  let arrayOfTickets = [ticket1, ticket2, ticket3, ticket4];
  let minPrice = parseFloat(outputMin.innerHTML);

  arrayOfTickets.forEach(ticket => {
    let value = parseFloat(ticket.getAttribute('value'));
    if (value >= minPrice) {
      ticket.style.display = 'flex';
    } else {
      ticket.style.display = 'none';
    }
  });
});

  
   let userDataJSON = localStorage.getItem("userData");

    
        let userData = JSON.parse(userDataJSON);
        let userInfo = document.getElementById('userinfo').innerHTML = `${userData.firstname + " " + userData.lastname}`;
        let userInfoMobile = document.getElementById('userInfoMobile').innerHTML = `${userData.firstname + " " + userData.lastname}`;
    console.log(userData.lastname)
   
    window.addEventListener('resize', () => {
      if (window.innerWidth = 768) {
          openMenu.style.display = "block";
      } else {
          openMenu.style.display = "none";
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


 