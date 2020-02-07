const Package = require("./package");
const color = require("../util/color");
/**
 * Class bower manage
 */
class Bower extends Package {
  constructor(...args) {
    super(...args);

    this.depFile = "bower.json";
  }
  /**
   * Change the dependence of a package
   * @param {string} name - which package to change
   * @param {string} barnch - which branch to depends
   */
  async setDependence({ name, branch, onlyUpdate }) {
    try {
      this.pkg = await this.getPkg();
      let val = branch ? branch : "master";
      const nameList = name.includes(",") ? name.split(",") : [name];
      await nameList.map(async name => {
        this.pkg["dependencies"] = await this.setDependencies(
          name,
          `#${branch}`,
          onlyUpdate
        );
        this.pkg["resolutions"] = await this.setResolutions(
          name,
          `${branch}`,
          onlyUpdate
        );
      });
      await this.writeJson(this.pkg);
      console.log(color(`${this.filePath} 's work is finished \n`).green);
    } catch (error) {
      console.error(error);
    }
  }
  /**
   * Change dependencies param in bower.json
   * @param {string} key - dependencies's key
   * @param {string} value - dependencies's value
   */
  async setDependencies(key, value, onlyUpdate = false) {
    let dependencies = this.pkg["dependencies"];
    if (dependencies[key]) {
      console.log(
        color(
          `change ${this.filePath} 's dependencies ${key} from ${dependencies[key]} to ${value} \n`
        ).white
      );
      dependencies[key] = value;
    } else {
      if (onlyUpdate) {
        console.log(
          color(
            `${key} is not found in ${this.filePath} 's dependencies \n`
          ).yellow
        );
      } else {
        console.log(
          color(
            `add ${this.filePath} 's dependencies ${key} to ${value} \n`
          ).white
        );
        dependencies[key] = value;
      }
    }
    return dependencies;
  }
  /**
   * Change resolutions param in bower.json
   * @param {string} key - resolutions's key
   * @param {string} value - resolutions's value
   */
  setResolutions(key, value, onlyUpdate = false) {
    let resolutions = this.pkg["resolutions"];
    if (resolutions[key]) {
      console.log(
        color(
          `change ${this.filePath} 's resolutions ${key} from ${resolutions[key]} to ${value} \n`
        ).white
      );
      resolutions[key] = value;
    } else {
      if (onlyUpdate) {
        console.log(
          color(
            `${key} is not found in ${this.filePath} 's resolutions \n`
          ).yellow
        );
      } else {
        console.log(
          color(
            `add ${this.filePath} 's resolutions ${key} to ${value} \n`
          ).white
        );
        resolutions[key] = value;
      }
    }
    return resolutions;
  }
}

module.exports = Bower;
