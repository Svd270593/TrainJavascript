function myFunc1() {
var a=document.getElementById("num").value;
 
var len = 20,i = 1;
var text = 0;

for (; i <= len; i++) {

    text += a+"X"+i +"="+ i*a+"<br>";
    		
}

document.write(text);
};
 
function myFunc(){
 var b;
      document.write("Start" + "<br />");
         
            for(b = 0; b < 10; b++){
               document.write("Current Count : " + b );
               document.write("<br />");
            }
         
            document.write("stop!");
     };

function myFunc2(){

var i=document.getElementById("count").value;
	a=document.getElementById("count1").value;
while(i<a)
	{document.write(i);
		document.write(" <br>");
	i++;
}
};