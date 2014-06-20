$(".js-code-pattern").each(function(){
	var myCodeMirror = CodeMirror.fromTextArea($(this)[0], {
	    lineNumbers: false,
	    mode: "xml",
	    htmlMode: true,
	 });
});