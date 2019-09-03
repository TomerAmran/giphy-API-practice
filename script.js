const giphyURL = "http://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC&limit=10&q=";
const inputField = document.getElementById("inputField");
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", fetchGIFS);
inputField.focus();
inputField.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        console.log("hello");
        event.preventDefault();
        submitButton.click();
    }
});
function fetchGIFS() {
    //delete all existing gifs
    let exsGifs = document.querySelectorAll("img");
    for (let element of exsGifs) {
        element.parentNode.removeChild(element);
    }
    //make URL with user input
    let finalURL = giphyURL + inputField.value;

    //fetch gifs from giphy
    fetch(finalURL)
        .then(response => response.json())
        .then(json => printIMG(json))
        .catch(err => console.log(err));

    //make new elements with the gifs
    function printIMG(json) {
        for (let i = 0; i < json.data.length; i++) {
            let img = document.createElement("img");
            img.src = json.data[i].images.original.url;
            document.body.appendChild(img);
        }
    }
}