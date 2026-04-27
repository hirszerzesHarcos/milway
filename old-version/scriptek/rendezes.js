Rendezes={}
Rendezes.beallit=function(obj, tulajdonsagok) {
	for(tulajdonsag in tulajdonsagok) {
		obj[tulajdonsag]=tulajdonsagok[tulajdonsag];
  }
  obj.rendezes=true;
  Rendezes.frissit(obj);
}
Rendezes.torol=function(obj) {
  Rendezes.beallit(obj, {rendezes: false});
}
Rendezes.frissit=function(obj) {
  if(obj.xPoz) {
    obj.style.left=Rendezes.ertekKonvertalo(obj, "xPoz")+"px";
  }
  if(obj.yPoz) {
    obj.style.top=Rendezes.ertekKonvertalo(obj, "yPoz")+"px";
  }
}

Rendezes.ertekKonvertalo=function(obj, tulajdonsag) {
  if(tulajdonsag=="xPoz"||tulajdonsag=="xStartPoz"||tulajdonsag=="xCelPoz") {
    if(obj[tulajdonsag]=="balKulsoSzel") {
      return obj.offsetWidth*-1;
    }
    else if(obj[tulajdonsag]=="balBelsoSzel") {
      return 0;
    }
    else if(obj[tulajdonsag]=="jobbBelsoSzel") {
      return obj.parentNode.clientWidth-obj.offsetWidth;
    }
    else if(obj[tulajdonsag]=="jobbKulsoSzel") {
      return obj.parentNode.clientWidth;
    }
    else if(obj[tulajdonsag].indexOf("k%")>-1) {
      return Math.round(obj.parentNode.clientWidth*parseFloat(obj[tulajdonsag])/100-obj.clientWidth*0.5);
    }
    else if(obj[tulajdonsag].indexOf("px")>-1) {
      return parseInt(obj[tulajdonsag]);
    }
  }
  if(tulajdonsag=="yPoz"||tulajdonsag=="yStartPoz"||tulajdonsag=="yCelPoz") {
    if(obj[tulajdonsag].indexOf("k%")>-1) {
      return Math.round(obj.parentNode.clientHeight*parseFloat(obj[tulajdonsag])/100-obj.clientHeight*0.5);
    }
  }
}