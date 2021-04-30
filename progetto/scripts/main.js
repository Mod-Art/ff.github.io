let y =document.querySelector('img');

y.onclick = function() {
     let x =y.getAttribute('src');
    if(x === 'images/gatto_1020x680.webp') {
      y.setAttribute('src','images/gatto-bengala/catcat.1020x680.jpg');
    } else {
      y.setAttribute('src','images/gatto_1020x680.webp');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(myName!=null)
    {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'I gatti sono belli, ' + myName+'!';
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'I nostri amici mici, ' + storedName+'!';
  }
  myButton.onclick = function() {
    setUserName();
  }