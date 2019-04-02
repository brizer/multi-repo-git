const program = require("commander");

module.exports = v => {
  program.version(v, "-v, --version").usage("<command> [--option [value]]");

  program
    .command("git <command>")
    .allowUnknownOption()
    .action(command => {
      require("../git")(command);
    });


    program.parse(process.argv)
};
