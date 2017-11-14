
/*function calculateAge(birth){
var age =2017-birth;
return age;
}
var ageJohn =calculateAge(1990);
//console.log(ageJohn);
*/
/*
function sum(num1,num2){
var s = num1 + num2;
return s;
}

function minus(num1,num2) {
return  num1 - num2;

}

function mul (num1,num2) {
return num1 * num2;
}

function calculate(num1,num2,opt) {
var sum2;
    if(opt=="+") {
      sum2 = sum(num1, num2);
    } else if(opt == "-") {
     sum2 = minus(num1, num2);
    } else if(opt == "*") {
    sum2 = mul(num1,num2);
    }
    return sum2;
}
var num1 =2;
var num2 = 5;
var operator = "+"; // "-", "*";

//document.write("("+num1+"+"+num2+")="+sum(2,5));
//document.write("("+num1+"-"+num2+")="+minus(2,5));
//document.write("("+num1+"*"+num2+")="+mul(2,5));
document.write("("+num1+operator+num2+")="+calculate(num1,num2,operator));
*/


//은퇴자 이름 남은나이 은퇴년도 남은년도
function checkRetirement(age,workPerioid) { //괄호안에써야되,최종 retirement를쓰기!!!!
    var remain = workPerioid - age; //65는 은퇴나이 betwenn이해 //출생년도-은퇴년도
    return remain;
    }

  function  yearsRetirement(birth,year,period) {
  var age = year - birth;
  var remain = checkRetirement(age,period);
  return remain;
  }

function displayRetire(remain){
    if(remain == 0) {
        document.write( "올해 은퇴합니다");//60년이됬으니까
    } else if(remain >0 ) {//60년보다 오버됬으니까
        document.write("은퇴가" + remain + "년 남았습니다");
     } else {
     document.write("이미 은퇴");
     }
}
    var currentYear =2017
    var remain = yearsRetirement(2007, currentYear,20);//변화시키려고 새로변수를 포함시켜주는
   // document.write("현재는" +currentYear+"년입니다");
   // displayRetire(remain);

    var name ="John";
    function third() {
    var c ="Hey";
    console.log("third Hey")
    }

    function second() {
    var b ="hi";
    third();
    console.log("second Hi")
    }

    function first() {
    var a ="Hello";
    second();
     console.log("first Hello")
    }

first();
    //checkRetirement(name,age,year,retireAge);//변하는곳 , retirement쓰기!!!
  //  document.write("현재는" +currentYear+ "년 입니다");
