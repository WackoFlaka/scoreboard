// NOTE Variables

let home = 0
let away = 0

let homeTotal = 0
let awayTotal = 0

// NOTE ADDING POINTS 

function addOneHome() {
    home += 1
    homeTotal = document.getElementById('home')
    homeTotal.innerHTML = home
    winGame()
    
}

function addThreeHome() {
    home += 3
    homeTotal = document.getElementById('home')
    homeTotal.innerHTML = home
    winGame()
}

function addOneAway() {
    away += 1
    awayTotal = document.getElementById('away')
    awayTotal.innerHTML = away
    winGame()
}

function addThreeAway() {
    away += 3 
    awayTotal = document.getElementById('away')
    awayTotal.innerHTML = away
    winGame()
}

// NOTE Subtracting Points

function lessHome() {
    home -= 1 
    homeTotal = document.getElementById('home')
    homeTotal.innerHTML = home
}

function lessAway() {
    away -= 1
    awayTotal = document.getElementById('away')
    awayTotal.innerHTML = away
}


// NOTE winners

function winGame() {
    
    
    
    if(home >= 20) {
        console.log("Home Team wins!")
        document.getElementById("homeCard").style.display = "block"
        document.getElementById("background").style.pointerEvents = "none";
        document.getElementById("background").style.backgroundColor = "rgba(0, 0, 0, 0.8)"
        document.getElementById("background").style.opacity = "0.4"
    } else if(away >= 20) {
        console.log("Away Team wins!")
        document.getElementById("awayCard").style.display = "block"
        document.getElementById("background").style.pointerEvents = "none";
        document.getElementById("background").style.backgroundColor = "rgba(0, 0, 0, 0.8)"
        document.getElementById("background").style.opacity = "0.4"
    }
}

// NOTE Resets Score

function reset() {

    document.getElementById("background").style.backgroundColor = "rgba(0, 0, 0, 0.411)"
    document.getElementById("background").style.pointerEvents = "visible";
    document.getElementById("background").style.opacity = "1"
    
    home = 0
    document.getElementById("home").innerHTML = 0
    document.getElementById("homeCard").style.display = "none"
    
    away = 0
    document.getElementById("away").innerHTML = 0
    document.getElementById("awayCard").style.display = "none"
    
    console.log(clearInterval)
}
