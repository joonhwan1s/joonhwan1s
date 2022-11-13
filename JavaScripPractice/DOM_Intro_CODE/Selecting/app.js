const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}


const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}

const doneTodos = document.querySelectorAll('done');
const checkbox = document.querySelector('input[type=checkbox]');

const allLinks = document.querySelectorAll('a');

for(let link of allLinks){
    link.innerText = 'I AM A LINK!!!!'
}

for(let slink of allLinks){
    link.style.color = 'rgb(0, 108, 137)'
}

document.querySelector('h1').innerText = '<i>asdf asd<i>'

const updateText = document.querySelectAll('span').innerText = 'Disgusting'

const input = document.querySelect('img')
input.setAttribute('img', "https://devsprouthosting.com/images/chicken.jpg")


