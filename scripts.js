document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1200, // Duration of animation in ms
    });
    console.log('Page loaded with AOS');
});

document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById('background-music');
    audio.play().catch(function (error) {
        console.log('Autoplay was prevented. Click anywhere to play the audio.');
        document.addEventListener('click', function () {
            audio.play();
        }, {
            once: true
        });
    });
});