function kezdet()
{
	/*var jsFajlok=new Array("ajax.js");
	seged.beemelJS(jsFajlok);*/
	var cssFajlok=new Array("cssek/debug.css", "cssek/index.css");
	seged.beemelCSS(cssFajlok);
	/*seged.debug(45-3);
	seged.debug(77+3);*/
}


window.onload=kezdet;