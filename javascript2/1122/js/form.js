function email_check( email ) {
    var regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return (email != '' && email != 'undefined' && regex.test(email));

}

function check() {
   // alert('check');
   //var name= document.frm.name.value;
   var name = document.getElementById('name').value;
   var name_error = document.getElementById('name_error').value; //빨간색으로 이름뜨게나온은것
    //alert(name);
    //console.log(name);
   //var id = document.frm.id.value;
   var id = document.getElementById('id').value; //아이디가 있는 경우엔 겟엘리먼트쓰기
   var password = document.frm.password.value;
   var password2 =document.frm.password2.value;
   //var job = document.frm.job.selectedIndex;//값을 갖고옴  위에서부터 순서가있는거. 0일때 아무것도없을때
   var job =document.frm.job.value; // form안에서 들어가서, job을 갖고오는것 아이디를 안넣고싶을때는 이런 경로를
   var gender=document.frm.gender.value;
   var email =document.getElementById("email").value;
   var languageCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
   var englishCheck = /^[A-Za-z0-9+]*$/;



function addFocusName() {
var param =document.getElementById('name').value;
if(param =="") {
    document.getElementById("name_error").textContent="이름을 입력하세요";
    }
}

function addBlurName() {
var param = document.getElementById('name').value;
if(param !== "") {
    document.getElementById("name_error").textContent="";
    }
}

   if(name=="") {
        alert("이름써");
        document.frm.name.focus();//이름으로똿
        document.getElementById('name').addEventListener('focus',addFocusName);  //회원가입눌렀을때 이름을 안쓰면 빨간색으로 이름안썼다고 머라고하는거임 focums때 addFocusNAME을 실행 FOCUS가 커서같은 역활이고 블러가 없어지는거 빨간줄...같은거
        document.getElementById('name').addEventListener('blur',addBlurName);
       // document.getElementById("name_error").textContent="이름을 입력하세요";
        return false;
    }
    if(!languageCheck.test(name)) {
        alert("한글만 입력해야합니다.");
        document.frm.name.focus();
        return;
}
    if(!email_check(email)) {
        alert('이메일 형식이 잘못됬습니다')
        document.frm.email.focus();//이메일의 이름 값 value값을 갖고오
        return false;
    }
  //document.getElementById("name_error").style.display='none';

    if(id=="") {
       alert("id써");
       document.frm.id.focus();
        return false;
    }

    if(!englishCheck.test(id)) {
        alert('아이디는 영문과 숫자만 입력합니다.');
        document.frm.id.focus();
        return false;
        }

    if(password=="") {
       alert("password");
       document.frm.password.focus();
       return false; //check함수를 리턴함 서브밋 버튼을 눌렀을때
    }
    if(password2=="") {
       alert("password 확인해");
       document.frm.password2.focus();
       return false;
    }

    console.log(password+"-"+password2); //password1과 2가 같아야된다 같지 않으면 을 설정해줘야된다
    if(password!==password2) {
        alert("같지않다");
       document.frm.password2.value=""; //같지않으면 빈공간으로 초기화되는것
       document.frm.password2.focus();
       return false;
        }

    if(job == "") {
        alert("직업을 선택해주세요");
        document.frm.job.focus();
        return false;
    }

     if(gender == "") {
        alert("성별이 선택안됬어");
        document.frm.value.focus();
        return false;
    }


    var chk = confirm('입력도니 데이터를 서버로 전송해');
    if(chk) {
        console.log("name="+name+", id="+id);
        document.frm.submit(); //확인할때만 넘어감
    } else {
        return false;
    }
    document.frm.action="server_sand.py";
    document.frm.submit();
}
