function strSerch(){

var str=document.getElementById("para").innerHTML;
console.log(str);
var abc=document.getElementById("paraSearch").value;
var x=str.search(/abc/i);
window.alert(x);
};
console.log(strSerch());

function txtchng(){
document.getElementById("inHtm").innerHTML = "JavaSript";
};

function txtsiz(){

var a = document.getElementById("txtsz").value;
console.log(a);
document.getElementById('abcc').style.fontSize='a px';
window.alert(a);
};

function artOps(){

var a = document.getElementById("num1").value;
var b = document.getElementById("num2").value;
console.log(a,b);
a=Number(a);
b=Number(b);

var c= a+b;
	window.alert(c);
};
