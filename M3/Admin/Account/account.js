const AcceptBR = () => {
  let client0 = document.getElementById('close').value

  if (!client0) {
    return
  }     
    else if (client0 == '255212455, Ramy') {
      document.getElementById('AAr').innerText = 'Client "ramy" with ID "255212455" close account request is accepted' 
    }
    else if(client0 == "225563258, Ali"){
      document.getElementById('AAr').innerText = 'Client "Ali" with ID "225563258" close account request is accepted' 
    }
}

const RejectBR = () => {
  let client1 = document.getElementById('close').value

  if (!client1) {
    return
  }     
    else if (client1 == '122252522, hamada') {
      document.getElementById('RAr').innerText = 'Client "hamada" with ID "122252522" close account request is Rejected' 
    }
    else if(client1 == "115852522, Mariam"){
      document.getElementById('RAr').innerText = 'Client "Mariam" with ID "115852522" close account request is Rejected' 
    }

 
}

const AcceptBL = () => {
  let client2 = document.getElementById('open').value

  if (!client2) {
    return
  }     
    else if (client2 == '125882522, Clara') {
      document.getElementById('AAl').innerText = 'Client "Clara" with ID "125882522" open account request is accepted' 
    }
    else if(client2 == "611213258, Nour"){
      document.getElementById('AAl').innerText = 'Client "Nour" with ID "611213258" open account request is accepted' 
    }
  }

  const RejectBL = () => {
    let client3 = document.getElementById('open').value
  if (!client3) {
    return
  }     
    else if (client3 == '252132455, Nada') {
      document.getElementById('RAl').innerText = 'Client "Nada" with ID "252132455" open account request is Rejected' 
    }
    else if(client3 == "116569525, Youssef"){
      document.getElementById('RAl').innerText = 'Client "Youssef" with ID "116569525" open account request is Rejected' 
    }
    else if(client3 == "111155852, Mustafa"){
      document.getElementById('RAl').innerText = 'Client "Mustafa" with ID "111155852" open account request is Rejected' 
    }
  }  
           
  const ViewRight = () =>{
    let client4 = document.getElementById('open').value

    if (!client4) {
      return
    }     
    else if (client4 == '225563258, Ali') {

    }
    else if  (client4 = '122252522, hamada'){

    }
  }

  const ViewLeft = () =>{
    let client5 = document.getElementById('open').value

    if (!client5) {
      return
    }     
    else if (client5 == '125882522, Clara') {
      document.getElementById("openaccount").style.display = "block";
      let blur = document.getElementById("blur");
      blur.classList.toggle("active");

    }
    else if  (client5 = '252132455, Nada'){

    }

  }
    
        
      
            
        
      
      
        
        
         
    
      