#!/usr/bin/env node

// Check node version before requiring/doing anything else
// The user may be on a very old node version

const registCommander = require('../lib/commander')
const curVersion = require("../package.json").version;

// 注册命令
registCommander(curVersion);