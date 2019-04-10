const util = require("util")
const path = require("path")
const process = require("process")
const exec = util.promisify(require("child_process").exec)

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
      console.error(error);
      return;
    }
    let success = `${stdout}`.trim();
    console.log(color(`exec ${options.cmd} success`).green);
    return success;
  } catch (error) {
    console.error(error);

    return;
  }
};

/**
 * change process working directory
 * @param {string} path | which working directory to change
 */
let cdProcess = path => {
  console.log(color(`current directory is ${process.cwd()}`).green);
  try {
    process.chdir(path);
    console.log(color(`new directory is ${process.cwd()}`).green);
  } catch (err) {
    console.err(`chdir : ${err}`);
  }
};

module.exports = {
  exec: execS,
  cdProcess
};
