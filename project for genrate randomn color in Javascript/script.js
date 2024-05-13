let intervalId; // Declare a variable to store interval ID
let isColorChanging = false; // Flag to track color changing state

const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) { // Fixed the loop condition
        color += hex[Math.floor(Math.random() * 16)]; // Corrected indexing
    }
    return color;
}

const startChangingColor = function () {
    if (!isColorChanging) {
        intervalId = setInterval(chanBgColor, 1000); // Assign interval ID to variable
        isColorChanging = true; // Update flag
    }
};

const stopChangingColor = function () {
    if (isColorChanging) {
        clearInterval(intervalId); // Clear interval using interval ID
        isColorChanging = false; // Update flag
    }
};

function chanBgColor() {
    document.body.style.backgroundColor = randomColor(); // Corrected syntax
}

document.querySelector("#start").addEventListener('click', startChangingColor);
document.querySelector("#stop").addEventListener('click', stopChangingColor);
 