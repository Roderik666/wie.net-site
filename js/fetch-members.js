async function getData() {
    try {
        const response = await fetch("../json/members.json");
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
      }
  
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
  }
  

window.onload = function () {
    const memberFile = fetch("../json/members.html")
    var newDiv = document.createElement("div");
newDiv.innerHTML = "<h1>Test!</h1>"
document.getElementById("wrapper").appendChild(newDiv);
}
