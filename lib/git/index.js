const MrgLoop = require('../loop');
const Config = require('../util/config');

module.exports = (command)=>{
    let configIns = new Config();
    configIns.getProjectList().then(projectList=>{
        let mrgLoop = new MrgLoop({lists:projectList});
        mrgLoop.loopCommand(`${process.argv.slice(2).join(' ')}`)
    }).catch(err=>{
        console.error(err);
    })
}