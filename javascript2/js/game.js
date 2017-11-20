var dice = Math.floor(Math.random()*6)+1;
document.querySelector('#score-0').textContent = dice;
//document.querySelector('#current-0').textContent =dice; 숫자를래덤 바로값을넣음
//document.querySelector('#current-0').innerHTML = '<em>'+dice;"</em>"
//document.querySelector('.dice').style.display='none';
document.querySelector('.dice').src='./img/dice-1.png';