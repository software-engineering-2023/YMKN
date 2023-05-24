 var redeem = () => {

document.getElementById("points").innerText = "0 pts"
document.getElementById("cash").innerText = "7,730"

} 

 var activateopen = () => {

    document.getElementById("openaccount").style.display = "block";
    let blur = document.getElementById("blur");
    blur.classList.toggle("active");
}

 var deactivateopen = () => {

    document.getElementById("openaccount").style.display = "none";
    let blur = document.getElementById("blur");
    blur.classList.toggle("active");
}

var activateclose = () => {

    document.getElementById("closeaccount").style.display = "block";
    let blur = document.getElementById("blur");
    blur.classList.toggle("active");
}

 var deactivateclose = () => {

    document.getElementById("closeaccount").style.display = "none";
    let blur = document.getElementById("blur");
    blur.classList.toggle("active");
}

 var submit = (type) =>{

   
if (type === 'closeaccount') {
    
        document.getElementById("closeaccount").style.display = "none";
        let blur = document.getElementById("blur");
        blur.classList.toggle("active");
        alert("Action Proccessed!")
        
} else if(type === 'openaccount'){
   
        document.getElementById("openaccount").style.display = "none";
        let blur = document.getElementById("blur");
        blur.classList.toggle("active");
        alert("Action Proccessed!")
}

}



 const fullcard = () => {
    document.getElementById("cash").innerText = "10,000"
}

 const partialcard = (paidamount) => {
let curramount = document.getElementById("cash").innerText

    document.getElementById("cash").innerText = Number(curramount) + Number(paidamount)
}


