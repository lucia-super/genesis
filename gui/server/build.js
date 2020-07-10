const { exec } = require('child_process');
var fs = require('fs');
const path = require('path');


function execCommand(data) {
    var config = require('../../genesis.json');
    config.modules = data;

    const isExist = fs.existsSync("../../genesis.json");
    fs.writeFile("genesis.json", JSON.stringify(config), (error) => {
        if (!error) {
            console.log("getModules : ", JSON.stringify(getModules()))

            exec('node node_modules/genesis-tools/index.js', (error, stdout, stderr) => {
                if (error) {
                    console.error(`执行的错误: ${error}`);
                    return;
                } else {
                    console.log(`stdout && stderr: ${stdout} ${stderr}`);
                }
            });
        }
    })
}

function getModules() {
    var config = require('../../genesis.json');
    return config.modules;
}


module.exports = {
    execCommand, getModules
}