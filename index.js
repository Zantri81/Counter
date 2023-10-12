 // this is the js

 // document.getElementById("count").innerText = 5

let countEL = document.getElementById("count-el")

console.log(countEL)

let count = 0

 function increment() {
    count = count +1
    countEL.innerText = count
    console.log(count)
 }