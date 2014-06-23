function autoFormatSelection(editor) {
    var range = getSelectedRange(editor);
    editor.autoFormatRange(range.from, range.to);
    CodeMirror.commands['goPageUp'](editor);
}

function getSelectedRange(editor) {
    return { from: editor.getCursor(true), to: editor.getCursor(false) };
}

$(".js-code-pattern").each(function(){
	var dataMode = $(this).data('mode');
	var myCodeMirror = CodeMirror.fromTextArea($(this)[0], {
	    lineNumbers: false,
	    mode: dataMode,
	    htmlMode: true,
	    readOnly: true,
	    indentWithTabs: true,
	    indentUnit: 4,
	    autoClearEmptyLines: true,
        lineWrapping: true,
	 });


});

