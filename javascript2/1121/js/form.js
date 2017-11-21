function check() {
   // alert('check');
   //var name= document.frm.name.value;
   var name = document.getElementById('name').value;
    //alert(name);
    //console.log(name);
   //var id = document.frm.id.value;
   var id = document.getElementById('id').value;
   var password = document.frm.password.value;
   var password2 =document.frm.password2.value;
   if(name=="") {
        alert("이름써");
        document.frm.name.focus();//이름으로똿
        document.getElementById("name_error").textContent="이름을 입력하세요";

        return false;
    }
  document.getElementById("name_error").style.display='none';

    if(id=="") {
       alert("id써");
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
