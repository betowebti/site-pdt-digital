const fs = require('fs')
const path = require('path')
const navbarPath = path.join(`${__dirname}`, '..', 'pages', 'Navbar', 'Content')
const dynamicConfigPath = path.join(`${__dirname}`, '..', 'Navbar', 'Dynamic', 'definitions.js')

var success = true
var files = '['

fs.readdirSync(navbarPath).forEach(file => {
    eval(fs.readFileSync(navbarPath+'/'+file).toString().split('//DATA')[1])
    console.log(displayName)
    files = files + `['${file.split('.')[0]}','${displayName}'],`
 });
 files = files.replace(/,\s*$/, "")
 files = files + ']'
try {
    if(fs.existsSync(dynamicConfigPath) == false)
    {
        fs.open(dynamicConfigPath, 'w+', function(err, f){
            sucess = false;
            if(err) {Error(err)}
        })
    }
    fs.writeFileSync(dynamicConfigPath, 
    `const Pages = ${files}` + '\n' +'export default Pages')
}
catch(err) {
    if(err) {
        sucess = false
        Error(err)
    }
}
if(success) {
    console.log("\x1b[36m%s\x1b[0m","Gerados os componentes baseados em rotas com sucesso")
}

function Error(error){
    console.log("\x1b[31m",error)
    console.log("\x1b[0m",'')
}