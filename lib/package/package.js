const path = require('path')
const fs = require('fs-extra')
const color = require('../util/color')
class Package{
    constructor(p){
        this.path = p
        this.depFile = ''
        this.pkg = undefined
    }

    get filePath(){
        return path.join(this.path,this.depFile)
    }

    async getPkg(){
        if(this.pkg){
            return this.pkg
        }

        this.pkg = await this.readJson(this.filePath)
        return this.pkg
    }


    async readJson(filePath = this.filePath){
        const json = undefined;
        try {
            const json = fs.readJsonSync(filePath)
            return json
        } catch (error) {
            console.log(color(error).red)
        }
    }


    async setPkg(filePath=this.filePath,content){
        this.pkg = content
        await this.writeJson(filePath,this.pkg)
    }

    async writeJson(content,filePath = this.filePath){
        await fs.writeJsonSync(
            filePath,
            content,
            { spaces: 2 }
          );
    }

}

module.exports = Package