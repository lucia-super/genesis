var fs = require('fs');
const path = require("path");

//读取配置文件，变量config的类型是Object类型
var config = require('../genesis');

//将修改后的配置写入文件前需要先转成json字符串格式
const project_dirname = path.dirname(__dirname)

// 根据配置文件创建store模块
fs.readFile(__dirname + "/template/store.js", 'utf8', (err, data) => {
    if (!err) {    //如果成功调用下列代码
        config.modules.forEach(element => {
            const folder = project_dirname + "/src/" + config.storeFolder + "/" + element.name
            fs.mkdir(folder, () => {
                fs.writeFile(folder + "/index.js", data, (err) => {
                    console.log("create " + element.name + ":" + err)
                })
            })
        });
    } else {
        //失败就抛出异常，具体代码操作按实际需求来写
        throw err
    }
})

// 根据配置文件创建对应的screen
fs.readFile(__dirname + "/template/list.vue", 'utf8', (err, data) => {
    if (!err) {    //如果成功调用下列代码
        config.modules.forEach(element => {
            const folder = project_dirname + "/src/" + config.viewFolder + "/" + element.name
            fs.mkdir(folder, () => {
                const preHandledData = data.replace("$placeholder", element.name);
                fs.writeFile(folder + "/list.vue", preHandledData, (err) => {
                    console.log("create " + element.name + " list:" + err)
                })
            })
        });
    } else {
        //失败就抛出异常，具体代码操作按实际需求来写
        throw err
    }
})


// const readline = require('readline');
// const storeConfig = project_dirname + "/src/" + config.storeFolder + "/index.js"
// const rl = readline.createInterface({
//     input: fs.createReadStream(storeConfig),
//     crlfDelay: Infinity
// });

// let updateContent = "";
// let markedImport = true;
// rl.on('line', (line) => {
//     updateContent += line;
//     console.log(`${line}`);
//     if (!markedImport) {
//         config.modules.forEach(element => {
//             updateContent += 'import ' + element.name + ' from "./' + element.name + '/index.js"'
//         });
//     }
//     if (line.indexOf("import") > -1) {
//         markedImport = false;
//     }
// });