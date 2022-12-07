const lis = document.querySelector('li');
for(let li of lis){
    li.addEventListener
}

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username) //생성한 btag에 product 삽입
    newTweet.append(bTag);//삽입된 상태로 btag를 li내에 삽입
    newTweet.append(`- ${tweet}`) //바로 밑에 num의 인자값 삽입
    tweetsContainer.append(newTweet); //완성된 li를 list내에다가 삽입
}

