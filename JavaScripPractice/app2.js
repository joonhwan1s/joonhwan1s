const ProductInput = document.querySelector('#tweetFromID');
const NumberInput = document.querySelector('#qty');

ProductInput.addEventListener('submit', function(e){
    e.preventDefault
    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    // console.log(usernameInput.value, tweetInput.value);
    console.log("SUBMIT!");
})




// const tweetForm = document.querySelector('#tweetForm');
// const tweetsContainer = document.querySelector('tweets');  
// tweetForm.addEventListener('submit', function(e){
//     e.preventDefault();

//     const usernameinput = tweetForm.elements.username;
//     const tweeinput = tweetForm.elements.tweet;
//     addTweet(username.value, tweetinput.value)
//     usernameinput.value = '';
//     tweetinput.value = '';
// })

// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(username);
//     newTweet.append(btag);
//     newTweet.append(`- ${tweet}`);
//     tweetsContainer.append(newTweet);
// }
