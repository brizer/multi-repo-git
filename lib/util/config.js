const Promise = require('bluebird');
const chalk = require("chalk");
const findup = require('findup-sync');
const fs = require('fs-extra');
const ConfigFileName = '.mrg.config.json';

class Config {
    constructor(){
        this.config = null;
    }
    /**
     * find file by name from bottom to up
     * @param {string} fileName 
     */
    findupFile(fileName=ConfigFileName){
        let filePath  = findup(fileName);
        if(filePath){
            return filePath
        }
        console.log(chalk.red(`can not find file: ${fileName}`));
    
    }
    /**
     * get config json
     */
    getConfig (){
        if(this.config){return Promise.resolve(this.config)};
        let filePath = this.findupFile(ConfigFileName);
        if(!filePath){
            console.log(chalk.red(`please make config file: ${ConfigFileName}`));
            return;
        }
        return fs.readJSON(filePath).then(packageObj=>{
            this.config = packageObj;
            return this.config;
        }).catch(err=>{
            console.error(err)
        })
    }

    /**
     * get projects list from config
     */
    async getProjectList(){
        let config = await this.getConfig();
        if(config && config.projects){
            return config.projects;
        }else{
            console.log(chalk.red(`please set projects in ${ConfigFileName}`));
        }
    }

}



module.exports = Config
