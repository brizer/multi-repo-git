const program = require("commander");
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
        let startIndex = 2;
        if(program.quiet || program.locals){
            startIndex += 1;
        }
        mrgLoop.loopCommand(`${cmdArr.slice(startIndex).join(' ')}`)
    }).catch(err=>{
        console.error(err);
    })
}