const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;
let intervalID = setInterval(blurring, 30); // Run every 30 ms

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(intervalID);
    }

    // console.log(load);
    loadText.innerText = `${load}%`;

    // opacity ranges from 0 to 1.
    // need to map 0-100 to 1-0
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
