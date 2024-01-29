// NOTE Variables

let home = 0
let away = 0

let homeTotal = 0
let awayTotal = 0




// NOTE Just one function cause Jake gave me a challenge :(( 
function game(team, num) {
    
    if(team == 'home') {
        home += num
        document.getElementById('home').innerHTML = home
        homeTotal = home
    } else {
        away += num
        document.getElementById('away').innerHTML = away
        awayTotal = away
    }
   
    // NOTE prevents the scores to go negative
   if(home < 0) {
    home = 0
    document.getElementById('home').innerHTML = home
   } else if(away < 0) {
    away = 0
    document.getElementById('away').innerHTML = away
   }
   
   // NOTE which team wins
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
   
   // NOTE resets the game
   if(team == 'reset') {
    document.getElementById("background").style.backgroundColor = "rgba(0, 0, 0, 0.411)"
    document.getElementById("background").style.pointerEvents = "visible";
    document.getElementById("background").style.opacity = "1"
    
    home = 0
    document.getElementById("home").innerHTML = 0
    document.getElementById("homeCard").style.display = "none"
    
    away = 0
    document.getElementById("away").innerHTML = 0
    document.getElementById("awayCard").style.display = "none"
   }
   
}

