var showlogon = () => {
  document.getElementById("logon").style.display = "block";
  let blur = document.getElementById("blur");
  blur.classList.toggle("active");
};

var hidelogon = () => {
  document.getElementById("logon").style.display = "none";
  let blur = document.getElementById("blur");
  blur.classList.toggle("active");
  document.getElementById("loginerror").innerText = " ";
};

var login = () => {
  let username = document.getElementById("username").value;

  let password = document.getElementById("password").value;

  if (username === "client" && password === "client") {
    window.location.href = "";
  } else if (username === "banker" && password === "banker") {
    window.location.href = "";
  } else if (username === "admin" && password === "admin") {
    window.location.href = "";
  } else {
    document.getElementById("loginerror").innerText = "Invalid Credentials!";
  }
};
