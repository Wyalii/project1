let minSlider = document.getElementById('min');
let maxSlider = document.getElementById('max');
let outputMin = document.getElementById('min-value');
let openMenu = document.getElementById('open');
let closeMenu = document.getElementById('close');
let mobile = document.getElementById('mobile');
let openBox = document.querySelector('.open-box')

openMenu.addEventListener('click', ()=>{ 
mobile.style.display = "flex";
openBox.style.display = "none"
})
closeMenu.addEventListener('click',() =>{ 
  mobile.style.display = "none";
  openBox.style.display = "flex"
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
    filterByPrice.addEventListener('click', ()=>{ 
      console.log(outputMin.innerHTML);
      let arrayOfTickets = [
        ticket1,
        ticket2,
        ticket3,
        ticket4
      ]
      console.log(arrayOfTickets[1].getAttribute('value'));
      // if(arrayOfTickets[1].getAttribute('value') >= outputMin.innerHTML){ 
      //   arrayOfTickets[1].style.display = 'flex';
      // }else{ 
      //   arrayOfTickets[1].style.display = 'none';
      // }
      for(let i = 0 ; i < arrayOfTickets.length; i++){ 
        let values = arrayOfTickets[i].getAttribute('value');
        if(values >= outputMin.innerHTML){ 
          arrayOfTickets[i].style.display = "flex"
        }else{ 
          arrayOfTickets[i].style.display = "none"
        } 
       console.log(outputMin.innerHTML)
      }
      
      
    })

   console.log( document.querySelector('.body1').getAttribute('value'))
   
    