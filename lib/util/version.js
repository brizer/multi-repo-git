const semver = require("semver");
const color = require('./color');
const requireVersion = require("../../package.json").engines.node;


/**
 * check Node Version
 * @param {string} curVersion - current node version
 * @param {string} wanted - minimum support node version
 * @returns {boolean} - whether to support
 */
let checkNodeVersion = (
  curVersion = process.version,
  wanted = requireVersion
) => {
  if (!semver.satisfies(curVersion, wanted)) {
    return false;
  }
  return true;
};

/**
 * judge current Env
 * @param {string} wanted - minimum support node version
 * @param {string} id - npm package name
 * @returns {void}
 */
let judgeEnv = (id,wanted = requireVersion) => {
  if (checkNodeVersion()) {
    return;
  } else {
    console.log(
      color(
        `You are using Node  ${
          process.version
        } , but this version of ${id} equires Node ${wanted} .\nPlease upgrade your Node version.`
      ).red
    );
    process.exit(1);
  }
};

module.exports = {
  judgeEnv,
  checkNodeVersion
};
