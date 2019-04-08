const findup = require('findup-sync');
const fs = require('fs-extra');
const color = require('./color');

const ConfigFileName = '.mrgx.config.json';

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
        console.log(color(`can not find file: ${fileName}`).red);
    
    }
    /**
     * get config json
     */
    getConfig (){
        if(this.config){return Promise.resolve(this.config)};
        let filePath = this.findupFile(ConfigFileName);
        if(!filePath){
            console.log(color(`please make config file: ${ConfigFileName}`).red);
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
            console.log(color(`please set projects in ${ConfigFileName}`)).red;
        }
    }

}



module.exports = Config
