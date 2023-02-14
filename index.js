let time = document.getElementById('time')
let startBtn = document.getElementById('statTime')
let stopBtn = document.getElementById('stopTime')

let sec = 0 
let min = 0
let timeLimit = 5



function clearTime(){
    time.textContent = '00:00'
    sec = 0 
    min = 0
}

let counterTimer = function(){
    sec = sec + 1
    
    if(sec >=60){
        min = min + 1
        sec = 0
    }
    if(sec <10 && min === 0){
        time.textContent = `00:0${sec}`
    }else if(sec<60 && min === 0){
        time.textContent = `00:${sec}`

    }else{
        if(min< 10 && sec < 10){
            time.textContent = `0${min}:0${sec}`
        }else if(min< 10 && sec < 60){
            time.textContent = `0${min}:${sec}`
        }else if(min === timeLimit){
            time.textContent = 'Time Limit Exceeded'
        }
    }
}

let clearId = null
startBtn.onclick =function(){
     clearId = setInterval(counterTimer,1000)
}
stopBtn.onclick = function(){
    clearInterval(clearId)
}