
// Home Score Buttons:

// Home score 1 button 👇 

let homeScoreBtnOne = document.getElementById("home-one")
let homeStoreElOne =document.getElementById("changeto-num")
let homeScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreElOne.textContent = homeScore
}

// Home score 2 button 👇 

let homeScoreBtnTwo = document.getElementById("home-two")
let homeStoreElTwo =document.getElementById("changeto-num")

function increaseHomeScoreTwo(){
    homeScore += 2
    homeStoreElTwo.textContent = homeScore
}

// Home score 3 button 👇 

let homeScoreBtnThree = document.getElementById("home-three")
let homeStoreElThree =document.getElementById("changeto-num")

function increaseHomeScoreThree(){
    homeScore += 3
    homeStoreElTwo.textContent = homeScore
}



// Guest Score Buttons:

// Guest score 1 button 👇 

let guestScoreBtnOne = document.getElementById("guest-one")
let guestStoreElOne =document.getElementById("change-guest-score")
let guestScore = 0


function increaseGuestScoreOne(){
    guestScore += 1
    guestStoreElOne.textContent = guestScore
}

// Guest score 2 button 👇 

let guestScoreBtntwo = document.getElementById("guest-two")
let guestStoreEltwo =document.getElementById("change-guest-score")


function increaseGuestScoreTwo(){
    guestScore += 2
    guestStoreElOne.textContent = guestScore
}

// Guest score 3 button 👇 

let guestScoreBtnthree = document.getElementById("guest-three")
let guestStoreElthree =document.getElementById("change-guest-score")


function increaseGuestScoreThree(){
    guestScore += 3
    guestStoreElOne.textContent = guestScore
}
