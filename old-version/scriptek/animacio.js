Animacio={}
Animacio.inicializalas=function() {
  Animacio.idozito_bekapcsolva=false;
  Animacio.sebesseg=50;
}
Animacio.beallit=function(obj, tulajdonsagok) {
  for(tulajdonsag in tulajdonsagok) {
		obj[tulajdonsag]=tulajdonsagok[tulajdonsag];
  }
  obj.animacio=true;
  /*if(!obj.lejatszasAllapota) {
    obj.lejatszasAllapota="futo"; jelentősége még nincs
  }*/
  Animacio.indit();
}
Animacio.torol=function(obj) {
  Animacio.beallit(obj, {lejatszasAllapota: "szunetelo", animacio: false});
}
Animacio.indit=function() {
  if(Animacio.idozito_bekapcsolva===false) {
    Animacio.idozito_bekapcsolva=true;
    Animacio.idozito=setInterval(Animacio.kovetkezoKepkocka, Animacio.sebesseg);
  }
}
Animacio.frissit=function(obj) {
  if(obj.elteltIdo==0) {
    Rendezes.beallit(obj, {xPoz: obj.xStartPoz, yPoz: obj.yStartPoz});
  }
  else if(obj.elteltIdo>=obj.lejatszasIdeje) {
    Rendezes.beallit(obj, {xPoz: obj.xCelPoz, yPoz: obj.yCelPoz});
  }
  else {
    tavolsagx=Rendezes.ertekKonvertalo(obj, "xCelPoz")-Rendezes.ertekKonvertalo(obj, "xStartPoz");
    tavolsagy=Rendezes.ertekKonvertalo(obj, "yCelPoz")-Rendezes.ertekKonvertalo(obj, "yStartPoz");
    ido=obj.elteltIdo/obj.lejatszasIdeje;
    Rendezes.beallit(obj, {xPoz: Rendezes.ertekKonvertalo(obj, "xStartPoz")+Math.round(tavolsagx*ido)+"px", yPoz: Rendezes.ertekKonvertalo(obj, "yStartPoz")+Math.round(tavolsagy*ido)+"px"});
  }
}
Animacio.kovetkezoKepkocka=function() {
  var animaltElemekSzama=0;
  var esemeny=[];
  var obj=document.getElementsByTagName("*");
  for(i=0;obj.length>i;i++) {
    if(obj[i].animacio===true) {
      if(!(obj[i].kesleltetesIdeje>0&&obj[i].elteltKesleltetes>0&&obj[i].elteltIdo==0)) {
        Animacio.frissit(obj[i]);
      }
      if(obj[i].elteltIdo==obj[i].lejatszasIdeje) {
        Animacio.torol(obj[i]);
        if(obj[i].lejatszasVege!==undefined)esemeny.push(obj[i]);
      }
      else {
        if(obj[i].lejatszasAllapota=="futo") {
          if(obj[i].kesleltetesIdeje>obj[i].elteltKesleltetes) {
            obj[i].elteltKesleltetes+=Animacio.sebesseg;
          }
          else {
            obj[i].elteltIdo+=Animacio.sebesseg;
          }
          animaltElemekSzama++;
        }
      }
    }
  }
  if(animaltElemekSzama==0) {
    clearInterval(Animacio.idozito);
    Animacio.idozito_bekapcsolva=false;
  }
  for(i=0;esemeny.length>i;i++) {
    esemeny[i].lejatszasVege();
  }
}
Animacio.inicializalas();