//fan sound variables
const fan1 = new Audio("sounds/fan1.mp3");
const fan2 = new Audio("sounds/fan2.mp3");
const fan3 = new Audio("sounds/fan3.mp3");
const fan4 = new Audio("sounds/fan4.mp3");

//extra sound variables
const clickSound = new Audio("sounds/shaker2.m4r");
const rainSound = new Audio("sounds/rain.m4r");
const wobbleSound = new Audio("sounds/fuzzsynth.m4r");

//fan button variables
const fanSoundButton1 = document.getElementById("fan-button-1");
const fanSoundButton2 = document.getElementById("fan-button-2");
const fanSoundButton3 = document.getElementById("fan-button-3");
const fanSoundButton4 = document.getElementById("fan-button-4");

//fan graphic variables
const fanGraphic1 = document.getElementById("fan-1");
const fanGraphic2 = document.getElementById("fan-2");
const fanGraphic3 = document.getElementById("fan-3");
const fanGraphic4 = document.getElementById("fan-4");

//extra buttons
const stopAllButton = document.getElementById("stop-all");
const clickSoundButton = document.getElementById("click");
const rainSoundButton = document.getElementById("rain");
const wobbleSoundButton = document.getElementById("wobble");

let fan1count = 0;
let fan2count = 0;
let fan3count = 0;
let fan4count = 0;

let clickerCount = 0;
let rainCount = 0;
let wobbleCount = 0;

//fan 1
function playfan1() {
  if (fan1count == 0) {
    fan1count = 1;
    fan1.loop = true;
    fan1.play();
    fanSoundButton1.innerText = "Stop Fan 1";
    fanGraphic1.classList.add("rotate");
  } else {
    fan1count = 0;
    fan1.pause();
    fanSoundButton1.innerText = "Play Fan 1";
    fanGraphic1.classList.remove("rotate");
  }
}

//fan 2
function playfan2() {
  if (fan2count == 0) {
    fan2count = 1;
    fan2.loop = true;
    fan2.play();
    fanSoundButton2.innerText = "Stop Fan 2";
    fanGraphic2.classList.add("rotate");
  } else {
    fan2count = 0;
    fan2.pause();
    fanSoundButton2.innerText = "Play Fan 2";
    fanGraphic2.classList.remove("rotate");
  }
}

//fan 3
function playfan3() {
  if (fan3count == 0) {
    fan3.loop = true;
    fan3.play();
    fanSoundButton3.innerText = "Stop Fan 3";
    fanGraphic3.classList.add("rotate");
    fan3count = 1;
  } else {
    fan3count = 0;
    fan3.pause();
    fanSoundButton3.innerText = "Play Fan 3";
    fanGraphic3.classList.remove("rotate");
  }
}

//fan 4
function playfan4() {
  if (fan4count == 0) {
    fan4count = 1;
    fan4.loop = true;
    fan4.play();
    fanSoundButton4.innerText = "Stop Fan 4";
    fanGraphic4.classList.add("rotate");
  } else {
    fan4count = 0;
    fan4.pause();
    fanSoundButton4.innerText = "Play Fan 4";
    fanGraphic4.classList.remove("rotate");
  }
}

//clicker
function playClicker() {
  if (clickerCount == 0) {
    clickerCount = 1;
    clickSound.loop = true;
    clickSound.play();
  } else {
    clickerCount = 0;
    clickSound.pause();
  }
}

//rain
function playRain() {
  if (rainCount == 0) {
    rainCount = 1;
    rainSound.loop = true;
    rainSound.play();
  } else {
    rainCount = 0;
    rainSound.pause();
  }
}

//wobble
function playWobble() {
  if (wobbleCount == 0) {
    wobbleCount = 1;
    wobbleSound.loop = true;
    wobbleSound.play();
  } else {
    wobbleCount = 0;
    wobbleSound.pause();
  }
}

//stop all sounds
function stopSounds(){
  count=0;
  fanGraphic1.classList.remove("rotate");
  fanGraphic2.classList.remove("rotate");
  fanGraphic3.classList.remove("rotate");
  fanGraphic4.classList.remove("rotate");
  fanSoundButton1.innerText = "Play Fan 1";
  fanSoundButton2.innerText = "Play Fan 2";
  fanSoundButton3.innerText = "Play Fan 3";
  fanSoundButton4.innerText = "Play Fan 4";
  fan1.pause();
  fan2.pause();
  fan3.pause();
  fan4.pause();
  clickSound.pause();
  rainSound.pause();
  wobbleSound.pause();
  let fan1count = 0;
  let fan2count = 0;
  let fan3count = 0;
  let fan4count = 0;
  let clickerCount = 0;
  let rainCount = 0;
  let wobbleCount = 0;
}
