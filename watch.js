var span = document.getElementById("horario");
updateTime();

setInterval(function() {
    updateTime();
}, 1000);

function updateTime() {
    let today = new Date();
    seconds = today.getSeconds();
    minutes = today.getMinutes();
    hours = today.getHours();
    if(hours < 10) {
        hours = "0" + hours;
    }
    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    span.innerHTML = hours + ":" + minutes + ":" + seconds;
}
