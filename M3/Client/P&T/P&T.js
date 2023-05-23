const pay = () => {

let type = document.getElementById('bills').value

console.log(type)
    if (!type) {
        return
    }
    else if (type === 'Electricity') {
        document.getElementById('electricity').innerText = "Bill Amount: $0"
    } else if (type === 'Water') {
        document.getElementById('water').innerText = 'Bill Amount: $0'
    }else if (type === 'Gas') {
        document.getElementById('gas').innerText = 'Bill Amount: $0'
    }else if (type === 'All') {
        document.getElementById('water').innerText = 'Bill Amount: $0'
        document.getElementById('gas').innerText = 'Bill Amount: $0'
        document.getElementById('electricity').innerText = 'Bill Amount: $0'
    }
}

const activateinternal = () => {

    document.getElementById("internalapplication").style.display = "block";
    let blur = document.getElementById("blur");
    blur.classList.toggle("active");
}

const deactivateinternal = () => {

    document.getElementById("internalapplication").style.display = "none";
    let blur = document.getElementById("blur");
    blur.classList.toggle("active");
}

const activatedomestic = () => {

    document.getElementById("domesticapplication").style.display = "block";
    let blur = document.getElementById("blur");
    blur.classList.toggle("active");
}

const deactivatedomestic = () => {

    document.getElementById("domesticapplication").style.display = "none";
    let blur = document.getElementById("blur");
    blur.classList.toggle("active");
}


const activateinternational = () => {

    document.getElementById("internationalapplication").style.display = "block";
    let blur = document.getElementById("blur");
    blur.classList.toggle("active");
}

const deactivateinternational = () => {

    document.getElementById("internationalapplication").style.display = "none";
    let blur = document.getElementById("blur");
    blur.classList.toggle("active");
}


var submit = (type) =>{

   
    if (type === 'internalapplication') {
        
        document.getElementById("internalapplication").style.display = "none";
        let blur = document.getElementById("blur");
        blur.classList.toggle("active");
        
        alert("Transfer Proccessed!")

    } else if(type === 'domesticapplication'){
       
        document.getElementById("domesticapplication").style.display = "none";
        let blur = document.getElementById("blur");
        blur.classList.toggle("active");
            alert("Transfer Proccessed!")

    }else if(type === 'internationalapplication'){
       
      document.getElementById("internationalapplication").style.display = "none";
    let blur = document.getElementById("blur");
    blur.classList.toggle("active");
alert("Transfer Proccessed!")

}}