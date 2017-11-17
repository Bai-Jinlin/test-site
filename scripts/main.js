var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');
var myButton1 = document.getElementById('nameClear');
var myImage = document.querySelector('img');
// document.querySelector('html').onclick=function(){
//     alert('Ouch! Stop poking me!');
// }

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === './images/logo.png') {
        myImage.setAttribute('src', './images/logo2.png')
    } else {
        myImage.setAttribute('src', './images/logo.png')
    }
}

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool,' + myName;
}


if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool,' + storedName;
}

myButton.onclick = function () {
    setUserName();
}

myButton1.onclick = function () {
    localStorage.removeItem('name');
    myHeading.innerHTML = 'Mozilla is cool';
}