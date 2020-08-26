const path = require("path");
const cp = require("child_process");
const fs = require("fs");
const findPlugins = (cwd) => {
  const rootDir = path.parse(cwd).root;
  const plugins = new Map();
  const onPlugin = (name, filePath, scopeName) => {
    const skipped = plugins.has(name);
    skipped || plugins.set(name, filePath);
  };

  // Search relative to `cwd` first, then search every parent directory.
  let baseDir = cwd;
  while (true) {
    findNearbyPlugins(path.join(baseDir, "node_modules"), onPlugin);
    if (baseDir !== rootDir) baseDir = path.dirname(baseDir);
    else break;
  }
  // Search relative to every directory in $NODE_PATH.
  const pathNode = process.env.NODE_PATH;
  const globalRoots = getDefaultGlobalRoot();
  globalRoots.split(":").forEach((cwd) => findNearbyPlugins(cwd, onPlugin));
  pathNode.split(":").forEach((cwd) => findNearbyPlugins(cwd, onPlugin));
  return plugins;
};

function getDefaultGlobalRoot() {
  return (cp.execSync("npm root -g") + "").trim();
}

const registerPlugin = (program, pluginPath) => {
  try {
    // require插件对应的js文件
    const plugin = require(pluginPath);
    if (plugin.register) {
      // 调用其register方法，将commander模块的对象传入插件
      plugin.register(program);
    } else {
    }
  } catch (e) {
    console.warn(`Plugin registration failed: '${pluginPath}'`);
    console.error(e);
  }
};

/** Check a directory for potentially-scoped /^mrgx-plugin-/ packages */
function findNearbyPlugins(cwd, onPlugin) {
  if (isDir(cwd)) {
    fs.readdirSync(cwd).forEach((name) => {
      const filePath = path.join(cwd, name);
      if (name[0] === "@") {
        const scopeName = name;
        const scopePath = filePath;
        fs.readdirSync(scopePath).forEach((name) => {
          if (/^mrgx-plugin-/.test(name))
            onPlugin(name, path.join(scopePath, name), scopeName);
        });
      } else if (/^mrgx-plugin-/.test(name)) {
        onPlugin(name, filePath);
      }
    });
  } else {
  }
}

function isDir(filePath) {
  try {
    return fs.statSync(filePath).isDirectory();
  } catch (e) {}
  return false;
}

module.exports = {
  findPlugins,
  registerPlugin,
};
