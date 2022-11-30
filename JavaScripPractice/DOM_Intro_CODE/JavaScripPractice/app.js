
// const tweetForm = document.querySelector('#tweetForm');
// const list = document.querySelector('#list');
// tweetForm.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const usernameInput = tweetForm.elements.product;
//     const qtyInput = tweetForm.elements.qty;
//     addTweet(usernameInput.value, qtyInput.value) //이름과 넘버를 넣는다.
//     // console.log(usernameInput.value);
//     usernameInput.value = '';
//     qtyInput.value = '';
    


// });

// const addTweet = (usernameInput2, qtyInput2) => {
//     const newTweet = document.createElement('li'); 
//     list.appendChild(newTweet);
//     newTweet.innerText = `${qtyInput2} ${usernameInput2}`;
// }



// const addTweet = (usernameInput2, qtyInput2) => {
//     const newTweet = document.createElement('li'); 
//     const bTag = document.createElement('b');
//     // const bTag2 = document.createElement('b');
//     bTag.append(qtyInput2); //생성한 btag에 product 삽입
//     // bTag2.append(usernameInput2);
//     newTweet.append(bTag);//삽입된 상태로 btag를 li내에 삽입
//     newTweet.append(` ${usernameInput2}`)//바로 밑에 num의 인자값 삽입
//     list.append(newTweet);//완성된 li를 list내에다가 삽입
// }


// const input = document.querySelector('input');
// const h1 = document.querySelector('h1');

// input.addEventListener('input', function(e) {
//     h1.innerText = input.value; 
// })

// const input = document.querySelector('input')
// const h1 = document.querySelector('h1')
// const dan2 = document.querySelector('h1').innerText


// input.addEventListener('input', function(e){

//     h1.innerText = `Welcome, ${input.value}`;
//     if(!input.value){
//         h1.innerText = dan2
//     }
    
// })


const button = document.querySelector('#changColor');
const container = document.querySelector('#container');

button.addEventListener('click', function(e){
    container.style.backgroundColor = makeRandColor();
    e.stopPropagation();
})

container.addEventListener('click', function() {
    container.classList.toggle('hide');
})


const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    retrun `rgb(${r}, ${g}, ${b})`
}

