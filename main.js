window.onscroll = function() {myFunction()};
function myFunction() {
  if (document.documentElement.scrollTop > 100) {
    document.getElementById("header").className = "scroll_event_Add_class";
	const changeTexts = document.querySelectorAll('.changeText');
	for (const change of changeTexts)
		change.style.color = "#000";

  } else {
    document.getElementById("header").className = "";
	const changeTexts = document.querySelectorAll('.changeText');
	for (const change of changeTexts)
		change.style.color = "#fff";
  }
}

function SearchOpen(){
		document.getElementById('search').style.display = 'block';	
}

function SearchClose(){
	document.getElementById('search').style.display = 'none';	
}

var account = JSON.parse(localStorage.getItem('account'));
if (account == null) {
	account = [];
	var account = [{
		id:0,
		fullname:'Nguyen Ngoc Kim Cuong',
		address:'Quan 3',
		phone:"0981774921",
		username:"admin1",
		password:"123456",
		level:1
	},{
		id:1,
		fullname:"Huynh Ngoc Man",
		address:"Quan Binh Thanh",
		phone:"0981774921",
		username:"admin2",
		password:"123456",
		level:1
	},{
		id:2,
		fullname:"Nguyen",
		address:"Quan 3",
		phone:"0981774921",
		username:"b",
		password:"b",
		level:0 
	},{
		id:3,
		fullname:"Bao",
		address:"Quan 3",
		phone:"0981774921",
		username:"a",
		password:"a",
		level:0 
	}];
	localStorage.setItem("account", JSON.stringify(account));
}

var checkLogin =JSON.parse(localStorage.getItem('checkLogin')); 
if (checkLogin === null) {
        checkLogin = [];
        var checkLogin = -1;
        localStorage.setItem("checkLogin", JSON.stringify(checkLogin));
    }

	if (checkLogin == -1) {
	
	}else if( account[checkLogin].level==0){
		document.getElementById("statusLogin").innerHTML="Đăng nhập thành công";
		document.getElementById("menu_login").style.display = 'none'; 
		document.getElementById("menu_logout").style.display = 'block'; 
		document.getElementById("hello_user").innerHTML ="Xin chào "+account[i].username+" !";
	}else if( account[checkLogin].level==1){
		document.getElementById("statusLogin").innerHTML="Đăng nhập thành công";
		document.getElementById("menu_login").style.display = 'none'; 
		document.getElementById("menu_logout").style.display = 'block'; 
		document.getElementById("hello_user").innerHTML ="Xin chào "+account[i].username+" !";
	}
var idUp =JSON.parse(localStorage.getItem('idUp'));
	if (idUp === null) {
			idUp = [];
			var idUp=4;
			 localStorage.setItem("idUp", JSON.stringify(idUp));
		}

function showbtnLogin(){
	if(checkLogin == -1){
		document.getElementById('menu_login').style.display = 'block';
		document.getElementById('menu_logout').style.display = 'none';
	}
	else{
		document.getElementById('menu_login').style.display = 'none';
		document.getElementById('menu_logout').style.display = 'block';
		document.getElementById("hello_user").innerHTML ="Xin chào "+account[checkLogin].username+" !";
	}
}

function showSignUp(){
	document.getElementById('login').style.display = 'none';
	document.getElementById('signup').style.display = 'block';
}

function showLogin(){
	document.getElementById('signup').style.display = 'none';
	document.getElementById('login').style.display = 'block';
}

function SignUp(){
	var fullnameSignUp = document.getElementById('fullnameSignUp').value;
	var addressSignUp = document.getElementById('addressSignUp').value;
	var phoneSignUp = document.getElementById('phoneSignUp').value;
	var usernameSignUp = document.getElementById('usernameSignUp').value;
	var passwordSignUp = document.getElementById('passwordSignUp').value;
	var Repassword = document.getElementById('RepasswordSignUp').value;

	var checkUserName = 0;
	var id = idUp;
	var level = 0;
	if (fullnameSignUp != '' && addressSignUp != '' 
		&& phoneSignUp != '' && usernameSignUp != ''
		&& passwordSignUp != '' && Repassword == passwordSignUp){
			for (let i = 0; i < account.length; i++)
				if (account[i].username == usernameSignUp){
					checkUserName = 1;
					break;	
			}
			if (checkUserName == 0){
				accountSignUp = {id,fullnameSignUp,addressSignUp,phoneSignUp,usernameSignUp,passwordSignUp,level};
				account.push(accountSignUp);
				localStorage.setItem("account", JSON.stringify(account));
				checkLogin = id;
    			localStorage.setItem("checkLogin", JSON.stringify(checkLogin));

				var id=idUp++;
				localStorage.setItem("idUp", JSON.stringify(idUp));
				document.getElementById("statusSignUp").innerHTML="Đăng ký thành công";
				location.reload();
			}else 
				document.getElementById("statusSignUp").innerHTML="Tên tài khoản đã tồn tại!";
			
			if (phoneSignUp > 999999999 && phoneSignUp < 1111111111)
				document.getElementById("statusSignUp").innerHTML="Số điện thoại không hợp lệ!";
					
		}else if (Repassword == '')
			document.getElementById("statusSignUp").innerHTML="Vui lòng nhập đầy đủ thông tin!";
			else if (passwordSignUp != Repassword)
				document.getElementById("statusSignUp").innerHTML="Mật khẩu nhập không trùng khớp!";
}

function Login(){ 
	for (i = 0; i < account.length; i++){
	  if ((document.getElementById("usernameLogin").value == account[i].username) && (document.getElementById("passwordLogin").value == account[i].password)) {
		checkLogin = account[i].id; 
		localStorage.setItem("checkLogin", JSON.stringify(checkLogin));
		if (account[checkLogin].level==0) {
		  document.getElementById("statusLogin").innerHTML="Đăng nhập thành công";
		  document.getElementById("menu_login").style.display = 'none'; 
          document.getElementById("menu_logout").style.display = 'block'; 
		  document.getElementById("hello_user").innerHTML ="Xin chào "+account[i].username+" !";
		  location.reload();
		  
		}else if(account[checkLogin].level==1){
		  document.getElementById("statusLogin").innerHTML="Đăng nhập thành công";
		  document.getElementById("menu_login").style.display = 'none'; 
          document.getElementById("menu_logout").style.display = 'block'; 
		  document.getElementById("hello_user").innerHTML ="Xin chào "+account[i].username+" !";
		  location.reload();           
		}     
	  }
  }
  if (checkLogin == -1) {
	document.getElementById("statusLogin").innerHTML="sai mật khẩu hoặc tài khoản";
	  }
}

function Logout() {   
	document.getElementById('menu_login').style.display = 'block';
	document.getElementById('menu_logout').style.display = 'none';
    checkLogin=-1;  
    localStorage.setItem("checkLogin", JSON.stringify(checkLogin));  
	
}
/*function checkFilled(){
	var check = document.getElementsByClassName("field");
	for(var i = 0; i < check.length; i++){
		if(check[i].value == ""){
			check[i].style.backgroundColor = "green";
		}
	}
}*/
