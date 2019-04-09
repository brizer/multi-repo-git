const Config = require('../util/config');

module.exports = (command,alias)=>{
    let configIns = new Config();

    let actions = {
        ls:configIns.ls.bind(configIns),
        addp:configIns.addp.bind(configIns),
        rmp:configIns.rmp.bind(configIns)
    }
    if (!actions[command]) {
        return;
    }
    actions[command](alias)
}