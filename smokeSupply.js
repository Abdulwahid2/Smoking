

function goToTheSmokesCabinet() {
  return "go to the smokes cabinet"
}
function grabAnewpack() {
  return "grab a new pack"
}

function doIhaveSmokes(smokeSupply) {
  if (!smokeSupply) {
    console.log(goToTheSmokesCabinet())
    console.log(grabAnewpack())
  } else {
    console.log(" I have smokes");
  }

}
module.exports = {
  doIhaveSmokes,

}