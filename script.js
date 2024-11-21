
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

function applyTheme(background, color, headerText, buttonBg, buttonText) {
    const body = document.getElementById("mainBody");
    const header = document.getElementById("mainHeader");
    const buttons = document.getElementById("buttonContainer").querySelectorAll("button");

    body.style.backgroundColor = background;
    body.style.color = color;
    header.textContent = headerText;

    buttons.forEach(button => {
        button.style.backgroundColor = buttonBg;
        button.style.color = buttonText;
    });
}

document.getElementById("boyButton").addEventListener("click", () => {
    applyTheme("#7393B3", "#00008B", "Boy", "#A7C7E7", "#000");
});

document.getElementById("girlButton").addEventListener("click", () => {
    applyTheme("#FFB6C1", "#ED4592", "Girl", "#F8C8DC", "#000");
});

document.getElementById("oldButton").addEventListener("click", () => {
    applyTheme("#C19A6B", "#8B4513", "Old", "#D2B48C", "#000");
});

createStyles();

