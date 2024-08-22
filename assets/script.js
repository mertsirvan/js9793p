// distraction meter
let btnDistraction = document.getElementById("distraction-time");
let valueDistraction = btnDistraction.innerHTML;

function addDistraction() {
    ++valueDistraction;

    console.log(valueDistraction);

    document.getElementById("distraction-time").innerHTML = valueDistraction;
};

function resetDistraction() {
    valueDistraction = 0;

    console.log(valueDistraction);
    
    document.getElementById("distraction-time").innerHTML = valueDistraction;

};

// custom audio player 
let trackPlayer = document.getElementById('track-player');
let btnControl = document.getElementById('play-pause');

function playPause() {
    if (trackPlayer.paused) {
        trackPlayer.play();
        //controlBtn.textContent = "Pause";
        btnControl.className = "pause";
    } else { 
        trackPlayer.pause();
         //controlBtn.textContent = "Play";
        btnControl.className = "play";
    }
};

btnControl.addEventListener("click", playPause);

trackPlayer.addEventListener("ended", function() {
  btnCtontrol.className = "play";
});