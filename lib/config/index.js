const Config = require('../util/config');

module.exports = (command,options)=>{
    let configIns = new Config();

    let actions = {
        ls:configIns.ls.bind(configIns),
        addp:configIns.addp.bind(configIns),
        rmp:configIns.rmp.bind(configIns),
        clean:configIns.clean.bind(configIns)
    }
    if (!actions[command]) {
        return;
    }
    actions[command](options)
}