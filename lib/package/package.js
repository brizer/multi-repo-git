const path = require('path')
const fs = require('fs-extra')
const color = require('../util/color')
/** Class package manage */
class Package{
    /**
     * Create a package
     * @param {string} p - projectPath 
     */
    constructor(p){
        this.path = p
        this.depFile = ''
        this.pkg = undefined
    }
    /**
     * Get the filePath value
     * @return {string} filePath
     */
    get filePath(){
        return path.join(this.path,this.depFile)
    }
    /**
     * Get Pkg content
     * @retrun {object} pkg - package.json or bower.json
     */
    async getPkg(){
        if(this.pkg){
            return this.pkg
        }

        this.pkg = await this.readJson(this.filePath)
        return this.pkg
    }

    /**
     * Read file and get json content
     * @param {string} filePath - filePath to read
     */
    async readJson(filePath = this.filePath){
        const json = undefined;
        try {
            const json = fs.readJsonSync(filePath)
            return json
        } catch (error) {
            console.log(color(error).red)
        }
    }

    /**
     * Set Pkg content into file
     * @param {string} filePath - filePaht to set
     * @param {object} content - pkg content to set
     */
    async setPkg(filePath=this.filePath,content){
        this.pkg = content
        await this.writeJson(filePath,this.pkg)
    }
    /**
     * write json content to a file
     * @param {object} content - file content
     * @param {string} filePath - filePath to write
     */
    async writeJson(content,filePath = this.filePath){
        await fs.writeJsonSync(
            filePath,
            content,
            { spaces: 2 }
          );
    }

}

module.exports = Package