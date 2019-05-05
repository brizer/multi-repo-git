const Package = require('./package')
const color = require('../util/color')
/**
 * Class bower manage
 */
class Bower extends Package{
    constructor(...args){
        super(...args)

        this.depFile = 'bower.json'
    }
    /**
     * Change the dependence of a package
     * @param {string} name - which package to change
     * @param {string} barnch - which branch to depends
     */
    async setDependence({
        name,
        branch
    }){
        try {
            this.pkg = await this.getPkg()
            let val = branch?branch:'master'
            this.pkg['dependencies'] = this.setDependencies(name,`#${branch}`)
            this.pkg['resolutions'] = this.setResolutions(name,`${branch}`)
            await this.writeJson(this.pkg)
            await console.log(color(`${this.filePath} 's work is finished \n`).green)
        } catch (error) {
            console.error(error)
        }
    }
    /**
     * Change dependencies param in bower.json
     * @param {string} key - dependencies's key
     * @param {string} value - dependencies's value
     */
    setDependencies(key,value){
        let dependencies = this.pkg['dependencies']
        if(dependencies[key]){
            console.log(color(`change ${this.filePath} 's dependencies ${key} from ${dependencies[key]} to ${value} \n`).white)
        }else{
            console.log(color(`add ${this.filePath} 's dependencies ${key} to ${value} \n`).white)
        }
        dependencies[key] = value
        return dependencies
    }
    /**
     * Change resolutions param in bower.json
     * @param {string} key - resolutions's key
     * @param {string} value - resolutions's value
     */
    setResolutions(key,value){
        let resolutions = this.pkg['resolutions']
        if(resolutions[key]){
            console.log(color(`change ${this.filePath} 's resolutions ${key} from ${resolutions[key]} to ${value} \n`).white)
        }else{
            console.log(color(`add ${this.filePath} 's resolutions ${key} to ${value} \n`).white)
        }
        resolutions[key] = value
        return resolutions
    }

}

module.exports = Bower