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

// const btn = document.querySelector('#v2');

// btn.onclick = function(){
//     console.log("you clicked me")
// }


// function scream(){
//     console.log("fadsfasd")
// }

// btn.onmouseenter = scream;

// document.querySelector('h1').onclick = () => {
//     alert('you clicked the h1! ')
// }

// const btn3 = document.querySelector('#v2');
// btn3.addEventListener('click', function(){
//     alert('you clicked the h1! ')
// })

// const tasButton = document.querySelector('#tas');

// tasButton.addEventListener('click', twist, {once: true});

// const btn1 = document.querySelector('#hello')
// const btn2 = document.querySelector('#goodbye')

// function hello(){
//     console.log("hello")
// }

// function goodbye(){
//     console.log("goodbye")
// }

// btn1.addEventListener('click', hello)
// btn2.addEventListener('click', goodbye)

const button = document.querySelector('button');
button.addEventListener('click', function(){
    document.body.style.backgroundColor = 'olive';
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r},${g},${b})`;
})


