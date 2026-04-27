function kezdet() {
  var obj=document.getElementsByClassName("automata");
  for(i=0;i<obj.length;i++) {
    obj[i].style.position="relative";
    obj[i].children[0].style.position="relative";
    Megjelenes.beallit(Rendezes, obj[i].children[0], {xPoz: "50k%"});
  }
}
window.addEventListener("load", kezdet);