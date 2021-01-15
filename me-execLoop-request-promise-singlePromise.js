var pdf = require('html-pdf');
//var requestify = require('requestify');
//var v_content = 'http://www.google.com';
//var v_fbase = '/Users/mathiaseichel/Downloads/Test/Page00';

var request = require('request-promise');

async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

async function fetchPage(url, v_fname) {
    return await request({
        url: url,
        transform: (body) => {
            pdf.create(body, {format:'A4'}).toFile(v_fname, function (err, res) {
                if (err) return console.log(err);
            });
        }    
    });
}
 async function run(v_content) {
    for(var i=3; i<=4; i++) {
        v_fname = v_fbase+i+'.PDF';
        await fetchPage(v_content, v_fname);
        // await sleep(5000);
    }
}
var v_content = 'http://www.google.com';
var v_fbase = '/Users/mathiaseichel/Downloads/Test/Page00';
run (v_content);