const util = require("util");
const exec = util.promisify(require("child_process").exec);

const color = require("./color");
/**
 * exec a command
 * @param {object} options
 * @param {string} options.cmd | command
 */
let execS = async options => {
  options.cmd = options.cmd || options.command;
  try {
    const { stdout, error } = await exec(options.cmd);
    if (error) {
      if (errorCb) errorCb(error);

      return;
    }
    let success = `${stdout}`.trim();
    color(`exec ${options.cmd} success`).green;
    return success;
  } catch (err) {
    if (errorCb) errorCb(err);
    return;
  }
};

module.exports = execS;
