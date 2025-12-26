const fs = require("fs");
const path = require("path");

const folderPath = __dirname;
const filePath = path.join(folderPath,"new.txt");

fs.writeFile(filePath,"Hello,this is new file",(error)=>{
    if(error){
        console.error(error);
    }
    else{
        console.log("File Created Successfully");
        
        fs.readFile(filePath,"utf-8",(error,data)=>{
            if(error){
                console.error(error);
            }
            else{
                console.log(data);
                const newFilePath = path.join(folderPath,"renamed.txt");
                fs.rename(filePath,newFilePath,(error)=>{
                    if(error){
                        console.error(error);
                    }
                    else{
                        console.log("File renamed successfully");
                        
                        fs.appendFile(newFilePath,"\nThis is appended data",(error)=>{
                            if(error){
                                console.error(error);
                            }
                            else{
                                console.log("Data appended successfully");
                                
                                fs.unlink(newFilePath,(error)=>{
                                    if(error){
                                        console.error(error);
                                    }
                                    else{
                                        console.log("File deleted successfully");
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});