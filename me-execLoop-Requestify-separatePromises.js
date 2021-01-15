var requestify=require('requestify');
var pdf = require('html-pdf');

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
    var i=1;
    while (i <=2 ) {
        console.log('==========calling site read -->' + i);
        var result = await readSite('http://www.google.com');
        //console.log(result);
        fname = '/Users/mathiaseichel/Downloads/Test/Page0'+i+'.PDF';
        await crtPDF(result,fname);
        i++;
}
  // expected output: 'resolved'
}

function readSite(SiteAdr) {
    return new Promise(resolve => {
        requestify.get(SiteAdr).then(function(response) {
            resolve(response.body);
        });
    });
}

function crtPDF(htmlBody, v_fname) {
    return new Promise(resolve => {
        var config = {format: 'A4'};
        pdf.create(htmlBody, config).toFile(v_fname, function (err, res) {
            if (err) return console.log(err);
            resolve();
            });  
    });
}

asyncCall();