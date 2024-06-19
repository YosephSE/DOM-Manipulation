let stopWatch = document.querySelector("#display")
let start = document.querySelector("#start")
let reset = document.querySelector("#reset")

let seconds = 0
let minutes = 0
let hours = 0
let running = false
function stopWatchStart(){
    seconds++
    if (seconds === 60){
        seconds = 0;
        minutes++
        if (minutes === 60){
            minutes = 0
            hours++
        }
    }
    showtime()
}


function showtime(){
    stopWatch.innerHTML = `${hours}:${minutes}:${seconds}`
}

start.addEventListener("click", function(){
    if (!running){
        running = true
        start.children[0].classList.remove("fa-play")
        start.children[0].classList.add("fa-pause")
        var starttime = setInterval(stopWatchStart, 1000)
    }else{
        running = false
        start.children[0].classList.add("fa-play")
        start.children[0].classList.remove("fa-pause")
        clearInterval(starttime)
        showtime()
        
    }
    
    
})

reset.addEventListener("click", function(){
    minutes = 0
    seconds = 0
    hours = 0
    
})