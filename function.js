// creating function from smoke supply
let {doIhaveSmokes} = require("./smokeSupply")
//creating function lighter
let { isThereAlighter,lighterColor} = require("./lighter")
//creating function from smokeaction
let { goOutSide, lightItUp, inhaleSmoke, exhaleSmoke} = require("./smokeAction")
//Declearig fucntions smoke
function smoke(smokeSupply, lighter) {
  doIhaveSmokes(smokeSupply)
  isThereAlighter(lighter)
  goOutSide()  
  lightItUp()
  inhaleSmoke()  
  exhaleSmoke()
  console.log("end")
}
//logging smoking
console.log("smoking")
// call function smoke
smoke(true,false)

const myVar = function(face){
  console.log(face)
}
let face= 5
myVar(face)



