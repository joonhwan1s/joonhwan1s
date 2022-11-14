
const tweetForm = document.querySelector('#tweetForm');
const list = document.querySelector('#list');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.product;
    const qtyInput = tweetForm.elements.qty;

    usernameInput.value = '';
    console.log(usernameInput.value);
    qtyInput.value = '';


});


const addTweet = (usernameInput, qtyInput) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');

    

}