function onfocusDemo(){
	var name=document.getElementById("name");
	var names=document.getElementById("name_span");
	var tel=document.getElementById("tel");
	var tels=document.getElementById("tel_span");
	var mail=document.getElementById("mail");
	var mails=document.getElementById("mail_span");
	var message=document.getElementById("message");
	var mes=document.getElementById("mes_span");
	names.innerHTML='';
	mails.innerHTML='';
	tels.innerHTML='';	
}
function btn(){
	var name=document.getElementById("name");
	var names=document.getElementById("name_span");
	var tel=document.getElementById("tel");
	var tels=document.getElementById("tel_span");
	var mail=document.getElementById("mail");
	var mails=document.getElementById("mail_span");
	var message=document.getElementById("message");
	var mes=document.getElementById("mes_span");
	if(name.value=="")
		names.innerHTML="*姓名不能为空";
	else if(tel.value=="")
		tels.innerHTML="*电话不能为空";
	else if(mail.value=="")
		mails.innerHTML="*邮箱不能为空";
	else if(message.value=="")
		mes.innerHTML="*留言不能为空";
	else
		alert("提交成功");
	
}
function btn1(){
	document.getElementById("name").value="";
	document.getElementById("tel").value="";
	document.getElementById("mail").value="";
	document.getElementById("message").value="";
}
