let firstIndex = 0;
function automaticSlider(){ 
    setTimeout(automaticSlider, 2000)
    let pics;
    let img = document.querySelectorAll('#img1');
    for(pics = 0; pics < img.length; pics++){ 
        img[pics].style.display = "none";
    }
    firstIndex++;
    if(firstIndex > img.length){ 
        firstIndex = 1;
    }
    img[firstIndex - 1].style.display = "block"
}

automaticSlider()

document.getElementById('checkbox').addEventListener('click', () => { 
    let checkbox = document.getElementById('checkbox');
    let password = document.getElementById('password');
    if (checkbox.checked == true) { 
        password.setAttribute('type', "text");
    } else {
        password.setAttribute('type', "password");
    }
});


document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    let firstname = document.getElementById("firstName").value;
    let lastname = document.getElementById("lastName").value;
    let phoneNumber  = document.getElementById('phoneNumber').value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
  
    
    let userData = {
      lastname:lastname,
      email: email,
      password: password,
      firstname: firstname,
      phoneNumber:phoneNumber
    };
  
    
    let userDataJSON = JSON.stringify(userData);
    localStorage.setItem("userData", userDataJSON);
    location.href = "account.html"
    
    

  });

  let image = document.getElementById('get-image');
  image.addEventListener('change', () => {
      let fileReader = new FileReader();
      fileReader.readAsDataURL(image.files[0]);
  
      fileReader.addEventListener('load', () => {
          let url = fileReader.result;
          localStorage.setItem('image',url)
      });
  });
  
  