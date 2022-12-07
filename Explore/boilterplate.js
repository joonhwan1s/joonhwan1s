const fs = require("fs");
const foldername = process.argv[2] || 'Project'

// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK");
//   if (err) throw err;
// });

try{
    fs.mkdirSync(foldername);
    fs.writeFileSync(`${foldername}/index.html`, '')
    fs.writeFileSync(`${foldername}/app.js`, '')
    fs.writeFileSync(`${foldername}/styles.css`, '')
} catch(e){
    console.log("SOMTHING IS WRODNG");
    console.log(e)
}