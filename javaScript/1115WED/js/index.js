
/*
var name = "John";
var name2 = 'Janne';
var check = true;
var check2 = false;
var number = 20;

function display() {
console.log("안뇽");
}
var displayCon2 = function() {
console.log("안뇽2");
}
var arr = ["John", "Jane","Mark","Tom"];
var arr2 = new Array("Jahn1","John2", "Mark2","Tom2");
var arr2 = [0,1,2,3,4,5,6,7];
var arr4 = ["john",11,true,arr2,displayCon2];

document.write(arr);
var tag = "<h1>안녕</h1>";
document.write(tag);
*/


/*
var num = 10;  console.log(num);


num = num +1; console.log(num)
num++; console.log(num)
num += 1 ; console.log(num)
num += 3; console.log(num);

for(var i=0; i <10 ; i++) {
console.log(i);
}


for(var i=0; i<10; i++) {
  if(i%2==0){  //i%2로 써서 줄여도 된다
     console.log(i)
     }

}
//2번방법 for(var i=0; i<10; i+=2) {
//          console.log(i);
//}          짝수만 출력하기

var num3 = 10/2;
var num4 = 11%2;
var number = 0;

if(number) {
console.log("number true");
} else {
console. log("number false")
}

var name;
if(name) {
console.log("name true");
} else {
console. log("name false")
}
*/


/*
//1일때는 안녕하세요 5일때는 절반입니다 8일때는 거의 끝나갑니다. 나머지는 숫자
for(var i=0; i<10; i++) {
       if(i==1){
     console.log("안녕하세요");
     } else if(i==5) {
      continue; //for문 안에서 계속 돌기때문에
        console.log("절반입니다");
    } else if(i==8) {
        console.log("거의끝나갑니다");
        // break;
     } else {
        console.log(i+"num");

     }

}
*/

/*
//8보다 작았을때는 실행되지 않고   8부터난 나머지 9,10
for(var i=0; i<10; i++) {
         if(i<8){ //i<=7 7보다 작거나 같다
            continue;
     } else if(i==8) {
        console.log("거의끝나갑니다");
        // break;
         } else {
        console.log(i+"num");

         }
     }

//<=, 작거나 같다 >= 크거나 같다*/


/*
//3보다 크고 7보다 작거나 같으면 "안뇽"출력 나머지는 그대로
for(var i=0; i<10; i++) {
    if(i>3 && i<=7) {
    console.log("안뇽");
    } else {
    console.log(i+"num");
    }
}*/

//false인 경우에 반복문을 빠져나간다. i가 10보다 크거나 같을때 빠져나간다.
/*
var i=0;
while(true) {
    console.log("안녕하세요");
}
*/



/*var i=0;
while(true) {
 i++;//무한루프문
    if (i >= 10) {
        break;
    }
console.log("안녕하세요:["+i+"]");
 }*/

/*
var i=0;
while(i < 10) {

i++;
console.log("안녕하세요:["+i+"]");
 }
while문안에 조건넣기*/


/*//col7번째 개별원소 출력
var col  =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var col1 =[ 11,12,13,14,15,16,17,18,19,20];
var col2 =[ 21,22,23,24,25,26,27,28,29,30];
var col3 =[ 31,32,33,34,35,36,37,38,39,40];
var col4 =[ 41,42,43,44,45,46,47,48,49,50];
var col5 =[ 51,52,53,54,55,56,57,58,59,60];
var col6 =[ 61,62,63,64,65,66,67,68,69,70];
var col7 =[ 71,72,73,74,75,76,77,78,79,70];
var col8 =[ 81,82,83,84,85,86,87,88,89,90];
var col9 =[ 91,92,93,94,95,96,97,98,99,100];


var row = [col,col1,col2,col3,col4,col5,col6,col7,col8,col9];
console.log(col[7]);
console.log(col.length);

for(var i=;0 i< col7.length; i++) {
    console.log(col[i]);
}
col. push(11);*/

/*
var col10 = [];
    for(var i=100; i<=120; i++ ) {
        col10.push(i)
    }
  console.log(col10); //push사용*/

 var col  =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var col1 =[ 11,12,13,14,15,16,17,18,19,20];
var col2 =[ 21,22,23,24,25,26,27,28,29,30];
var col3 =[ 31,32,33,34,35,36,37,38,39,40];
var col4 =[ 41,42,43,44,45,46,47,48,49,50];
var col5 =[ 51,52,53,54,55,56,57,58,59,60];
var col6 =[ 61,62,63,64,65,66,67,68,69,70];
var col7 =[ 71,72,73,74,75,76,77,78,79,70];
var col8 =[ 81,82,83,84,85,86,87,88,89,90];
var col9 =[ 91,92,93,94,95,96,97,98,99,100];


var row = [col,col1,col2,col3,col4,col5,col6,col7,col8,col9];

  console.log(row[0][0]);
  console.log(row[1][0]);
  console.log(row[8][1]); //82
//이중포문, 다차워배열
  for(var i=0; i< row.length; i++) {
  console.log(row[i]);
    for(var n =0; n <row[i].length; n++ )  { //conlon길이
   console.log(row[i][n]);
    }
  }

//1부터 100까지

for (var i = 0; i < row.length; i++) {
      console.log(row[i]);
      for (var j = 0; j < row[i].length; j++) {
        console.log(row[i][j] + " ");
      }
    }


   var arr =[ ];
   for(var i=0; i <10; i++) {
        arr[i] =[];

        for(var j=0; j<10; j++){
            var num =i*10+ j+1;//1부터 10까지(숫자는 안에 0부터들어가야된다)
            arr[i][j] =num;
            console.log(arr[i][j]) ;
        }
   }

   for(var i=0; i< arr[i].length; i++) {
        for(var j=0; j< arr[i].length; j++) {
     console.log(arr[i][j]);
     }
  }