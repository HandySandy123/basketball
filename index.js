let resetVal = 0

let homePointScore = document.getElementById("homePointTally")
let guestPointScore = document.getElementById("guestPointTally")
let timer = document.getElementById("timer")

function plusOne(home){
    if (home === true){
        pointsTot = Number(homePointScore.innerText)
        pointsTot += 1
        homePointScore.textContent = pointsTot
    }else {
        pointsTot = Number(guestPointScore.innerText)
        pointsTot += 1
        guestPointScore.textContent = pointsTot
    }
}

function plusTwo(home){
    if (home === true){
        pointsTot = Number(homePointScore.innerText)
        pointsTot += 2
        homePointScore.textContent = pointsTot
    } else {
        pointsTot = Number(guestPointScore.innerText)
        pointsTot += 2
        guestPointScore.textContent = pointsTot
    }
}

function plusThree(home){
    if (home === true){
        pointsTot = Number(homePointScore.innerText)
        pointsTot += 3
        homePointScore.textContent = pointsTot
    }else {
        pointsTot = Number(guestPointScore.innerText)
        pointsTot += 3
        guestPointScore.textContent = pointsTot
    }
}

function reset(){
    homePointScore.textContent = 0
    guestPointScore.textContent = 0
}

function newGame(){
    let timeLeft = timer.textContent = "9:59"
    let minutes = Number(timer.textContent.split(":")[0])
    let seconds = Number(timer.textContent.split(":")[1])
    do {
        console.log(minutes + " " + seconds)

    }
    while (seconds >= 0) {
        if(seconds == 0){
            minutes -= 1
            seconds = 59
        }
        setInterval(seconds -= 1, 1000)
        console.log(seconds)
        timeLeft = minutes + ":" + seconds
        timer.textContent = timeLeft
        
    }
}