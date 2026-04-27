Animacio={}
Animacio.inicializalas=function() {
  Animacio.idozito_bekapcsolva=false;
  Animacio.sebessege=50;
}
Animacio.beallit=function(obj, tulajdonsagok) {
  for(tulajdonsag in tulajdonsagok) {
		obj[tulajdonsag]=tulajdonsagok[tulajdonsag];
  }
  obj.animacio=true;
  if(!obj.lejatszasAllapota) {
    obj.lejatszasAllapota="futo";
  }
  Animacio.indit();
}
Animacio.torol=function(obj) {
  obj.animacio=false;
}
Animacio.indit=function() {
  if(!Animacio.idozito_bekapcsolva) {
    Animacio.idozito_bekapcsolva=true;
    Animacio.idozito=setInterval(Animacio.kovetkezoKepkocka, Animacio.sebessege);
  }
}
/*Animacio.kepkocka=function(obj) {
  if(obj.elteltIdo==0) {
    Elrendezo.beallit(obj, {xPoz: obj.xStartPoz});
  }
  else if(obj.elteltIdo>=obj.lejatszasIdeje) {
    Elrendezo.beallit(obj, {xPoz: obj.xCelPoz});
  }
  else {
    tavolsag=Elrendezo.ertekKonvertalo(obj, "xCelPoz")-Elrendezo.ertekKonvertalo(obj, "xStartPoz");
    ido=obj.elteltIdo/obj.lejatszasIdeje;
    Elrendezo.beallit(obj, {xPoz: Elrendezo.ertekKonvertalo(obj, "xStartPoz")+Math.round(tavolsag*ido)+"px"});
  }
}*/
/*Animacio.frissito=function() {
  var obj=document.getElementsByTagName("*");
  for(i=0;obj.length>i;i++) {
    if(obj[i].animacio===true) {
      Animacio.kepkocka(obj[i]);
    }
  }
}*/
Animacio.kovetkezoKepkocka=function() {
  /*Animacio.frissito();*/
  Elrendezo.frissito();
  var obj=document.getElementsByTagName("*");
  for(i=0;obj.length>i;i++) {
    if(obj[i].animacio===true) {
      obj[i].elteltIdo+=Animacio.sebessege;
    }
  }
}