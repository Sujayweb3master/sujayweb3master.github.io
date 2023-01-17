const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === 'images/112017-Blockchain-4-V2.png') {
        myImage.setAttribute("src", "images/Blockchain-Process.png");
    } else {
        myImage.setAttribute("src", "images/112017-Blockchain-4-V2.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.onclick = () => {
    setUserName();
  };

function setUserName() {
    const myName = prompt("Please enter your name");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name1", myName);
    myHeading.textContent = `Blockchain is the FUTURE, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Blockchain is the FUTURE, ${storedName}`;
}
