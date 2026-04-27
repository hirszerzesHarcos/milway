function kezdet() {
  obj=document.getElementById("div1");
  Animacio.letrehoz(obj, 200, 150, 400,undefined);
  Animacio.start();
}
window.onload=kezdet;