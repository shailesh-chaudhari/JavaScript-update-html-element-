console.log("countdown loaded")

var countdownElement = document.getElementById('countdown')
var bgImageElement = document.getElementById('bg-image')

console.log(bgImageElement)

var initialCountdownVal = countdownElement.innerHTML

setInterval(function () {
    initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal - 1 : 0
    countdownElement.innerHTML = initialCountdownVal
    var backImgPath = initialCountdownVal % 2 === 0 ? 'assets/vector-image1.jpg' : 'assets/vector-image2.jpg'

    bgImageElement.src = backImgPath

    bgImageElement.className = 'BackImage'
    console.log(bgImageElement)
}, 1000)