var app = require('electron').remote;
var dialog = app.dialog;
var fs = require('fs');
document.getElementById('openButton').onclick = () =>{
  dialog.showOpenDialog((fileNames)=> {
    if (fileNames == undefined)
    {
      alert('nope');
    }
    else if (isData(fileNames[0]))
    {
      readFile(fileNames[0]);
    }
    else
    {
      alert('nope');
    }
  });

};
function readFile(filepath)
{
  fs.readFile(filepath, 'utf-8', (err, data)=> {

    if (err)
    {
        alert('nope');
        return;
    }
    var texrt = document.getElementById('output');

    texrt.value = data;
  });
}


function getExtension(filename) {
   var parts = filename.split('.');
   return parts[parts.length - 1];
}

function isData(filename) {
   var ext = getExtension(filename);
   switch (ext.toLowerCase()) {
   case 'txt':
   case 'csv':
       //etc
       return true;
   }
   return false;
}



class dataInTake
{}
