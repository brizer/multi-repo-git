const MrgLoop = require('../loop');
const Config = require('../util/config');
const color = require('../util/color');
/**
 * Add or Change dependencies 
 * @param {object} options 
 */
const add = async (options)=>{
    const configIns = new Config()
    let projectList = []
    const packageName = await configIns.getPackageManage()
    if(options.target){
        projectList = Array.of(await configIns.getPathByAlias(options.target))
    }else{
        projectList = await configIns.getProjectList()
    }
    const mrgLoop = new MrgLoop({
        lists:projectList,
        packageName:packageName
    })

    mrgLoop.setDependence({
        name:options.package,
        branch:options.branch
    })

}
/**
 * Package command enter
 * @param {string} command 
 * @param {object} options 
 */
const commander = async (command,options) =>{
    try {
        const actions = {
            add: add.bind(null,options)
        }
        if(!actions[command]){
            return;
        }
        actions[command](options)
    } catch (error) {
        console.error(error)
    }
}

module.exports = commander