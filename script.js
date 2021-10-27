let deadline = new Date("Dec 31 , 2021 23:59:59").getTime();
let counter = setInterval(() => {
    let date = new Date().getTime();
    let datediff = deadline - date;
    let days = Math.floor(datediff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(datediff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(datediff % (1000 * 60 * 60) / (1000 * 60));
    let sec = Math.floor(datediff % (1000 * 60) / (1000));

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = sec < 10 ? `0${sec}` : sec;

    if (dateDiff < 0) {
        clearInterval(counter);
    }
}, 1000);