"use strict";

const coffee = require("coffee");

describe("bin test", () => {
  const mrgx = require.resolve("../bin/mrgx.js");

  describe("global options", () => {
    it("mrgx --help", done => {
      coffee
        .fork(mrgx, ["--help"])
        // .debug()
        .expect(
          "stdout",
          `Usage: mrgx <command> [options]\n
Options:
  -v, --version                       output the version number
  -q,--quiet                          be quiet
  -h, --help                          output usage information\n
Commands:
  git <command>                       do git actions, just like git itself
  locals <command>                    do any actions in locals dir
  cmd <command>                       do same action to list in config
  config|cfg [options] <cmd> [alias]  manage config file | ls,addp,rmp,clean,whereis
  symlink|sl <cmd>                    manage symlink links for backup in config
  package|pkg [options] <cmd>         add package depends into project\n`
        )
        .expect("code", 0)
        .end(done);
    });
    it('mrgx --version', done => {
      coffee.fork(mrgx, [ '--version' ])
        // .debug()
        .expect('stdout', '1.9.0\n')
        .expect('code', 0)
        .end(done);
    });
  });
});
