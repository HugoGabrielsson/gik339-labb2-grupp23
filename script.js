const checkbox = document.getElementById("divStyle");
const textFields = document.getElementsByClassName("textfield");
const button = document.querySelector("#removeButton");
const displayDiv = document.getElementsByTagName("div")[0];

function handleTextFieldEvent(e) {
    console.log(e.target);
    if (e.target.id === "content"){
        displayDiv.innerHTML = e.target.value;
    }
}

checkbox.addEventListener("change", function () {
    displayDiv.style.backgroundColor = textFields[0].value;
});

for (let i = 0; i <textFields.length; i++) {
    textFields[i].addEventListener("input", handleTextFieldEvent);
}

button.addEventListener("click", function () {
    displayDiv.remove();
});