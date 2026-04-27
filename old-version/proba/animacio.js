function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}

Animacio={};
Animacio.inicializalas=function() {
  Animacio.idozito_bekapcsolva=0;
}
Animacio.letrehoz=function(obj, xKezdo, yKezdo, xVegzo, yVegzo) {
  obj.xKezdo=xKezdo;
  obj.yKezdo=yKezdo;
  obj.xVegzo=xVegzo;
  obj.yVegzo=yVegzo;
}

Animacio.start=function() {
  if(!Animacio.idozito_bekapcsolva) {
    Animacio.idozito_bekapcsolva=1;
    Animacio.idozito=setInterval(Animacio.rajzol, 50);
  }
}
Animacio.rajzol=function() {
  var obj=document.getElementById("div1");
  obj.style.left=obj.xKezdo+"px";
  obj.xKezdo++;
  if(obj.xVegzo==obj.xKezdo) {
    Animacio.idozito_bekapcsolva=0;
    clearInterval(Animacio.idozito);
  }
}

/*function Adatkiir() {
  var elemek=document.getElementsByTagName("*");
  for(var i=0;i<elemek.length;i++) {
    if(elemek[i].anima.xKezdo) {
      window.alert(elemek[i].id + " - " + elemek[i].anima.xKezdo);
    }
 } 
}*/

Animacio.inicializalas();