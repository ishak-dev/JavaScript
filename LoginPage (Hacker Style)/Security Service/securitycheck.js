var i = 0;
var txt = '(function (kom datacontext)) | <div style="background-color:black"|"background.text - todoitem;"| <p>The image can be tiled across the background,|while the text runs across the top <p><div>||| <p>You can make _ _ _ _ _ _ _ _ _ _ _ _ <span> <font="italic green">|<p>You can make _ _ _ _ _ _ _ _ _ _ _ _ <span> <font="italic green">|<p>You can make _ _ _ _ _ _ _ _ _ _ _ _ <span> <font="italic green">|<p>You can make _ _ _ _ _ _ _ _ _ _ _ _ <span> <font="italic green">|<p>You can make _ _ _ _ _ _ _ _ _ _ _ _ <span> <font="italic green">|<p>You can make _ _ _ _ _ _ _ _ _ _ _ _ <span> <font="italic gree">|<p>You can make _ _ _ _ _ _ _ _ _ _ _ _ <span> <font="italic green">|| // persisted propertie|<html> <p stylefont-weight:bold;>HTML font code is done using CSS <p>|<html> body style=background-color:yellowgreen;color:white | html> .todolistid = data.todoidb||// Non = persisted propertie|html> errormessage ? ko, observable()|||p> style="color:orange;">HTML font code is done using css. p| function todoitem(data){;}|var self=this;|data = dta 1l{};|||You can make span> style ="font-style: italic">some span> the HTML span tag.|p>You can bold span> style="parts" span>of your text using the HTML tag. p>|||/ / Non - persisted properties|html> p>style = "fint-weight:bold">HTML font code is done using CSS p>|html> body> style ="background-color: black;">|html> script: src ="js"';
var speed = 10;
function typeWriter(){
if(i< txt.length){
    if (txt.charAt(i)=="|"){
        document.getElementById("text").innerHTML += "<br>";
        
    }
    else
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
}
}

var hide = document.getElementById('hide');
var show = document.getElementById('show');
var password = document.getElementById('password').value;
var passwordType = document.getElementById('password');
function showPassword(){
if(password != " "){
   show.style.display = "block";
}

}
function buttonShow(){
    passwordType.type = "text";
    show.style.display = "none";
    hide.style.display = "block";
} 
function buttonHide(){    
    passwordType.type = "password";
    show.style.display = "block";
    hide.style.display = "none";
}


function closeError(){
    document.getElementById('error').style.display = "none";
    document.getElementById('success').style.display = "none";

}

document.addEventListener("keydown", function(event) {
    if(event.keyCode === 27){
        document.getElementById('error').style.display = "none";
        document.getElementById('success').style.display = "none";
   }
});


function check(){
var email = document.getElementById('email').value;
var com = email.substr(-4);   
 if(email == ""){
     document.getElementById('error').style.display = "block";
    } else{
 if(com != ".com"){
    document.getElementById('error').style.display = "block";
    }
 else{document.getElementById('success').style.display = "block";}
 }}
