






const activateapp = () => {

    document.getElementById("appform").style.display = "block";
    let blur = document.getElementById("blur");
    blur.classList.toggle("active");
}

 var deactivateapp = () => {

    document.getElementById("appform").style.display = "none";
    let blur = document.getElementById("blur");
    blur.classList.toggle("active");
}

 var activatereport = () => {

    document.getElementById("reportapp").style.display = "block";
    let blur = document.getElementById("blur");
    blur.classList.toggle("active");
}

 var deactivatereport = () => {

    document.getElementById("reportapp").style.display = "none";
    let blur = document.getElementById("blur");
    blur.classList.toggle("active");
}
var activatepay = () => {

    document.getElementById("parpay").style.display = "block";
    let blur = document.getElementById("blur");
    blur.classList.toggle("active");
}

 var deactivatepay = () => {

    document.getElementById("parpay").style.display = "none";
    let blur = document.getElementById("blur");
    blur.classList.toggle("active");
}
 var submit = (type) =>{

   
if (type === 'reportapp') {
    
        document.getElementById("reportapp").style.display = "none";
        let blur = document.getElementById("blur");
        blur.classList.toggle("active");
        alert("Action Proccessed!")
        
} else if(type === 'appform'){
   
        document.getElementById("appform").style.display = "none";
        let blur = document.getElementById("blur");
        blur.classList.toggle("active");
        alert("Action Proccessed!")
}else if(type === 'parpay'){
   
    document.getElementById("parpay").style.display = "none";
    let blur = document.getElementById("blur");
    blur.classList.toggle("active");
    alert("payment will be processed shortly")

}

}



const fullpay = () => document.getElementById('cash').innerText = "0"

 