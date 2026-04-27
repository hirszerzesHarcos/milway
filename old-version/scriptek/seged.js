seged={}

seged.elemLetrehoz=function(e, obj)
{
	var elem=document.createElement(e);
	for(tulajdonsag in obj)
	{
		elem[tulajdonsag]=obj[tulajdonsag];
	}
	return elem;
}

seged.gyermekHozzafuz=function()
{
	//Beilleszti a gyermekeket egy szülő objektumba. Ha függvényként használjuk, sikeres beillesztés esetén a szülő objektummal tér vissza, egyébként meg nulllal.
	//1. paraméter: amibe beillesztjük (objektum)
	//2. paramétertől: amiket beillesztünk (objektum)
	if(this.gyermekHozzafuz.arguments.length>1)
	{
		var szulo=this.gyermekHozzafuz.arguments[0];
		for(var i=1;i<this.gyermekHozzafuz.arguments.length;i++)
		{
			if(arguments[i])
			{
				szulo.appendChild(this.gyermekHozzafuz.arguments[i]);
			}
		}
		return szulo;
	}
	else
	{
		return null;
	}
}

seged.elemKapId=function(id)
{
	return document.getElementById(id);
}

seged.debug=function(ertek)
{
	var ujErtek=document.createTextNode(ertek);
	var ujElem=this.elemLetrehoz("li", {});
	this.gyermekHozzafuz(ujElem, ujErtek);
	var debug=this.elemKapId("debug");
	if(!debug.hasChildNodes())
	{
		var ulElem=this.elemLetrehoz("ul", {});
		this.gyermekHozzafuz(debug, ulElem);
	}
	this.gyermekHozzafuz(debug.firstChild, ujElem);
}

seged.beemelJS=function(fajlUtvonalak)
{
	for(var i=0;i<fajlUtvonalak.length;i++)
	{
		var ujElem=this.elemLetrehoz("script", {type:"text/javascript", src:fajlUtvonalak[i]});
		this.gyermekHozzafuz(document.getElementsByTagName("head")[0], ujElem);
	}
}
seged.beemelCSS=function(fajlUtvonalak)
{
	for(var i=0;i<fajlUtvonalak.length;i++)
	{
		var ujElem=this.elemLetrehoz("link", {rel:"stylesheet", href:fajlUtvonalak[i]});
		this.gyermekHozzafuz(document.getElementsByTagName("head")[0], ujElem);
	}
}

