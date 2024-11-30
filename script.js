function createStyles() {
    const body = document.getElementById("mainBody");
    const header = document.getElementById("mainHeader");
    const buttons = document.getElementById("buttonContainer");

    body.style.margin = "0";
    body.style.fontFamily = "Arial, sans-serif";
    body.style.textAlign = "center";

    header.style.padding = "20px";

    buttons.style.marginTop = "50px";

    const allButtons = buttons.querySelectorAll("button");
    allButtons.forEach(button => {
        button.style.padding = "10px 20px";
        button.style.fontSize = "16px";
        button.style.margin = "5px";
        button.style.border = "none";
        button.style.cursor = "pointer";
        button.style.borderRadius = "5px";
    });
}

function applyTheme(background, color, headerText, buttonBg, buttonText, images, fontFamily) {
    const body = document.getElementById("mainBody");
    const header = document.getElementById("mainHeader");
    const buttons = document.getElementById("buttonContainer").querySelectorAll("button");
    const imageContainer = document.getElementById("imageContainer");
    
    body.style.backgroundColor = background;
    body.style.color = color;
    body.style.fontFamily = fontFamily;
    header.textContent = headerText;

    buttons.forEach(button => {
        button.style.backgroundColor = buttonBg;
        button.style.color = buttonText;
        button.style.fontFamily = fontFamily;
    });

    imageContainer.innerHTML = "";
    images.forEach(imgSrc => {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = headerText + " style";
        img.style.width = "200px";
        img.style.height = "auto";
        img.style.margin = "10px";
        img.style.borderRadius = "10px";
        img.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        imageContainer.appendChild(img);
    });
}

document.getElementById("boyButton").addEventListener("click", () => {
    applyTheme(
        "#7393B3",
        "#00008B",
        "Boy",
        "#A7C7E7",
        "#000",
        ["boy1.jpg", "boy2.jpg", "boy3.jpg"],
        "'Courier New', monospace"
    );
});

document.getElementById("girlButton").addEventListener("click", () => {
    applyTheme(
        "#FFB6C1",
        "#ED4592",
        "Girl",
        "#F8C8DC",
        "#000",
        ["girl1.jpg", "girl2.jpg", "girl3.jpg"],
        "'Brush Script MT', cursive"
    );
});

document.getElementById("oldButton").addEventListener("click", () => {
    applyTheme(
        "#C19A6B",
        "#8B4513",
        "Old",
        "#D2B48C",
        "#000",
        ["old1.jpg", "old2.jpg", "old3.jpg"],
        "'Times New Roman', serif"
    );
});

createStyles();
