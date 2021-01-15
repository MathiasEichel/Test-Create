var requestify = require('requestify');
var htmlbody;
var i = 1;

function increment(idx) {
    return idx++;
}
function readSite( SiteAdr) {
    requestify.get(SiteAdr).then(function(response) {
        // Get the response body
        htmlbody = response.body;
        console.log(htmlbody);
       
    });
}
while(i<=2) {
   
}
