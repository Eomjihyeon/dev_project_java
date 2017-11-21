//var dice = Math.floor(Math.random()*6)+1;
//document.querySelector('#score-0').textContent = dice; //active가 dice 주사위
//document.querySelector('#current-0').textContent =dice; 숫자를래덤 바로값을넣음
//document.querySelector('#current-0').innerHTML = '<em>'+dice;"</em>"
//document.querySelector('.dice').style.display='none';
//document.querySelector('.dice').src='./img/dice-1.png';

var dice ;
var roundScore =0;
var activePlayer =0;//플레이어를 구분하는 변수
var scores = [0,0];//배열
var gamePlaying ;

//초기화 새로고침같은 사 ㅇ태
function init() {
    roundScore =0;
    activePlayer =0;//플레이어를 구분하는 변수
    scores = [0,0];//배열
    gamePlaying=true;
 document.querySelector('.dice').style.display ='none';//시작할때는 안보이게
 //시작할 때 모두 0으로 바꾸기 시작할때 0으로 되게
 document.getElementById('score-0').textContent='0';
 document.getElementById('score-1').textContent='0';
 document.getElementById('current-0').textContent='0';
 document.getElementById('current-1').textContent='0';


//NEW 게임시리즈
 //승리한 winner 텍스트 및 클래스 변경
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    //active 클래스삭제
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    //처음 player 1에게 active클랴스 추가
    document.querySelector('.player-0-panel').classList.add('active');
 }



 init();


var btn_roll = function() {
    //alert('roll 버튼 클릭');
    if(gamePlaying) {  //winner가 되면 주사위를 굴러도 진행이 안되게 게임플레이를 false로 만들어if로 진행안되게 만듬 //트루인경우

    //1. f랜덤한 숫자 나오게하기
    dice=Math.floor(Math.random()*6)+1;
    console.log(dice);

    //2. 주사위 그림 보여주기
    document.querySelector('.dice').style.display ='block';
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src='./img/dice-'+dice+'.png';
    //document.querySelector('#score-0').textContent =dice; //play1에 숫자 바뀌게 0,1,,

    //3.주사위가 1이 나오면 플레이어가 바뀐다.
    if(dice !== 1) {
        //add score
       roundScore += dice;
       document.querySelector('#current-'+activePlayer).textContent =roundScore; //값을 더해줘서 누른만큼됨
        } else {
        //next player
        nextPlayer();

       }
        }
   };

document.querySelector('.btn-roll').addEventListener('click',btn_roll);
function btn_hold() {
  //  alert('hold');
  //1. current 값을 scores에 더함
  scores[activePlayer] += roundScore;

  //2.화면변경 커런트값 고정 현재값하고 스코어값 진행되는 값 hold를 누르면 더해줌
  document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];

//final스코어

var input =document.querySelector('.final-score').value;
console.log("input="+input);
    var winningScore; //마지막 파이널스코어를 정하는것  3번엔에 winningscore값 같이 해야함
   if(input) {
        winningScore=input;
    } else {
        winningScore =20;
    }

  //3.100점이 넘음면 ..50
  if(scores[activePlayer] >= winningScore) {
    document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display='none'; //이기면 주사위를 없애준

    //이겼을때 클래스 변경
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
       // document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying = false; //홀드를 눌렀을때 롤을 눌러도 진행안되게 만드는것 더이상 롤다이스가 안되게 flase플스인경우!!!
    } else {
        nextPlayer();
  }

  //4.다음플레이어
 // nextPlayer(); //hold  다른플레이러로~~시킬때 옆으로가는거지
}
//홀드
document.querySelector('.btn-hold').addEventListener('click',btn_hold);

function nextPlayer() {
    if(activePlayer ==0) {
        activePlayer =1;
    } else{
        activePlayer =0;
    }
    roundScore=0;
    document.getElementById('current-0').textContent =0;
    document.getElementById('current-0').textContent =0;
    //플레이어 해당하는 패널바꾸기
   // document.querySelector('.player-0-panel').classList.remove('active');
   // document.querySelector('.player-1-panel').classList.add('active');
       document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active'); //toggle개념
   //플렝리어 바뀔때 주사위 안보이기 시작하고 끝나는 포인트를 찾아냄
     document.querySelector('.dice').style.display ='none';
}
function btn_new() {
       // alert('새로운 개임');
       init();
    }

document.querySelector('.btn-new').addEventListener('click', btn_new);

