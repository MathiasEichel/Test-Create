// install the following node modules
// npm i -S html-pdf request-promise ...
'use strict';
// modules to utilize
var fs = require('fs');
var pdf = require('html-pdf');
var request = require('request-promise');
var PDFDocument = require('pdfkit');
var SVGtoPDF = require('svg-to-pdfkit');
// input parameters to adapt
var i_fromPage = 1;     // start with first page
var i_toPage = 1;       // last Page of eBook
var i_filebase = '/Users/mathiaseichel/Downloads/Test/'; // adapt folder path where pdf files should be stored
var v_fname = '';
                        //HA240_EN_Col12_R1.3 has to be exchanged with different book title
                    
var i_contentBase = 'https://saplearninghub.plateau.com/icontent_e/CUSTOM_eu/sap/self-managed/ebook/DISC_ADM920_EN_Col17_R1.2_WO/xml/topic';
// varialble for controlling download
var v_extension = ".svg";
var v_num = i_fromPage;

async function fetchPage(url, v_fname) {
  try {
  return await request({
      url: url,
      transform: (body) => {
          console.log(body);
          // if (err) return console.log(err);
          /* var pdfPage = new PDFDocument();
          SVGtoPDF(pdfPage, body, 0, 0);
          fs.writeFileSync(v_fname, pdfPage, function (err, buf) {
            if (err) return console.log(err);
        }); */
          /*pdf.create(body, {format:'A4'}).toFile(v_fname, function (err, res) {
              if (err) return console.log(err);
              else return console.log(res);
          }); */
      }    
  });
} catch(error){
  console.log(body);
}
}

async function mainLoop() {
  for (v_num=i_fromPage;v_num<=i_toPage;v_num++) {
    // build resource string
    var v_content = i_contentBase + v_num + v_extension;	
    // build Page File-Name
    if (v_num > 99) { var v_page = "Page" } else if (v_num > 9) { var v_page = "Page0" } else { var v_page = "Page00"}
    // build file name
    v_fname = i_filebase + v_page + v_num + '.pdf';	
    
    // load content page from LH
    // v_content = 'http://www.google.com'; // --for testing
    await fetchPage(v_content, v_fname);
  }
}

mainLoop();

	