const clock = document.querySelector('h2#clock')

function getClock(){
    const date    = new Date();
    const hours   = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours}:${minutes}:${seconds}`

    console.log("2초마다");
}

getClock();
setInterval(getClock, 2000) //실시간으로 보내는 기능 2초마다