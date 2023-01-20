const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value);
    document.getElementById("result").innerHTML = "";

    if (e.key === "Enter") {
        setTimeout(() => {
            e.target.value = ""; // Clear the input textarea
        }, 10);

        randomSelect();
    }
});

function createTags(input) {
    const tags = input
        .split(",")
        .filter((tag) => tag.trim() !== "")
        .map((tag) => tag.trim());

    tagsEl.innerHTML = "";

    tags.forEach((tag) => {
        const tagEl = document.createElement("span");
        tagEl.classList.add("tag");
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });
}

function randomSelect() {
    const times = 30; // The number of times to highlight

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        if (randomTag !== undefined) {
            highlightTag(randomTag);

            setTimeout(() => {
                unHighlightTag(randomTag);
            }, 100);
        }
    }, 100);

    // Deal with the ending (after times*100 ms, stop the interval and pick the final one)
    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlightTag(randomTag);
            displayResult(randomTag);
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add("highlight");
}

function unHighlightTag(tag) {
    tag.classList.remove("highlight");
}

function displayResult(tag) {
    textarea.blur();
    const result = document.createElement("h3");
    result.innerText = `WHOO! Looks like your choice is ${tag.innerHTML} !`;
    document.getElementById("result").appendChild(result);
}
