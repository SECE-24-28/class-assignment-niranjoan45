const fs = require("fs");
const path = require("path");

const folderPath = path.join(__dirname, "demo");

const folderExist = fs.existsSync(folderPath);
if(!folderExist){
    fs.mkdirSync(folderPath);
}else{
    console.log("folder already exist");
}
fs.writeFileSync(folderPath,"This is a new File");  
// fs.writeFileSync(folderPath,"This is a appended Line");
fs.appendFileSync(fileURLToPath, "This is a apeend line"); // to append a content in a file

const res = fs.readFileSync(filePaht, "utf-8");
console.log(res);