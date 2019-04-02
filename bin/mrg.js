#!/usr/bin/env node

// Check node version before requiring/doing anything else
// The user may be on a very old node version
const findup = require('findup-sync');

const versionUtil = require("../lib/util/version");
const Config = require("../lib/util/config");
const MrgLoop = require("../lib/loop");
const registCommander = require('../lib/commander')
//judge environment factors
versionUtil.judgeEnv("mrg");

let config = new Config();
config.getProjectList().then(projectList => {
  let mrgLoop = new MrgLoop({ lists: projectList });
  // mrgLoop.loopCommand('git pull');
});


const pkg = require(findup('package.json', { cwd: __dirname }));

// 注册命令
registCommander(pkg.version);