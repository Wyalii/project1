let minSlider = document.getElementById('min');
let maxSlider = document.getElementById('max');
let outputMin = document.getElementById('min-value');
let outputMax = document.getElementById('max-value');
outputMin.innerHTML = `${minSlider.value}$`
outputMax.innerHTML = `${maxSlider.value}$`
minSlider.oninput = function(){ 
    outputMin.innerHTML = `${this.value}$`;
}

maxSlider.oninput = function(){ 
    outputMax.innerHTML = `${this.value}$`;
}

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
