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
