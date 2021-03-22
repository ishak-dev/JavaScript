function countdown1(){
    
    const currentDate = new Date();
    
    var getHours = currentDate.getHours()
    var getMinutes = currentDate.getMinutes()
    var getSeconds = currentDate.getSeconds()

    
    
    if (currentDate.getMonth() == 2){
        month = currentDate.getMonth() * 28
    }
    else{
    if(currentDate.getMonth() % 2 == 1){
        month = currentDate.getMonth() * 31
    }
    else{month = currentDate.getMonth() * 30}
}

    

    var passedDays = month + currentDate.getDate() - 1
    var days = 365
    var hours = 24 - getHours
    var minutes = 60 - getMinutes
    var seconds = 60 - getSeconds

    if (minutes == 60){minutes = 0 + "0"}
    if (seconds == 60){seconds = 0 + "0"}
    if (hours == 24){hours = 0 + "0"}

    var remainingDays = days - passedDays
    console.log(remainingDays)

    document.getElementById("days").innerHTML = remainingDays
    document.getElementById("hours").innerHTML = hours
    document.getElementById("mins").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds

    setTimeout(countdown1,1000)
}

countdown1()