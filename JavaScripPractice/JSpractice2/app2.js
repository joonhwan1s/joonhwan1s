// const req = new XMLHttpRequest();

// req.onload = function(){
//     console.log("IT LOADED");
//     const data = JSON.parse(this.responseText);
//     console.log(data.name, data.height);
// }

// req.onerror = function(){
//     console.log("ERROR");
//     console.log(this);
// }

// req.open("GET", "https://swapi.py4e.com/api/people/1/");
// req.send();

// fetch("https://swapi.py4e.com/api/people/1/")
//     .then((res) => {
//         console.log("RESOLVED!", res);
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data);
//         return fetch("https://swapi.py4e.com/api/people/2/");
//     })
//     .then(res =>{
//         console.log("SECOND REQUSET RESOLVE");
//         return res.json();

//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log("ERROR", e);
//     })

// const loadStartWarsPeople = async () => {
// try{
//    const res = await fetch("https://swapi.py4e.com/api/people/1/");
//    const data = await res.json();
//    console.log(data);
//    const res2 = await fetch("https://swapi.py4e.com/api/people/2/");
//    const data2 = await res.json();
//    console.log(data2);
// } catch (e) {
//     console.log("ERROR", e);
// }
// };

// loadStartWarsPeople();

// axios.get("https://swapi.py4e.com/api/people/1/").then(res =>{
//     console.log("RESPONSE: ", res)
// })
// .catch(e => {
//     console.log("ERROR! ", e);
// })

// const getStartWarsPerson = async () =>{
//  try{
//     const res = await axios.get(`https://swapi.py4e.com/api/people/${id}/`);
//     console.log(res.data) 
//  } catch(e){
//     console.log("ERROR", e);
//  }
// };

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');


const addNewJoke = async () =>{
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}
const getDadJoke = async () => {
    try{
    const config = { headers: {Accept: 'application/json' }}//헤더 지정, 요청할 때 객체를 전달, 이것을 통해 API가 JSON으로 응답하도록 설정
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;

    }catch (e) {
        return "NO JOKES AVAILABLE! SORRY!"
    }
    
}

button.addEventListener('click', addNewJoke)