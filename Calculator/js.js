function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
    
}
function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    var n = Number(num);
    var value= n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i = 0; i<operator.length; i++){
    operator[i].addEventListener('click',function(){
       // alert("the operator clicked: "+this.id);
       if(this.id=="clear"){
           printHistory("");
           printOutput("");
           br=0;
           document.getElementById("task").style.display="none";
       }
       if(this.id=="backspace"){
           var output = reverseNumberFormat(getOutput()).toString();
           if(output){
               output=output.substr(0,output.length-1);
               printOutput(output);
               br=output.length;
               document.getElementById("task").style.display="none";
           }
       }
       else {
           var output=getOutput();
           var history=getHistory();
           if(output=="" &&history!=""){
               if(isNaN(history[history.length-1])){
                   history= history.substr(0,history.length-1);
                 
               }

           }
           if(output !="" || history!=""){
               output= output==""?output:reverseNumberFormat(output);
               history=history+output;
               if(this.id=="="){
                   var result=eval(history);
                   printOutput(result);
                   printHistory("");
                   br=0;
           document.getElementById("task").style.display="none";
               }
               else{
                   history=history+this.id;
                   printHistory(history);
                   printOutput("");
                   br=0;
           document.getElementById("task").style.display="none";
               }
           }
       }
    })
}

var number = document.getElementsByClassName("number");
var br=0;
for(var i = 0; i<number.length; i++){
    
    number[i].addEventListener('click',function(){
       // alert("the number clicked: "+this.id);
       
       var output = reverseNumberFormat(getOutput());
       if(output!= NaN){
        if(br>9){
            document.getElementById("task").style.display="block";
        }else{
         br=br+1;
           output=output+this.id;
           printOutput(output);}
           
       }
     
           
    });
  
}

//777777777777777777777777777777777777777777777777777777777777

