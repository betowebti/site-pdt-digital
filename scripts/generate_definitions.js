const fs = require('fs');
const path = require('path');
const navbarPath = path.join(`${__dirname}`, '..', 'Navbar', 'Content');
const navbarFilePath = path.join(`${__dirname}`, '..', 'Navbar', 'Dynamic', 'definitions.js');

var success = true;
var files = '';

fs.readdirSync(navbarPath).forEach(file => {
    files = files + `'${file.split('.')[0]}',`
 });
try {
    if(fs.existsSync(navbarFilePath) == false)
    {
        fs.open(navbarFilePath, 'w+', function(err, f){
            sucess = false;
            if(err) {Error(error)}
        })
    }
    fs.writeFileSync(navbarFilePath, 
    `const Pages = [${files.replace(/,\s*$/, "")}]` + '\n' +'export {Pages}')
}
catch(err) {
    if(err) {
        sucess = false;
        Error(error)
    }
}
if(success) {
    console.log("\x1b[36m%s\x1b[0m","Gerados os componentes baseados em rotas com sucesso");
}

function Error(error){
    console.log("\x1b[31m",error);
    console.log("\x1b[0m",'');
}