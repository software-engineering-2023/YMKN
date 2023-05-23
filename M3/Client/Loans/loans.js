var activateapplication = () => {

    document.getElementById("loanapplication").style.display = "block";
    let blur = document.getElementById("blur");
    blur.classList.toggle("active");
}

var deactivateapplication = () => {

    document.getElementById("loanapplication").style.display = "none";
    let blur = document.getElementById("blur");
    blur.classList.toggle("active");
}


var activatepayment = () => {

    document.getElementById("loanpaymentapp").style.display = "block";
    let blur = document.getElementById("blur");
    blur.classList.toggle("active");
}

var deactivatepayment = () => {

    document.getElementById("loanpaymentapp").style.display = "none";
    let blur = document.getElementById("blur");
    blur.classList.toggle("active");
    

}


var submit = (type) =>{

   
    if (type === 'loanpaymentapp') {
        
        document.getElementById("loanpaymentapp").style.display = "none";
        let blur = document.getElementById("blur");
        blur.classList.toggle("active");
        
            alert("Action Proccessed!")
            
    } else if(type === 'loanapplication'){
       
        document.getElementById("loanapplication").style.display = "none";
        let blur = document.getElementById("blur");
        blur.classList.toggle("active");
            alert("Action Proccessed!")
    }}