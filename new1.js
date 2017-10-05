function rem(){
	 
	 var f= [100000,25, 8, 7, 41, 122, 2141, 124]
	 var r=f[0];
	for(i=0; i<f.length; i++)
	{
		if(f[i]<r)
		r=f[i];
		
	}
	console.log(r);
}
function mer(){  //h,y , g variables are used
	 
	 var h= [100000,25, 8, 7, 41, 122, 2141, 124]
	 var t=h[0];
	 
	for(i=0; i<h.length; i++)
	{
		if(h[i]>t)
		t=h[i];
		
	}
	window.alert(t)
	console.log(t);
}

function inputs(){ //h,y , g variables are used
	var h= [100000,25, 8, 7, 41, 122, 2141, 124];
	console.log(h);

     var y= document.getElementById('bbb').value;
	
	 var g=y.split(",").map(Number);
	 console.log(g);
	 	var u=h.concat(g);
	console.log(u);
	window.alert(u);
	alert(g);
	document.alert();
	 
}
	 
	 
	 
	 
	 
	 
	 
	 
	 
function Asc()
{
window.alert(A)

}
function Dsc()
{
window.alert(D)

}
function Mi()
{
window.alert(Min[0])

}
function Ma()
{
window.alert(max)

}
function Minn()
{
	
window.alert(a[0])

}
function Maxx()
{
window.alert(b[0])

}

function Dscc()
{
	
window.alert(b)

}
function AScc()
{
window.alert(a)
}








