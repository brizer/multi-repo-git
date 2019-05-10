const MrgLoop = require('../loop');
const Config = require('../util/config');

module.exports = (command)=>{
    let configIns = new Config();
    configIns.getProjectList().then(projectList=>{
        let mrgLoop = new MrgLoop({lists:projectList});
        //handle quote in command, like mrgx commit -m'style: something'
        let cmdArr = process.argv.map( function(arg){
          return "'" + arg.replace(/'/g, "'\\''") + "'";
        });
        mrgLoop.loopCommand(`${cmdArr.slice(2).join(' ')}`)
    }).catch(err=>{
        console.error(err);
    })
}