import string from './css.js'

let n = 1
let time = 0
const demo1 = document.querySelector('#demo1')
const demo2 = document.querySelector('#demo2')
const btnPause = document.querySelector('#btnPause')
const btnPlay = document.querySelector('#btnPlay')
const btnSlow = document.querySelector('#btnSlow')
const btnNormal = document.querySelector('#btnNormal')
const btnFast = document.querySelector('#btnFast')
const run = () => {
    if (n > string.length) {
        window.clearInterval(id)
        return
    }
    demo1.innerText = string.substr(0, n)
    demo2.innerHTML = string.substr(0, n)
    n += 1
    demo1.scrollTop = 999999999
}
let id = setInterval(
    run, time
)
let play = () => {
    return id = setInterval(run, time)
}
let pause = () => {
    window.clearInterval(id)
}
btnPause.onclick = () => {
    pause()
}

btnPlay.onclick = () => {
    play()
}

btnSlow.onclick = () => {
    pause()
    time = 100
    play()
}
btnNormal.onclick = () => {
    pause()
    time = 50
    play()
}
btnFast.onclick = () => {
    pause()
    time = 0
    play()
}