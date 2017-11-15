

var name ='John';
var birth =2000;
function getAge(birthAge) {
    var num = 2017-birthAge;
    return num;
}

var person = {
    name : 'John',
    birth : 2000,
    getAge : function (birthAge) {
        var num = 2017-this.birth;
        return num;
    }
}


console.log(person.getAge());
person.birth = 2010;
console.log(person.getAge());
person.name = 'Mike';
console.log(person);


/*
ver person2 = new Object();
person2.name = 'Jane';

console.log(person2.name);
console.log(person2['name']);*/

//객체 이름을 building:
// 나라 : nation
// 도시 : city
//건축연도 :birth
//건완공기간 : period함수 (현재-건축년도)
 //건축자 : maker "John","Jane", "Mike"


var building = {
    nation :  "korea",
    city : 'seoul',
    birth : 1900,
    period : function() {
        var num = 2017 - this.birth;
        return num ;
     },
        maker : ["John","Jane","Mike"]
}

//객체 두번째 방법
var building2 = new Object();
building2.nation ="Korea";


building.nation="China";
building.city ="Beijing";
building.birth = 2000;
building.maker[0] = "John2";
building.maker[1] = "Jane2";


//setTimeout( function() { alert("2초후에 표시됩니다"); }, 2000); //alert  ,팝업창 setTimeout
//setTimeout( function() { window.open("https://www.naver.com","width=500, height=500, resizable=yes"); }, 2000); //alert  ,팝업창 setTimeout
/*var i=0;
setInterval (function () {
 console.log("[" +i+"] 번째"); ,i++;
}, 2000);*/

var i=0;
setInterval (function () {
var num =Math.random();
  console.log(Math.round (( num * 10) +1));//round반올림//무적권올림 ceil
}, 1000);
//Math.round();
//Math.ceil(); 올림
//Math.floor(); 내림

var date = new Date();
console.log(date.getYear()+1900);
console.log(date.getFullYear()+"년");
console.log(date.getMonth()+"월");
console.log(date.getDate() +"일");
console.log(date.getDay() + "요일");
console.log(date.getHours() + "시");
console.log(date.getMinutes() + "분");
console.log(date.getMilliseconds() + "초");