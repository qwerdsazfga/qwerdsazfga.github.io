function displaytime(){
    let datetime = new Date()
    
    let hr = datetime.getHours()
    let min = datetime.getMinutes()
    let sec = datetime.getSeconds()

    if(hr>12){
        hr=hr-12
        let ampm = document.getElementById("ampm") 
        ampm,innerHTML = "PM"
    }
    
    document.getElementById("hours").innerHTML = zero(hr)
    document.getElementById("min").innerHTML = zero(min)
    document.getElementById("secs").innerHTML = zero(sec)
}

function zero(num){
    return num<10?"0"+num:num
}

setInterval(displaytime,500)
function displaydate(){
    let day = date.getDay()
    let mon = date.getMonth()
    let year = date.getFullYear()

    document.getElementById("day").innerHTML = day
    document.getElementById("month").innerHTML = mon
    document.getElementById("year").innerHTML = year
}