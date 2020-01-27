
    
    var serviceToggle = document.getElementsByClassName("toggle")
    var ule = document.querySelectorAll(".toggle > ul")
    var open = false;


    for (let i = 0; i < serviceToggle.length; i++) {

      serviceToggle[i].addEventListener("click", ()=>{
        //   console.log(ule);
        //   console.log(serviceToggle);
        if(!open){
            ule[i].style.height = "auto"
            open = true
        }else{
            ule[i].style.height = "0"
            open = false
        }
          
      })  
    }
    
