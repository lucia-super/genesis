var _ = require('lodash');
var fs = require('fs');
const path = require("path");

//读取配置文件，变量config的类型是Object类型
var config = require('../genesis');

//将修改后的配置写入文件前需要先转成json字符串格式
const project_dirname = path.dirname(__dirname)

// 根据配置文件创建store模块
const store = require("./scripts/store");
store.writeStore(fs, config, project_dirname)
// 根据配置文件创建对应的screen
const screen = require("./scripts/screen");
screen.writeScreen(fs, config, project_dirname)
screen.writeScreenConfig(fs, config, project_dirname)
store.writeStoreConfig(fs, config, project_dirname);

