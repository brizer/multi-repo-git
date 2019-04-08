const program = require("commander");
const version = require("../util/version");

const config = require("../config");

module.exports = v => {
  version.judgeEnv("mrgx");

  program.version(v, "-v, --version").usage("<command> [--option [value]]");

  program
    .command("git <command>")
    .allowUnknownOption()
    .action(command => {
      require("../git")(command);
    });

  program
    .command("config [cmd]")
    .alias("cfg")
    .description("manage config file | ls,addp,rmp")
    .action(command => {
      require("../config")(command);
    });

  program.parse(process.argv);
};
