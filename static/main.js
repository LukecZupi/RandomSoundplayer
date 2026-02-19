const sounds = [
    {file: "/static/sounds/sound1.mp3", volume: 0.3 }
];

const button = document.getElementById("button");

button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * sounds.length);
    const selected = sounds[randomIndex];

    const audio = new Audio(selected.file);
    audio.volume = selected.volume;
    audio.play();
});