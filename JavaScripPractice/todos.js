// const prices = [9,1,19,49,30];

// prices.reduce((total, price) => totla+price)




// function allEvens(Enter){
//     let result = Enter.every(Enter => Enter%2 == 0)
//         console.log(result);
//         return result;
// } 

// exams.every(score => score >= 74) // 모두 참인지 구별 some은 특정개수가 참이 있는지 구별

// function validUserNames(usernames){
//     let result = usernames.filter(usernames => usernames.length <10)
//         return result;
// }

// function validUserNames(usernames){
//     return usernames.filter(function(usernames){
//          if(usernames.length <10){
//             return usernames;
//          };
//      })
//  }
//배열이 들어가는 부분
// function validUserNames(usernames){
//    let filternames = usernames.filter(function(usernames){
//         return usernames.length <10;
//     })
//     return console.log(filternames);
// }

// console.log(validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']))


// const goodmovie = movies.filter(m => m.score > 80).map(m => m.title);



// const newMovie = movies.map(movie => (
//     `${movie.title}`
// ))


// const greet = great => {
//     // great = 'Hey ' + great + '!';
//     return `Hey ${great}!`;
// }


// const square = num => {
//     return num*num;
// }


//  const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

//  // Write your code here
 
//  const firstNames = fullNames.map(function(firstNmae){
    
//     return firstNmae.first;
//  })





// const hen = {
//     name: 'Helen',
//     eggCount: 0,
//     layAnEgg: function(EGG){
//         EGG = 'EGG';
//             this.eggCount++;
//         console.log(this.eggCount);
//         console.log(EGG);
//         return EGG
//     }
//      meow() {
//          console.log(`${this.color} say Mewer`);
//      }
// }

// hen.name // "Helen"
// hen.eggCount // 0
// hen.layAnEgg() // "EGG"
// hen.layAnEgg() // "EGG"
// hen.eggCount // 2


// const square = {
//     area: function(num){
//         return num*num;
//     },
//     perimeter: function(num){
//         return num*4;
//     }
// }

// square.area(10) //100
// square.perimeter(10) //40

// const add = function (x,y){
//     return x+y;
// }




// function returnDay(params){
//     switch(params){
//       case 0 : 
//         params = null;
//         break;
//       case 1 :
//         params = "Monday"      
//         break;
//       case 2 :
//         params = "Tuesday"      
//         break;
//       case 3 :
//         params = "Wednesday"      
//         break;
//       case 4 :
//         params = "Thursday"      
//         break;
//       case 5 :
//         params = "Friday"      
//         break;
//       case 6 :
//         params = "Saturday"      
//         break;
//       case 7 :
//         params = "Sunday"
//         break;
//         default:
//             return null;      
//     }

//     return params;
// }


// function capitalize(params){//스트링의 첫번째 글자는 대문자로 처리하고 나머지는 소문자
//     let trans1 = (params.substring(0,1)).toUpperCase()
//     let trans2 =  params.substring(1,params.length)
//     let trans3 = trans1 + trans2
//     // console.log((params.substring(0,1)).toUpperCase() + params.substring(1,params.length));
//     // params.substring(1,params.length);
//     console.log(trans1 + trans2)

//     return trans3

// }



// function lastElement(params){   
    
//     if(params.length === 0){
//         return null;
//     }else{
//         return params[params.length-1];
//     }

// }
// let asd = {}
// console.log(asd);

// lastElement([3,5,7]); //7

// lastElement([1]) //1
// lastElement([]) //null


// function add(x, y){
//     if(typeof x !== 'number' || typeof y !== 'number'){
//         return false;
//     }
//     return x+y;
// }



// function isSnakeEyes(FirstNumber, SecondNumber){
//     if(FirstNumber == 1 && SecondNumber == 1){
//         console.log("Snake Eyes!");
//     }else{
//         console.log("Not Snake Eyes!");
//     } 
// }

// let dice = Math.floor(Math.random() * 6) + 1;
// isSnakeEyes(dice, dice)


// let input = prompt("what would you li")
// const todos = ['Collet', 'clea'];
// while(input != 'quit' && input !== 'q'){
//     if(input === 'list'){
//         console.log('*******************')
//         for(let i =0; i<todos.length; i++){
//             console.log(`이름은 ${i} : ${todos[i]}` );
//         }
//         console.log('*******************')
//     } else if(input == 'new'){
//         const newTodo = prompt('OK, what do yuo wnat');
//         todos.push(newTodo);

//     }else if(input == 'delete'){
//         const index = parseInt(prompt('OK'));
//         if(!Number.isNaN(index)){
//             const deleted = todos.splice(index, 1);
//             console.log(`${deleted}`);
//         }else{ 
//             console.log("Unknown index");
//         }
//     }
//     input = prompt("what would you li")
// }

// document.querySelector('#container').style.textAlign = "center"

// document.querySelector('img').style.width = "150px";
// document.querySelector('img').style.borderRadius = "50%"


// const colink = document.querySelector('img')

// for(let link of colink){
//     colink.style.background = #BDBDBD
//     colink.width
    
// }

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// const alline = document.querySelectorAll("span")


// for(let i = 0; i<alline.length; i++){
//     document.querySelectorAll("span")[i].style.color = `${colors[i]}`
// }

// const li1 = document.querySelectorAll('li')

// for(let line of li1){
//     line.classList.toggle('highlight');
// }

// const button = document.querySelector('button');
// const h1 = document.querySelector('h1');


// button.addEventListener('click',function(){
//     const newColor = makeRandColor()
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;
// })

// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     retrun `rgb(${r}, ${g}, ${b})`
// }

// const buttons = document.querySelectorAll('button');

// for(let button of buttons){
//     button.addEventListener('click', function(){
//         button.style.backgroundColor = makeRandColor()
//     })
// }


// const h1s = document.querySelectorAll('h1');
// for(let h1 of h1s){
//     h1.addEventListener('click', colorize)
// }

// function colorize(){
//     this.style.backgroundColor = makeRandColor();
//     this.style.color = makeRandColor();
// }

// const input = document.querySelector('input');
// input.addEventListener('keydown', function(){
//     console.log("KEYDOWN")
// })

// const input = document.querySelector('input');
// input.addEventListener('keydown', function(e){
//     console.log(e.key)
//     console.log(e.code)
// })

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

const ProductInput = document.querySelector('#product');
const NumberInput = document.querySelector('#qty');

ProductInput.addEventListener('submit', function(e){
    e.preventDefault
    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    // console.log(usernameInput.value, tweetInput.value);
    console.log("SUBMIT!");
})

