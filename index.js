let switcher = document.querySelector(".dark");
let body = document.querySelector("body");
let light=true;


switcher.addEventListener('click' , function(){
    body.classList.toggle("light");
    




    if(light == true){
        switcher.innerHTML="Light mode"
        light=false;
        console.log(light);
    }
    else{
        switcher.innerHTML="Dark mode" 
        light=true;
        console.log(light);
    }
    
})

