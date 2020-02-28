/*let myHeading = document.querySelector("h2");

function setUserName() {
  let myName = prompt("Wie heißt du?");
  if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.innerHTML = "Hallo " + myName + "!";
    }
}

if(!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Hallo " + myName + "!";
  }
*/

let myImage = document.querySelector("img");

let changeButton = document.getElementById("changeBunny");

const arr = ["images/Bunny1.jpg", "images/Bunny2.jpg", "images/Bunny3.jpeg", "images/Bunny4.jpg", "images/Bunny5.jpg", "images/Bunny6.jpg", "images/Bunny7.jpg", "images/Bunny8.jpg", "images/Bunny9.jpg", "images/Bunny10.jpg"];

changeButton.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    myImage.setAttribute ("src", arr[Math.floor(Math.random() * arr.length)]);
}
