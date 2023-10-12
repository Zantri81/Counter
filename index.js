 // this is the js

let welcomeEL = document.getElementById("welcome-el")
let saveEL = document.getElementById("save-el")
let countEL = document.getElementById("count-el") //pass in arguments



let name = "Tristan"
let greeting = ", welcome Back!"

welcomeEL.innerText = name + greeting
welcomeEL.innerText += "👋" // equivalent to = welcomeEL.innerText = welcomeEL.innerText + "👋"

 // document.getElementById("count").innerText = 5



console.log(countEL)

let count = 0

 function increment() {
    count += 1 // equivalent to = count = count + 1
    countEL.innerText = count
 }



 function save() {
    let countStr = count + " - "
    saveEL.textContent += countStr //textContent instead of ineerText for "saving" the space
    console.log(countStr)

 }

