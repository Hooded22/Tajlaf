function rand( min, max ){
    min = parseInt( min, 10 );
    max = parseInt( max, 10 );

    if ( min > max ){
        var tmp = min;
        min = max;
        max = tmp;
    }

    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

function losuj()
{
var y=document.getElementById("kolor");
var min=1;
var max=6;
var x=rand(min, max);
switch (x)
{
case 1:
var link="<a id='losowane' href='https://www.facebook.com/szymon.szczech.9?fref=hovercard&hc_location=chat'>Facebook</a>"
document.getElementById("wynik").innerHTML=link;
break;
case 2:
var link="<a id='losowane' href='https://www.facebook.com/michalina.tomaszewska.39?fref=hovercard&hc_location=chat'>Facebook</a>"
document.getElementById("wynik").innerHTML=link;
break;
case 3:
var link="<a id='losowane' href='https://www.facebook.com/przemek.sipta'>Facebook</a>"
document.getElementById("wynik").innerHTML=link;
break;
case 4:
var link="<a id='losowane' href='https://www.facebook.com/dawid.kalisz.925?ref=br_rs'>Facebook</a>"
document.getElementById("wynik").innerHTML=link;
break;
case 5:
var link="<a id='losowane' href='https://www.facebook.com/darek.wierzbicki.716?ref=br_rs'>Facebook</a>"
document.getElementById("wynik").innerHTML=link;
break;
case 6:
var link="<a id='losowane' href='https://www.facebook.com/mateusz.kula.967?ref=br_rs'>Facebook</a>"
document.getElementById("wynik").innerHTML=link;
break;
case 7:
var link="<a id='losowane' href=''>Facebook</a>"
document.getElementById("wynik").innerHTML=link;
break;
case 8:
var link="<a id='losowane' href=''>Facebook</a>"
document.getElementById("wynik").innerHTML=link;
break;
case 9:
var link="<a id='losowane' href=''>Facebook</a>"
document.getElementById("wynik").innerHTML=link;
break;
case 10:
var link="<a id='losowane' href=''>Facebook</a>"
document.getElementById("wynik").innerHTML=link;
break;
}
}