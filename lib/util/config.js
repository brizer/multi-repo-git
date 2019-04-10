const findup = require("findup-sync");
const path = require("path");
const fs = require("fs-extra");
const color = require("./color");

const ConfigFileName = ".mrgx.config.json";

class Config {
  constructor() {
    this.config = null;
  }
  /**
   * find file by name from bottom to up
   * @param {string} fileName
   */
  findupFile(fileName = ConfigFileName) {
    let filePath = findup(fileName);
    if (filePath) {
      return filePath;
    }
    console.log(color(`can not find file: ${fileName}`).red);
  }
  /**
   * get config json
   */
  getConfig() {
    if (this.config) {
      return Promise.resolve(this.config);
    }
    let filePath = this.findupFile(ConfigFileName);
    if (!filePath) {
      console.log(color(`please make config file: ${ConfigFileName}`).red);
      return;
    }
    return fs
      .readJSON(filePath)
      .then(packageObj => {
        this.config = packageObj;
        return this.config;
      })
      .catch(err => {
        console.error(err);
      });
  }
  /**
   * update this.config value and return
   */
  setConfig() {
    let filePath = this.findupFile(ConfigFileName);
    if (!filePath) {
      console.log(color(`please make config file: ${ConfigFileName}`).red);
      return;
    }
    return fs
      .readJSON(filePath)
      .then(packageObj => {
        this.config = packageObj;
        return this.config;
      })
      .catch(err => {
        console.error(err);
      });
  }
  /**
   * judge is cur path in config
   * @param {array} projects | projects params in config
   */
  isCurPathInConfig(projects) {
    if (
      projects.find(item => {
        return item.path == process.cwd();
      })
    ) {
      return true;
    }
    return false;
  }
  /**
   * judge is cur alias in config
   * @param {array} projects | projects params in config
   * @param {string} alias | the alias used to compare
   */
  isCurAliasInConfig(projects, alias) {
    if (
      projects.find(item => {
        return item.alias == alias;
      })
    ) {
      return true;
    }
    return false;
  }

  /**
   * get projects list from config
   */
  async getProjectList() {
    let config = await this.getConfig();
    if (config && config.projects) {
      return config.projects;
    } else {
      console.log(color(`please set projects in ${ConfigFileName}`).red);
    }
  }

  /**
   * get backup list from config
   */
  async getBackupList() {
    let config = await this.getConfig();
    if (config && config.backup) {
      return config.backup;
    }
  }

  /**
   * get path by alias
   * @param {string} alias | alias
   */
  async getPathByAlias(alias) {
    let projects = await this.getProjectList();
    if (!this.isCurAliasInConfig(projects, alias)) {
      console.log(color(`can not found this alias in config`).red);
      return;
    }
    let [project] = projects.filter(item => {
      return item.alias == alias;
    });
    return project;
  }

  /**
   * show config file content
   */
  async ls() {
    let config = await this.getConfig();
    let Content = `${JSON.stringify(config, null, 2)}`;
    console.log(Content);
    return Content;
  }

  /**
   * add current path in config
   */
  async addp() {
    let projects = await this.getProjectList();
    let cwd = process.cwd();
    let curPath = {
      path: cwd,
      alias: cwd.split(path.sep).pop()
    };
    if (!projects) {
      return;
    }

    if (this.isCurPathInConfig(projects)) {
      console.log(color(`current path is already in config`).red);
      return;
    }
    projects.push(curPath);
    fs.writeJsonSync(
      this.findupFile(ConfigFileName),
      { projects: projects },
      { spaces: 2 }
    );
    console.log(color(`add current project path to config successful!`).green);
    await this.setConfig();
  }
  /**
   * remove current path from config
   */
  async rmp(alias) {
    let projects = await this.getProjectList();
    let newProjects;
    //if has alias param
    if (alias) {
      if (!this.isCurAliasInConfig(projects, alias)) {
        console.log(color(`can not found this alias in config`).red);
        return;
      }
      newProjects = projects.filter(item => {
        return item.alias !== alias;
      });
    } else {
      if (!this.isCurPathInConfig(projects)) {
        console.log(color(`current path is not in config`).red);
        return;
      }
      newProjects = projects.filter(item => {
        return item.path !== process.cwd();
      });
    }

    fs.writeJsonSync(
      this.findupFile(ConfigFileName),
      { projects: newProjects },
      { spaces: 2 }
    );
    console.log(color(`rm current project path from config successful!`).green);
    await this.setConfig();
  }
  /**
   * add curPath to backup
   */
  async addb(projects,curPath) {
    let backup = await this.getBackupList();
    backup = backup||[]
    backup.push(curPath);
    fs.writeJsonSync(
      this.findupFile(ConfigFileName),
      { projects:projects,backup: backup },
      { spaces: 2 }
    );
    console.log(
      color(`add current project path to config backup successful!`).green
    );
    await this.setConfig();
  }
  /**
   * remove curPath from backup list
   */
  async rmb(projects,alias) {
    let backup = await this.getBackupList();
    backup = backup||[]
    let newBackup = [];
    newBackup = backup.filter(item => {
      return item.path !== process.cwd() && item.alias !== alias;
    });
    fs.writeJsonSync(
      this.findupFile(ConfigFileName),
      { projects:projects,backup: newBackup },
      { spaces: 2 }
    );
    console.log(
      color(`rm current project path from config backup successful!`).green
    );
    await this.setConfig();
  }
}

module.exports = Config;
