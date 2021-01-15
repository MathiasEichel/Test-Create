import { watchFile } from "fs";

// input parameters
var i_fromPage = 2;
var i_toPage = 211;
var i_contentBase = "https://saplearninghub.plateau.com/icontent_e/CUSTOM_eu/sap/self-managed/ebook/HA240_EN_Col12_R1.3/xml/topic";

// $ npm install opn
var opn = require('opn');

// varialbles
var v_extension = ".svg";

for ( var v_num = i_fromPage - 1; v_num <= (i_toPage - i_fromPage + 1) ; v_num++) {
	v_num = v_num + 1;
	
	// build resource string
	var v_content = i_contentBase + v_num + v_extension;
	
	// build Page File-Name
	if (v_num > 99) {
		var v_page = "Page"
	} else if (v_num > 9) {
		var v_page = "Page0"
    } else {
		var v_page = "Page00"
	}
	var v_fname = v_page + v_num;
	
	// load content page
	//tell application "Google Chrome"
	//	activate
    //    open location v_content
        opn(v_content);
        setTimeout(function(){},4000);
		//delay(4000);
		
            // keystroke "p" using command down -- key combination for print --- new KeyboardEvent("keypress", {key : "p", char : "p", ctrlKey: true, shiftKey: true})
            var keyEvent = new KeyboardEvent("keypress", {key : "p"});
            event_object.dispatchEvent(keyEvent);
			setTimeout(function(){},2000); //delay 2

            // key code 76 -- key for CR to get SAVE Dialog
            var keyEvent = new KeyboardEvent("keypress", {key : "Enter"});
            event_object.dispatchEvent(keyEvent);
			setTimeout(function(){},1000); //delay 1

            //keystroke v_fname -- enter files name
			setTimeout(function(){},1000); //delay 1

            // key code 76 -- key for CR to SAVE File
            var keyEvent = new KeyboardEvent("keypress", {key : "Enter"});
            event_object.dispatchEvent(keyEvent);
			setTimeout(function(){},1000); //delay 1

            //keystroke "w" using command down
            var keyEvent = new KeyboardEvent("keypress", {key : "w"});
            event_object.dispatchEvent(keyEvent);            
			setTimeout(function(){},3000); //delay 3

}
