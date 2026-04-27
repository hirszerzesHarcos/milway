Megjelenes={}
Megjelenes.beallit=function(rajzolasi_mod, obj, tulajdonsagok) {/*Animacio, Rendezes*/
  rajzolasi_mod.beallit(obj, tulajdonsagok);
}
Megjelenes.frissit=function() {
  var obj=document.getElementsByTagName("*");
  for(var i=0;obj.length>i;i++) {
    if(obj[i].animacio===true) {
      Animacio.frissit(obj[i]);
    }
    else if(obj[i].rendezes===true) {
      Rendezes.frissit(obj[i]);
    }
  }
}
window.addEventListener("resize", Megjelenes.frissit);