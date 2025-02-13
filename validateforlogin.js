function loginpage(){
var login_user = document.getElementById("login_user").value;
var login_pass = document.getElementById("login_pass").value;
let submitOk = true;
if(login_user ==="" || login_user === null || /\d/.test(login_user)){
    alert("Please enter a valid username");
    submitOk = false;
}
if(login_pass ==="" || login_pass === null || login_pass.length < 8){
    alert("password must be 8 characters long");
    submitOk = false;
}
 return submitOk;
}

function registerpage(){
    var reg_user = document.getElementById("res_user").value;
    var reg_pass = document.getElementById("res_pass").value;
    var reg_email = document.getElementById("res_email").value;
    let submitOk = true;
    if(reg_user ==="" || reg_user === null || /\d/.test(reg_user)){
        alert("Please enter a valid username");
        submitOk = false;
    }
    if(reg_pass ==="" || reg_pass === null || reg_pass.length < 8){
        alert("password must be 8 characters long");
        submitOk = false;
    }
    if(reg_email ==="" || reg_email === null || !reg_email.includes("@") || !reg_email.includes("gmail.com")){
        alert("Please enter a valid email");
        submitOk = false;
    }
    return submitOk;
}