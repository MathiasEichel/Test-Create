var requestify = require('requestify'); 
var webadr = 'https://saplearninghub.plateau.com/icontent_e/CUSTOM_eu/sap/self-managed/ebook/DISC_ADM920_EN_Col17_R1.2_WO/xml/topic1.svg';
var rp = require('request-promise');

rp.
rp(webadr)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (err) {
        console.log(err);
    });

    /*
try { requestify.get(webadr).then(function(response) {
    // Get the response body
    var rsp = response.body;
    console.log(rsp);
});
} catch(error) {
    console.log(error);
}
*/