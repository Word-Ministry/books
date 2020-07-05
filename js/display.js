
function displayid(id){
var erv = document.getElementById(""+id+"");
if(erv.style.display=="none"){
erv.style.display="";
}
else{
erv.style.display="none";
}
}


//平台、设备和操作系统（windows系统，苹果系统，Linux或者X11系统）  
var system ={
win : false,
mac : false,
xll : false
};
//检测平台  
var p = navigator.platform;
system.win = p.indexOf("Win") == 0; //如果是windows系统就显示true，否则false。
system.mac = p.indexOf("Mac") == 0;  //如果是Mac系统就显示true，否则false。 
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);  //如果是Linux或者X11系统就显示true，否则false。
//跳转语句，如果是windows系统，苹果系统，Linux或者X11系统就跳转到www.csjwang.com；如果是手机访问就自动跳转到m.csjwang.com页面。
var ua = navigator.userAgent.toLowerCase();

if(system.win||system.mac||system.xll){
	window.onload=function(){
		document.getElementById("winnav").style.display="inline";//显示 
		}
}else if (ua.match(/MicroMessenger/i)=="micromessenger"){
	window.onload=function(){
		document.getElementById("wechatnav").style.display="inline";//显示
		document.getElementById("download").innerHTML = "微信里无法下载，请用浏览器打开";
 		}
}else{  
	window.onload=function(){
		document.getElementById("nav").style.display="inline";//显示 
 		}
}




