function kezdet() {
  var obj=document.getElementById("diavetites");
  obj.style.position="relative";  
  diavetites();  
}
function diavetites() {
  var kepek=document.getElementsByClassName("dia");
  diakSzama=kepek.length;
  var i;
  for(i=0;i<diakSzama;i++) {
    diak[i]=kepek[i];
    diak[i].style.position="absolute";
    if(diak[i].offsetHeight>diak[i].parentNode.offsetHeight) {
      diak[i].style.height=200+"px";
      diak[i].style.width="auto";
    }
    Megjelenes.beallit(Animacio, diak[i], {xStartPoz: "jobbKulsoSzel", yStartPoz: "50k%", xCelPoz: "50k%", yCelPoz: "50k%", kesleltetesIdeje: 2000, lejatszasIdeje: 500, lejatszasSebessege: 50, elteltKesleltetes: 0, elteltIdo: 0, lejatszasAllapota: "szunetelo", lejatszasVege: kovetkezodia});
  }
  Megjelenes.beallit(Animacio, diak[regiDia], {xStartPoz: "50k%", xCelPoz: "balKulsoSzel", lejatszasAllapota: "futo", lejatszasVege: undefined});
  Megjelenes.beallit(Animacio, diak[aktDia], {lejatszasAllapota: "futo"});
}
function kovetkezodia() {
  Megjelenes.beallit(Animacio, diak[regiDia], {xStartPoz: "jobbKulsoSzel", xCelPoz: "50k%", elteltKesleltetes: 0, elteltIdo: 0, lejatszasAllapota: "szunetelo", lejatszasVege: kovetkezodia});
  regiDia=aktDia;
  Megjelenes.beallit(Animacio, diak[regiDia], {xStartPoz: "50k%", xCelPoz: "balKulsoSzel", elteltKesleltetes: 0, elteltIdo: 0, lejatszasAllapota: "futo", lejatszasVege: undefined});
  aktDia++;
  if(aktDia==diakSzama) {
    aktDia=0;
  }  
  Megjelenes.beallit(Animacio, diak[aktDia], {lejatszasAllapota: "futo"});
}
var diakSzama;
var aktDia=1;
var regiDia=0;
var diak=[];
window.addEventListener("load", kezdet);