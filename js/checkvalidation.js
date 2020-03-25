function logInCheck(){
    var email=document.getElementById("e-mail").value;
    var password=document.getElementById("password").value;
    var emailreg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    var passordreg=/^([a-zA-Z0-9]{8,20})$/;
    if(!emailreg.test(email)){
        alert("Wrong format of e-mail address!");
    }
    else if(!passordreg.test(password)){
        alert("Password should contain 8-20 numbers or charactors");
    }
    else{
        alert('Sucess!');
        document.getElementById("e-mail").value="";
        document.getElementById("password").value="";
    }
}
function signInCheck(){
    var email=document.getElementById("e-mail").value;
    var password=document.getElementById("password").value;
    var comfirm=document.getElementById("comfirm").value;
    var emailreg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    var passordreg=/^([a-zA-Z0-9]{8,20})$/;
    if(!emailreg.test(email)){
        alert("Wrong format of e-mail address!");
    }
    else if(!passordreg.test(password)){
        alert("Password should contain 8-20 numbers or charactors");
    }
    else if(comfirm!=password){
        alert("Two passwords don't match!");
    }
    else{
        alert('Sucess!');
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        document.getElementById("e-mail").value="";
        document.getElementById("comfirm").value="";
    }
}
function contactCheck(){
    var email=document.getElementById("e-mail").value;
    var emailreg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if(!emailreg.test(email)){
        alert("Wrong format of e-mail address!");
    }
    else{
        alert('Sucess!');
        document.getElementById("e-mail").value="";
        document.getElementById("message").value="";
    }
}