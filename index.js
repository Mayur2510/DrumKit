var numberOfButtons = document.querySelectorAll(".drum").length;

for( var i=0; i < numberOfButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function() {

  var buttonInnerHTML = this.innerHTML;

 makesound(buttonInnerHTML);

});

}

document.addEventListener("keydown", function(event) {
  makesound(event.key);
});

function makesound(key) {
switch (key) {

  case "w":
  var drum1 = new Audio("sounds/crash.mp3");
  drum1.play();
  break;


  case "a":
  var drum4 = new Audio("sounds/kick-bass.mp3");
  drum4.play();
  break;

  case "s":
  var drum5 = new Audio("sounds/snare.mp3");
  drum5.play();
  break;

  case "d":
  var drum6 = new Audio("sounds/tom-1.mp3");
  drum6.play();
  break;

  case "j":
  var drum7 = new Audio("sounds/tom-2.mp3");
  drum7.play();
  break;

  case "k":
  var drum8 = new Audio("sounds/tom-3.mp3");
  drum8.play();
  break;

  case "l":
  var drum9 = new Audio("sounds/tom-4.mp3");
  drum9.play();
  break;


  default: console.log(buttonInnerHTML);
}
}
