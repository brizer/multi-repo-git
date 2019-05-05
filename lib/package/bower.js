const Package = require('./package')
const color = require('../util/color')

class Bower extends Package{
    constructor(...args){
        super(...args)

        this.depFile = 'bower.json'
    }

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
            console.log(color(`${this.filePath} 's work is finished \n`).green)
        } catch (error) {
            console.error(error)
        }
    }

    setDependencies(key,value){
        let dependencies = this.pkg['dependencies']
        if(dependencies[key]){
            console.log(color(`change ${this.filePath} 's dependencies ${key} from ${dependencies[key]} to ${value}`).green)
        }else{
            console.log(color(`add ${this.filePath} 's dependencies ${key} to ${value}`).green)
        }
        dependencies[key] = value
        return dependencies
    }
    setResolutions(key,value){
        let resolutions = this.pkg['resolutions']
        if(resolutions[key]){
            console.log(color(`change ${this.filePath} 's resolutions ${key} from ${resolutions[key]} to ${value}`).green)
        }else{
            console.log(color(`add ${this.filePath} 's resolutions ${key} to ${value}`).green)
        }
        resolutions[key] = value
        return resolutions
    }

}

module.exports = Bower