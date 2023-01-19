const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");

    var i = document.createElement("i");
    i.className = "fa fa-smile-o";

    btn.innerHTML = `${sound} <i class="fa-solid fa-volume-high"></i>`;

    btn.addEventListener("click", () => {
        stopSongs();

        document.getElementById(sound).play();
    });

    document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    });
}
