const p1 ={
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1display')
}

const p2 ={
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2display')
}


const Playto = document.querySelector('#playto');
const reset = document.querySelector('#reset');
let Allreset = 0;
let WinScore = 3;
let isGameOver = false;

//isGameOver이 false면 게속 실행, p1Score가 WinScore와 같아진다면 isGameOver을 true로 바꿔 로직종료


function updateScores(player, opponent){
    if(!isGameOver){
        player.score += 1;
        if(player.score === WinScore){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}
p1.button.addEventListener('click', function()  {
    updateScores(p1,p2);
})

p2.button.addEventListener('click', function()  {
    updateScores(p2,p1);
})

Playto.addEventListener('change', function()    {
    WinScore = parseInt(this.value);
    
    resetButton();
})

reset.addEventListener('click', resetButton)

function resetButton(){
    isGameOver = false;
    for(let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success','has-text-danger')
        p.button.disabled = false;
    }
}