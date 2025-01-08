
// https://www.codeover.in/blog/image-fade-in-out-swap-a-comprehensive-guide

let jsonData;
let currentIndex = 0;
async function fetchJson(path) {
    console.log("Fetching data...");
    const fetchResponse = await fetch(path);
    jsonData = await fetchResponse.json();
    console.log("Fetching finished.");
    console.log(jsonData);
    return jsonData;
}
fetchJson("../staticdata/gallery.json");
console.log(jsonData)

function swapImage() {
    console.log("Swapping image...");

    document.body.style.backgroundImage = "url(" + jsonData[currentIndex]["path"] + ")";
    currentIndex += 1;

    console.log("Swapped image.");
}