//var pdf = require('html-pdf');
var requestify = require('requestify');
v_content = 'http://www.google.com';
var v_save = false;
var i = 1;
                    // requestify.responseEncoding('utf8');
while (i<=2) {
    
//if (v_save == false) {
//    v_save = true;
//    console.log('v_save='+v_save); 
requestify.get(v_content, function(response) {
    var html = response.getBody();
    i++;
    console.log(i);
});

}
