//맨 처음 무엇을 입력할건지 먼저 뜨고 그 다음 new list delete quit 기능들을 넣는다.

// let chicken = {};
// let i = 0;

// let First = prompt('enter new work');
// while(1){
//     if(First == 'new'){

//         NewFirst = prompt('Add A Todo');

//         chicken.push(NewFirst);
//         console.log(chicken);
//     }
//     if(NewFirst == 'quit'){
//         break;
//     }
// }
let i = 0;

let far = {};

while(true){
    let fire = prompt("hi");    
    let flag = 0;
    if(fire == 'quit'){
        break;
    }
    else if(fire == 'new'){
        console.log('go new logic')   
        while(true){
            let fire2 = prompt("Enter you logic");
            far[i] = fire2;
            console.log(far[i]);
            i++;
            if(fire2 == 'list'){
                flag = 1;
            }else if(fire2 == 'delete'){
                flag = 2;
            }
            if(flag == 1 || flag == 2){
                break;
            }
        }
        if(flag == 1){
            for(let num=0;num<far.length;num++){
                console.log(far[num])
            }
        }
        // }else if(flag == 2){
        //     far.splice()
        // }
    }
    // }else if(fire == 'list'){
    //     for(let num=0; num<far.length; num++){
    //     console.log(far[num])
    //     }
    // }else if(fire == 'delete'){        
    //     far.splice()
    // }
}




// if(First == list){
//     while(First==quit) {
//         let First3 = prompt('ENTER YOUR LIST');
//         let flag = 1;
//         let First2 = First3;
//             chicken[i] = First2;
//             console.log(chicken[i])
//         if(chicken[i] == 'quit'){
//             flag = 0;
//         }
//         if(flag = 0){
//             break;
//     }
//         i++;
        
//     }
// }






// const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// // WRITE YOUR LOOP BELOW THIS LINE:

// for(let num of numbers){
//     console.log(num*num)
// }



// let scores = [1,70,100, 2500, 9, -12, 0, 34]


// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:

// for(let num = 0; num <= people.length-1; num++){
//     console.log(people[num].toUpperCase());
// }
// const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// // YOUR CODE GOES BELOW THIS LINE:

// planets.shift()

// planets.push("Saturn")

// planets.unshift("Mercury")

// const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix']; //DON'T TOUCH THIS LINE!

// // YOUR CODE BELOW HERE:

// leaderboard[1] = 'Luna'

// leaderboard[3] = 'Draco'

// const password = prompt("please enter your PW")

// if(password.length >= 6){
//     console.log("logn")
// }else{
//     console.log("no")
// }



// console.log("HELLO FROM OUR FIRST IS FILE!!!")
// let total = 1 + 3;
// console.log("GOOD BYE")


// Math.random()
// if(1){

// }

// const enter = prompt('Fuck you')

// const mystery = 'P7pppp'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE



// // LEAVE THIS CODE ALONE! (pretty please)
// if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
//     console.log("YOU GOT IT!!!");
// }

