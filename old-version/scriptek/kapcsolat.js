function kezdet() {
  obj=document.getElementsByClassName("nevjegy");
  for(i=0;obj.length>i;i++) {
    obj[i].style.height=obj[i].clientWidth*0.625+"px";
  }
  obj=document.getElementsByTagName("td");
  for(i=0;obj.length>i;i++) {
    obj[i].style.fontSize=obj[i].parentElement.clientWidth/35+"px";
  }
  obj=document.getElementsByClassName("nev");
  for(i=0;obj.length>i;i++) {
    obj[i].style.fontSize=obj[i].parentElement.clientWidth/15+"px";
  }
  obj=document.getElementsByClassName("beosztas");
  for(i=0;obj.length>i;i++) {
    obj[i].style.fontSize=obj[i].parentElement.clientWidth/30+"px";
    obj[i].style.textAlign="center";
  }
  obj=document.getElementsByClassName("cim");
  for(i=0;obj.length>i;i++) {
    obj[i].style.fontWeight="bold";
  }
  obj=document.getElementsByClassName("megnevezes");
  for(i=0;obj.length>i;i++) {
    obj[i].style.textAlign="right";
  }
  obj=document.getElementsByClassName("adat");
  for(i=0;obj.length>i;i++) {
    obj[i].style.fontWeight="bold";
    obj[i].style.color="blue";
  }
}
window.addEventListener("load", kezdet);
window.addEventListener("resize", kezdet);