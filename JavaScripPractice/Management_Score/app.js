const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1display = document.querySelector('#p1display');
const p2display = document.querySelector('#p2display');
const Playto = document.querySelector('#playto');
const reset = document.querySelector('#reset');

let p1Score = 0;
let p2Score = 0;
let Allreset = 0;
let WinScore = 3;
let isGameOver = false;

//isGameOver이 false면 게속 실행, p1Score가 WinScore와 같아진다면 isGameOver을 true로 바꿔 로직종료

p1Button.addEventListener('click', function(){
    if(!isGameOver){
        p1Score += 1;
        if(p1Score === WinScore){
            isGameOver = true;
            p1display.classList.add('has-text-success');
            p2display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1display.textContent = p1Score;
    }
    
})

p2Button.addEventListener('click', function(){
    if(!isGameOver){
        p2Score += 1;
        if(p2Score === WinScore){
            isGameOver = true;
            p2display.classList.add('has-text-success');
            p1display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2display.textContent = p2Score;
    }
})

Playto.addEventListener('change', function(){
    playto = parseInt(this.value);
    WinScore = playto;
    resetButton();
})

reset.addEventListener('click', resetButton)

function resetButton(){
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1display.textContent = Allreset;
    p2display.textContent = Allreset;
    p1display.classList.remove('has-text-success','has-text-danger');
    p2display.classList.remove('has-text-success','has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}