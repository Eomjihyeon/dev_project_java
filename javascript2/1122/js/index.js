function button(sitename)  {
    var site;
    if(sitename === 'daum')  {
        site = '다음';
    } else if(sitename ==='naver') {
        site = '네이버';
    }
    var check = confirm(site+'이동');

    if((sitename === 'daum' ) && check ){
           window.open("http://daum.net");
    } else if ((sitename === 'naver' )  && check ) {
           window.open("http://naver.com");

    }
}



function btn_mouseover() {
	alert("마우스가 올라갔습니다.");
}


