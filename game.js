
var scores,activePlayer,roundScore;
scores=[0,0];
activePlayer=0;
roundScore=0;

document.getElementById('score0').textContent='0';
document.getElementById('score1').textContent='0';
document.getElementById('current0').textContent=7;
document.getElementById('current1').textContent=4;






function playGame(){
    let dice=Math.floor(Math.random()*6)+1;
const firsDiceImage='image/dice' + dice + '.png';
let imge=document.querySelectorAll('img')[0];
imge.setAttribute('src',firsDiceImage);
if(dice !== 1)
{
roundScore +=dice;
document.getElementById('current' + activePlayer).textContent=roundScore;
}else{
    activePlayer ===0 ? activePlayer = 1: activePlayer = 0;
    roundScore = 0;
    document.getElementById('current0').textContent=0;
document.getElementById('current1').textContent=0;


}

}
function hold(){
    // add current score
scores[activePlayer] += roundScore;





    // update UI
    document.getElementById('score' + activePlayer).textContent=scores[activePlayer];



    //check if the player won
    if(scores[activePlayer] >= 40)
    {
        document.getElementById('player_' + activePlayer).textContent='WINNER !';
      
    }
    // next plYER
    activePlayer ===0 ? activePlayer = 1: activePlayer = 0;
    roundScore = 0;
    document.getElementById('current0').textContent=0;
document.getElementById('current1').textContent=0;

}
function newGame(){

    scores=[0,0];
    activePlayer=0;
    roundScore=0;
    document.getElementById('score0').textContent='0';
    document.getElementById('score1').textContent='0';
    document.getElementById('current0').textContent=0;
    document.getElementById('current1').textContent=0;
    document.getElementById('player_0').textContent='player1';
    document.getElementById('player_1').textContent='player2';
}


