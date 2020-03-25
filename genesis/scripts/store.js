
var _ = require('lodash');

function writeStore(fs, config, project_dirname) {
    const data = fs.readFileSync(__dirname + "/../template/store.js")
    if (data) {
        config.modules.forEach(element => {
            const folder = project_dirname + "/src/" + config.storeFolder + "/" + element.name;
            const isExist = fs.existsSync(folder);
            if (!isExist) {
                fs.mkdirSync(folder);
                fs.writeFileSync(folder + "/index.js", data);
            } else if (isExist && element.update) {
                fs.writeFileSync(folder + "/index.js", data);
            }
        });
    } else {
        //失败就抛出异常，具体代码操作按实际需求来写
        console.error('读取store异常')
    }
}

function writeStoreConfig(fs, config, project_dirname, callback) {
    const readline = require('readline');
    const storeConfig = project_dirname + "/src/" + config.storeFolder + "/index.js"
    const rl = readline.createInterface({
        input: fs.createReadStream(storeConfig),
        crlfDelay: Infinity
    });

    const importedComponents = [];
    let storeContent = ""
    rl.on('line', (line) => {
        if (line.indexOf("import") > -1) {
            importedComponents.push({ key: line.split(" ")[1], value: line })
        }
    }).on('close', function () {
        config.modules.forEach(element => {
            if (_.filter(importedComponents, { key: element.name }).length === 0) {
                importedComponents.push({ key: element.name, value: 'import ' + element.name + ' from "./' + element.name + '/index.js";' })
            }
        });

        let importContent = "";
        let exportContent = "";
        _.forEach(importedComponents, (item) => {
            importContent += item.value + "\n";
            exportContent += item.key + ",\n";
        })
        const exportData = `export default { \n${exportContent}}`;
        storeContent = importContent + exportData;
        fs.writeFileSync(storeConfig, storeContent);
        callback && callback();
        process.exit(0);
    });
}

module.exports = {
    writeStore,
    writeStoreConfig
}
// 根据配置文件创建store模块