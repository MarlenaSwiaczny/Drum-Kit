var letters = {
    "w": "./sounds/crash.mp3",
    "a": "./sounds/kick-bass.mp3",
    "s": "./sounds/snare.mp3",
    "d": "./sounds/tom-1.mp3",
    "j": "./sounds/tom-2.mp3",
    "k": "./sounds/tom-3.mp3",
    "l": "./sounds/tom-4.mp3",
}


drumButtons = [...document.getElementsByClassName("drum")];

function playSound (letter) {
    this.letter = letter;
    audio = new Audio(letters[letter])
    audio.play()
    console.log(letter, letters[letter])
}

function buttonAnimation (letter) {
    var activeButton = document.getElementsByClassName(letter)[0];
    activeButton.classList.add("pressed");
    setTimeout( function() {
        activeButton.classList.remove("pressed");
    }, 100)
}

for (drumButton of drumButtons) {
    
    drumButton.addEventListener("click", function() {
        var letter = this.innerHTML;
        playSound(letter);
        buttonAnimation(letter);
    })
}

document.addEventListener("keydown", function(event) {
    var key = event.key;
    playSound(key);
    buttonAnimation(key);
})