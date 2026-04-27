function kezdet() {
  var obj=document.getElementById("diavetites");
  obj.style.position="relative";
  obj.style.overflow="hidden";
  obj.style.height=500+"px";
  /*var szelesseg=obj.offsetWidth;
  var magassag=Math.round(szelesseg/9*16);
  if(magassag>window.innerHeight)magassag=window.innerHeight;
  obj.style.height=magassag+"px";*/
  diavetites();
  obj=document.getElementById("logok");
  obj.style.position="relative";
  obj.style.height=112+"px";
  diavetitesLogok();
}

function diavetites() {
  var kepek=document.getElementsByClassName("dia");
  diakSzama=kepek.length;
  var i;
  for(i=0;i<diakSzama;i++) {
    diak[i]=kepek[i];
    diak[i].style.position="absolute";
    Megjelenes.beallit(Animacio, diak[i], {xStartPoz: "balKulsoSzel", yStartPoz: "50k%", xCelPoz: "50k%", yCelPoz: "50k%", kesleltetesIdeje: 1000, lejatszasIdeje: 2000, lejatszasSebessege: 50, elteltKesleltetes: 0, elteltIdo: 0, lejatszasAllapota: "szunetelo", lejatszasVege: kovetkezodia});
  }
  Megjelenes.beallit(Animacio, diak[regiDia], {xStartPoz: "50k%", xCelPoz: "jobbKulsoSzel", lejatszasAllapota: "futo", lejatszasVege: undefined});
  Megjelenes.beallit(Animacio, diak[aktDia], {lejatszasAllapota: "futo"});
}
function kovetkezodia() {
  Megjelenes.beallit(Animacio, diak[regiDia], {xStartPoz: "balKulsoSzel", xCelPoz: "50k%", elteltKesleltetes: 0, elteltIdo: 0, lejatszasAllapota: "szunetelo", lejatszasVege: kovetkezodia});
  regiDia=aktDia;
  Megjelenes.beallit(Animacio, diak[regiDia], {xStartPoz: "50k%", xCelPoz: "jobbKulsoSzel", elteltKesleltetes: 0, elteltIdo: 0, lejatszasAllapota: "futo", lejatszasVege: undefined});
  aktDia++;
  if(aktDia==diakSzama) {
    aktDia=0;
  }  
  Megjelenes.beallit(Animacio, diak[aktDia], {lejatszasAllapota: "futo"});
}
function diavetitesLogok() {
  var kepek=document.getElementsByClassName("logok");
  diakSzamaLogok=kepek.length;
  var i;
  for(i=0;i<diakSzamaLogok;i++) {
    diakLogok[i]=kepek[i];
    diakLogok[i].style.position="absolute";
    Megjelenes.beallit(Animacio, diakLogok[i], {xStartPoz: "jobbKulsoSzel", yStartPoz: "50k%", xCelPoz: "50k%", yCelPoz: "50k%", kesleltetesIdeje: 2000, lejatszasIdeje: 500, lejatszasSebessege: 50, elteltKesleltetes: 0, elteltIdo: 0, lejatszasAllapota: "szunetelo", lejatszasVege: kovetkezodiaLogok});
  }
  Megjelenes.beallit(Animacio, diakLogok[regiDiaLogok], {xStartPoz: "50k%", xCelPoz: "balKulsoSzel", lejatszasAllapota: "futo", lejatszasVege: undefined});
  Megjelenes.beallit(Animacio, diakLogok[aktDiaLogok], {lejatszasAllapota: "futo"});
}
function kovetkezodiaLogok() {
  Megjelenes.beallit(Animacio, diakLogok[regiDiaLogok], {xStartPoz: "jobbKulsoSzel", xCelPoz: "50k%", elteltKesleltetes: 0, elteltIdo: 0, lejatszasAllapota: "szunetelo", lejatszasVege: kovetkezodiaLogok});
  regiDiaLogok=aktDiaLogok;
  Megjelenes.beallit(Animacio, diakLogok[regiDiaLogok], {xStartPoz: "50k%", xCelPoz: "balKulsoSzel", elteltKesleltetes: 0, elteltIdo: 0, lejatszasAllapota: "futo", lejatszasVege: undefined});
  aktDiaLogok++;
  if(aktDiaLogok==diakSzamaLogok) {
    aktDiaLogok=0;
  }  
  Megjelenes.beallit(Animacio, diakLogok[aktDiaLogok], {lejatszasAllapota: "futo"});
}
var diakSzama;
var aktDia=1;
var regiDia=0;
var diak=[];
var diakSzamaLogok;
var aktDiaLogok=1;
var regiDiaLogok=0;
var diakLogok=[];
/*var elozoDia;*/
window.addEventListener("load", kezdet);