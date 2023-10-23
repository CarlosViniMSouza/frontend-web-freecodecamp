const htmlBody = document.querySelector('body');

const changeBackground = function() {
    const colors = ["#000622", "#c61d1f", "#a9a9a9"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];

    htmlBody.style.backgroundColor = randomColor;
    console.log('Set color now: ' + htmlBody);
}

htmlBody.onclick = changeBackground;
