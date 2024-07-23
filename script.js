function changeText() {
    var inputText = document.getElementById('textInput').value;
    var headline = document.getElementById('headline');

    headline.textContent = inputText;
}

document.getElementById("textInput").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        changeText();
    }
});