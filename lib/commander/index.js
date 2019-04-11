const program = require("commander");
const version = require("../util/version");

const config = require("../config");

module.exports = v => {

  const camelize = (str)=>{
    return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '')
  }
  /**
   * get real options
   * @param {object} cmd | commanders cmd param
   */
  const cleanArgs = (cmd)=>{
    const args = {}
    cmd.options.forEach(o => {
      const key = camelize(o.long.replace(/^--/, ''))
      if (typeof cmd[key] !== 'function' && typeof cmd[key] !== 'undefined') {
        args[key] = cmd[key]
      }
    })
    return args
  }


  version.judgeEnv("mrgx");

  program.version(v, "-v, --version").usage("<command> [options]");

  program
    .command("git <command>")
    .description("do git actions, just like git itself")
    .allowUnknownOption()
    .action(command => {
      require("../git")(command);
    });

  program
    .command("config <cmd> [alias]")
    .alias("cfg")
    .description("manage config file | ls,addp,rmp,clean")
    .option('-b,--backup', 'same action to backup list in config')
    .action((command, alias,cmd) => {
      const options = cleanArgs(cmd)
      options.alias = alias;
      require("../config")(command, options);
    });

  program
    .command("symlink <cmd>")
    .alias("sl")
    .description("manage symlink links for backup in config")
    .action(command=>require('../symlink')(command))

  program.parse(process.argv);


};
