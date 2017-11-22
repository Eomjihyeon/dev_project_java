

/*
var John = {
    name :'John',
    birthYear : 1990,
    job : 'student'

    }


var Jane ={
    name :'Jane',
    birthYear : 2000,
    job : 'teacher'
   }

var Person = function (name,birthYear,job,) {
    this.name = name;
    this.birthYear = birthYear;
    this.job=job;
}

var Mark = new Person("Mark", 2010, 'doctor'); //person이 객체 밑에는 인스턴스를 배열로 함

var arr = [];
arr.push(John);
arr.push(Jane);
arr.push(Mark);

//console.log(arr[2].name);
*/

var year = 2017;
function display(birth) {
    alert ((year-birth)+"살입니다.");
}

var Register=function (name,birthYear,job,address,postcode,date) {
    this.name=name;
    this.birthYear=birthYear;
    this.job=job;
    this.address=address;
    this.postcode=postcode;
    this.date=date;

}


var registerArr=[];
var now = new Date();
registerArr.push(new Register("Park","2000","doctor","서울","101",now) );

var now2 = new Date();
registerArr.push(new Register("Marry","1990","designer","부산","102",now2) );

var now3 = new Date();
registerArr.push(new Register("Peter","2010","teacher","수원","103",now3) );

var now4 = new Date();
registerArr.push(new Register("Jane","1995","student","전주","104",now4) );

var now5 = new Date();
registerArr.push(new Register("Park","2011","programmer","경주","105",now5) );

var jobs= ["doctor","designer","teacher","student","programmer"];


var text ="";
text += "<h1>게시판</h1>"

text +="<table border='1'>";
text += "   <tr>" ; //th는 head
text += "       <th>순위</th>";
text += "       <th>이름</th>";
text += "       <th>생년</th>";
text += "       <th>직업</th>";
text += "       <th>사는곳</th>";
text += "       <th>우편번호</th>";
text += "       <th>가입날짜</th>";
text += "       <th>가입시간</th>";
text +=     "</tr>";

for(var i=0; i< registerArr.length; i++){//최대길이, 늘어날때마다..하니까 length를써야된다
  text +="<tr>";
  text +="  <th>"+(registerArr.length-i)+"</td>";
  text +="  <td>"+registerArr[i].name+"</td>"; //행열중에서name만 불러온다.
  text +="  <td><button onclick=\"display("+registerArr[i].birthYear+")\">"+registerArr[i].birthYear+"</button></td>"; //더해줘야되네

  text +="  <td>";
  text +=" <select>";
        for(var j=0; j < jobs.length; j++) {
            if(registerArr[i].job == jobs[j]) {
  text +="       <option selected>"+jobs[j]+"</option>";
            } else {
  text +="        <option>"+jobs[j]+"</option>";
            }

        }
  text +="      </select>";
  text +=      "</td>";

  text +="  <td>"+registerArr[i].address+"</td>";
  text +="  <td><input type=\'text\' value=\'"+registerArr[i].postcode+"\'></td>";

  var day = registerArr[i].date; //date를 day에 넣어주는 대입 그걸 day로 만들어줌
  text +="  <td>"+day.getFullYear()+"-"+(day.getMonth()+1)+"-"+day.getDate()+"</td>";//먼스가 0부터시작하기때문에
  text +="  <td>"+day.getHours()+":"+day.getMinutes()+":"+day.getSeconds()+"</td>";
  text +="</tr>";


}
text +="</table>";
document.write(text);

