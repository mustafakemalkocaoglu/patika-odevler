let prName = prompt("İsminizi Giriniz:");

document.querySelector("#myName").innerHTML = prName;

let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
function showTime() {

    let d = new Date();
    let hour =d.getHours();
    let min =d.getMinutes();
    let day = days[d.getDay()];
    let sec =d.getSeconds();

    hour = (hour < 10) ? "0"+hour : hour;
    min = (min < 10) ? "0"+min : min;
    sec = (sec < 10) ? "0"+sec : sec;
    document.querySelector("#myClock").innerHTML = `${hour}:${min}:${sec} ${day}`;
}
setInterval(showTime, 1000);
showTime();