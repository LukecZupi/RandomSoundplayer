const sounds = [
    {file: "/static/sounds/sound1.mp3", volume: 0.3 },
    {file: "/static/sounds/sound2.mp3", volume: 0.3 },
    {file: "/static/sounds/sound3.mp3", volume: 0.3 },
    {file: "/static/sounds/sound4.mp3", volume: 0.3 }
];

const button = document.getElementById("button");

let currentAudio = null;

button.addEventListener("click", () => {
    if (currentAudio) {
        try {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        } catch (e) {
        }
        currentAudio = null;
    }

    const randomIndex = Math.floor(Math.random() * sounds.length);
    const selected = sounds[randomIndex];

    const audio = new Audio(selected.file);
    audio.volume = selected.volume;
    currentAudio = audio;
    audio.play();

    audio.addEventListener('ended', () => {
        if (currentAudio === audio) currentAudio = null;
    });
});