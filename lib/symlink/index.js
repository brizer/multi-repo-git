const symLink = require("sym-lnk");
const Config = require("../util/config");

const configIns = new Config();
/**
 * add symlink
 * @param {array} list - project list
 */
const add = list => {
  let opts = {
    configs: list,
    force: true
  };
  symLink.addSymlink(opts);
};
/**
 * remove symlink
 * @param {array} list - project list
 */
const rm = list => {
  let opts = {
    configs: list
  };
  symLink.rmSymlink(opts);
};
/**
 * logic of exec symlink command 
 * @param {string} command 
 */
const commander = async command => {
  try {
    let backup = await configIns.getBackupList();
    backup = backup || [];
    let actions = {
      add: add.bind(null, backup),
      rm: rm.bind(null, backup)
    };
    if (!actions[command]) {
      return;
    }
    actions[command]();
  } catch (err) {
    console.error(err);
  }
};

module.exports = commander;
