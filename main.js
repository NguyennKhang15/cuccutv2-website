// Create "Yes" text
let yesText = document.createElement("p");
yesText.id = "yesText";
yesText.innerHTML = "<b><big>Yes</big></b>";
yesText.style.fontSize = "28px";
yesText.style.position = "absolute";
yesText.style.left = "50%";
yesText.style.top = "40%";
document.body.appendChild(yesText);

// Create "No" text
let noText = document.createElement("p");
noText.id = "noText";
noText.innerHTML = "<b><big>No</big></b>";
noText.style.fontSize = "28px";
noText.style.position = "absolute";
noText.style.left = "50%";
noText.style.top = "60%";
document.body.appendChild(noText);

// Function to create a heart element
function createHeart() {
    let heart = document.createElement("div");
    heart.innerHTML = " cứt nè💩";
    heart.style.position = "fixed";
    let randPosX = Math.floor(Math.random() * window.innerWidth);
    let randPosY = Math.floor(Math.random() * window.innerHeight);
    heart.style.left = randPosX + 'px';
    heart.style.top = randPosY + 'px';
    return heart;
}

// When "Yes" is clicked, create hearts
yesText.onclick = function() {
    for(let i = 0; i < 100; i++) {
        let heart = createHeart();
        document.body.appendChild(heart);
    }
};

// When "No" is clicked, move "No" to a random position
noText.onclick = function() {
    let x = Math.floor(Math.random() * (window.innerWidth - noText.offsetWidth));
    let y = Math.floor(Math.random() * (window.innerHeight - noText.offsetHeight));
    noText.style.left = x + 'px';
    noText.style.top = y + 'px';
};
