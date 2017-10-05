var go=100;
    ok="ok ok"
function artOPer(){
	var a=document.getElementById("val1").value;
	var b= document.getElementById("val2").value;
	a=parseInt(a);
		b=parseInt(b);
	var x=a+b;
	window.alert(x);

};
function artOPers(){
	var a=document.getElementById("val1").value;
	var b= document.getElementById("val2").value;
	a=parseInt(a);
		b=parseInt(b);
	var x=a-b;
	window.alert(x);

};
function artOPerm(){
	var a=document.getElementById("val1").value;
	var b= document.getElementById("val2").value;
	a=parseInt(a);
		b=parseInt(b);
	var x=a*b;
	window.alert(x);

};
function artOPerd(){
	var a=document.getElementById("val1").value;
	var b= document.getElementById("val2").value;
	a=parseInt(a);
		b=parseInt(b);
	var x=a/b;
	window.alert(x);

};
function artOPermo(){
	var a=document.getElementById("val1").value;
	var b= document.getElementById("val2").value;
	a=parseInt(a);
		b=parseInt(b);
	var x=a%b;
	window.alert(x);

};
function stringmeth(){
	var a=document.getElementById("val1").innerHTML;
	var x=a.charAt(0);
	window.alert(x);
	console.log(typeof(x));
};

function str11(){

x=document.getElementById("str1").innerHTML;
var y=x.charAt(45);
window.alert(y);
	

};