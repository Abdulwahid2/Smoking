

function takeAworkingLighter() {
  return " take a working lighter"
}

function testIfLighterWorks() {
  return " test if lighter works"
}

function rumageAroundForAlighter() {
  return " rumage around for a lighter"
}

function goToTheMiscVase() {
  return " go to the misc Vase"
}

function isThereAlighter(lighter) {  
  if (!lighter) {
    console.log(goToTheMiscVase());
    console.log(rumageAroundForAlighter());
    console.log(testIfLighterWorks());
    console.log(takeAworkingLighter());
    console.log(lighterColor());
  } else {
    console.log(" i have a lighter")
  }
}

const randomLighterColor = [ "Picked up Red lighter","Picked up Green lighter","Picked up Blue lighter"]

function lighterColor() {
  let color
 color = randomLighterColor[Math.floor(Math.random()* randomLighterColor.length)]
  return  " " + color;
}




module.exports = {
     isThereAlighter,    
     lighterColor,  
  }
