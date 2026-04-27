



function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}
Animacio={};
Animacio.inicializalas=function() {
  Animacio.idozito_bekapcsolva=0;
}
Animacio.letrehoz=function(obj, xKezdo, xVegzo, kesleltetesIdeje, lejatszasIdeje, lejatszas) {
  obj.xKezdo=xKezdo;
  obj.xVegzo=xVegzo;
  /*window.alert("Paraméterek\nxKezdo: "+xKezdo+"\nxVegzo: "+xVegzo+"\nKésleltetés: "+kesleltetesIdeje);*/
  if(kesleltetesIdeje!==undefined) {
    /*window.alert("1. undef");*/
    if(kesleltetesIdeje.indexOf("emp")>-1 || kesleltetesIdeje.indexOf("mp")>-1) {
      /*window.alert("2. emp, mp");*/
      if(!isNaN(parseFloat(kesleltetesIdeje))) {      
        obj.kesleltetesIdeje=Math.round(parseFloat(kesleltetesIdeje)*1000);
        /*window.alert("3. float"+obj.kesleltetesIdeje);*/
        if(kesleltetesIdeje.indexOf("emp")>-1) {
          obj.kesleltetesIdeje=Math.round(obj.kesleltetesIdeje/1000);
          /*window.alert("4. emp");*/
        }
      }
    }
  }
  /*window.alert("Objektum\nxKezdo: "+obj.xKezdo+"\nxVegzo: "+obj.xVegzo+"\nKésleltetés: "+obj.kesleltetesIdeje);*/
  if(lejatszasIdeje!==undefined) {
    /*window.alert("1. undef");*/
    if(lejatszasIdeje.indexOf("emp")>-1 || lejatszasIdeje.indexOf("mp")>-1) {
      /*window.alert("2. emp, mp");*/
      if(!isNaN(parseFloat(lejatszasIdeje))) {      
        obj.lejatszasIdeje=Math.round(parseFloat(lejatszasIdeje)*1000);
        /*window.alert("3. float"+obj.kesleltetesIdeje);*/
        if(lejatszasIdeje.indexOf("emp")>-1) {
          obj.lejatszasIdeje=Math.round(obj.lejatszasIdeje/1000);
          /*window.alert("4. emp");*/
        }
      }
    }
  }
  obj.lejatszas=lejatszas;
  /*window.alert("Objektum\nxKezdo: "+obj.xKezdo+"\nxVegzo: "+obj.xVegzo+"\nKésleltetés ideje: "+obj.kesleltetesIdeje+"\nLejátszás ideje: "+obj.lejatszasIdeje+"\nLejátszás: "+obj.lejatszas);*/
}

Animacio.start=function() {
  if(!Animacio.idozito_bekapcsolva) {
    Animacio.idozito_bekapcsolva=1;
    Animacio.idozito=setInterval(Animacio.animal, 50);
  }
}
Animacio.animal=function() {
  objektumok=document.getElementsByTagName("*");
  for(i=0;objektumok.length>i;i++) {
    if(objektumok[i].lejatszas) {
      Animacio.konvertal(objektumok[i]);
    }
  }
  /*var obj=document.getElementById("div1");
  obj.style.left=obj.xKezdo+"px";
  obj.xKezdo++;
  if(obj.xVegzo==obj.xKezdo) {
    Animacio.idozito_bekapcsolva=0;*/
    /*clearInterval(Animacio.idozito);*/
  /*}*/
}
Animacio.konvertalas=function(obj) {
  obj.xAkt=Animal.szamol(obj.xKezdo, obj.xVegzo);
}
Animal.szamol=function(ertekA, ertekB) {
  switch(ertek) {
    case "balKulsoSzel":
      ertek=obj.offsetWidth*-1;
      break;
    case "jobbKulsoSzel":
      break;
    default:
          
      } 
}


Animacio.inicializalas();