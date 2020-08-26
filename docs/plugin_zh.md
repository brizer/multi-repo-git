


## 插件列表

如果有好的插件欢迎提PR。

- [mrgx-plugin-exec](https://github.com/brizer/mrgx-plugin-exec) - 在多个工程中共同执行某些shell命令
- [mrgx-plugin-changed](https://github.com/brizer/mrgx-plugin-changed) - 查询哪些包未提交及其未提交的内容



## 插件的安装

首先确保mrgx被正常全局安装过：

``` bash
npm i mrgx -g
```

然后安装以`mrgx-plugin-`开头的对应插件比如`mrgx-plugin-exec`:

``` bash
npm i mrgx-plugin-exec -g
```

就可以执行对应插件提供的子命令和相关逻辑了。

## 插件的开发

一个简单的插件开发可以参考[mrgx-plugin-exec](https://github.com/brizer/mrgx-plugin-exec)。


主要的逻辑为：



``` js
const { MrgLoop , Config } = require("mrgx");

const exec = async (command)=>{
    //获取配置
    const configIns = new Config();
    //获取当前配置中激活的工程列表
    const projectList = await configIns.getProjectList()
    let cmdArr = process.argv.map( function(arg){
        return "'" + arg.replace(/'/g, "'\\''") + "'";
      });
    // 多进程执行队列
    const loop = new MrgLoop({lists:projectList});
    // 所有工程执行命令
    loop.loopCommand((`${cmdArr.slice(3).join(' ')}`))
}
// 提供一个register方法
module.exports.register = async (program)=>{
    //针对commander的语法进行子命令的注册和配置
    program
    .command("exec <command>")
    .description("do same action to list in config")
    .allowUnknownOption()
    .action(async command => {
      await exec(command);
    });
}

```

然后发布自己的包，以`mrgx-plugin-***`的命名风格。

全局安装它，然后就可以使用了：

``` bash
mrgx exec npm i
```