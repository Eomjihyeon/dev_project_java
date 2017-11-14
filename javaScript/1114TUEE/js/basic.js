
function first(par) {
console.log('test');
}

var first2 = function (par) {
console.log('test')
} //위와 아래가 같은 것 아래가 많이 쓰임


var names = ['John','Jane','Mark'];
var numbers = [10,11,12,13,14,15,16,17,18,19]
var testArr = [1, 'John', true,names];


console.log(name[2]);
names.push("Log");

//console.log(name[3]);
//console.log(names);
//names.pop();
//var popStr = names.pop() //마지막 값을 꺼내서 확인(중간에 위치)
//console.log(popStr);
//names.push("Log2");//log string
//console.log(name[4]);
//names.push("Log3")
//names.push("Log4")

console.log(names[names.length-1]); //마지막값하나

console.log(names.indexOf('Jane'));
console.log(names.indexOf('Log4'));
console.log("length=" + names.length);
for(var i=0; i< names.length; i++) {
console.log(names[i]);
}

console.log("length=" + numbers.length);
for(var i=2; i< numbers.length; i++) { //length가 길이
console.log(numbers[i]);
}

console.log("length=" + numbers.length);
for(var i=2; i< numbers[8]; i++) {// 8번째까지 1씩증가
console.log(numbers[i]);
}

//초기값
console.log("length=" + numbers.length);
for(var i=0; i < numbers.length; i++) {
    if( i<3 || i> 5 ) {

     if(numbers[i]==17) {
    console.log("17입니다");
     } else {
       console.log(numbers[i]);
     } else {
     console.log( "----------------" +numbers[i] + "------------" )
     }
}

