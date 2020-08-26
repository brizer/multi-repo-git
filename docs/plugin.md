


## Plugin list

If you have a good idea for a plugin, welcome to PR or Issue.

- [mrgx-plugin-exec](https://github.com/brizer/mrgx-plugin-exec) - exec command in multi projects.



## Install of plugin

First, make sure that `mrgx` was installed in global:

``` bash
npm i mrgx -g
```

Then install the plugin which is starting with `mrgx-plugin-` such as `mrgx-plugin-exec`:

``` bash
npm i mrgx-plugin-exec -g
```

Finally, you can execute the sub-commands and related logic provided by the plugin.

## Develop of plugin

You can refer to [mrgx-plugin-exec](https://github.com/brizer/mrgx-plugin-exec) as a simple plugin.

The main logic of it is:


``` js
const { MrgLoop , Config } = require("mrgx");

const exec = async (command)=>{
    //Get configuration
    const configIns = new Config();
    //Get the list of projects activated in the current configuration
    const projectList = await configIns.getProjectList()
    let cmdArr = process.argv.map( function(arg){
        return "'" + arg.replace(/'/g, "'\\''") + "'";
      });
    // Multi-process execution queue
    const loop = new MrgLoop({lists:projectList});
    // Execution commands in all paths
    loop.loopCommand((`${cmdArr.slice(3).join(' ')}`))
}
// provide a register method
module.exports.register = async (program)=>{
    //Registration and configuration of sub-commands for the syntax of commander
    program
    .command("exec <command>")
    .description("do same action to list in config")
    .allowUnknownOption()
    .action(async command => {
      await exec(command);
    });
}

```

Then publish your own package with the naming style of `mrgx-plugin-***`.

Install it globally, then you can use it:

``` bash
mrgx exec npm i
```

