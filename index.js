window.onload = function() {
    Audio.prototype.stop = function() {
        audio.pause();
        audio.currentTime = 0;
    }

    let audio = new Audio("./audio.mp3");
    let count = 0;

    function replay() {
        audio.stop();
        audio.play();
    }

    let button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", function() {
        let interval = setInterval(function() {
            if (count < 10) {
                replay();
                count += 1;
            } else {
                clearInterval(interval);
                count = 0;
            }
        }, 100);
    });
}
