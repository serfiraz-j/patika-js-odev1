let myName = prompt('Adınız nedir?')
const n = document.querySelector('#myName')
n.textContent = myName

timeFunc = () => {
    date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let day = date.getDay()
    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    switch (day) {
        case 0:
            day = 'Pazar'
            break;
        case 1:
            day = 'Pazartesi'
            break;
        case 2:
            day = 'Salı'
            break;
        case 3:
            day = 'Çarşamba'
            break;
        case 4:
            day = 'Perşembe'
            break;
        case 5:
            day = 'Cuma'
            break;
        case 6:
            day = 'Cumartesi'
            break;

        default:
            break;
    }
    document.querySelector("#myClock").innerHTML = hours + ":" + minutes + ":" + seconds + "     " + day
}
timeFunc()
setInterval(timeFunc, 1000)