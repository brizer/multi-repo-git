# Multi Repo Git [![npm](https://img.shields.io/npm/v/mrgx.svg?maxAge=2592000)](https://www.npmjs.com/package/mrgx) [![Build Status](https://travis-ci.org/brizer/multi-repo-git.svg?branch=master)](https://travis-ci.org/brizer/multi-repo-git)

一个简单的命令行工具，用来管理multirepo风格的多仓库工程的git以及其他命令行操作。

# 你为何需要它？

如果你通过multirepo管理多工程，你肯定会遇到同时操作多个工程的场景，如分支修改、修改依赖等等。

这个工具就是为了让这个过程自动化，比如：

```
cd ./project1
git pull
cd ./project2
git pull
cd ./project3
git pull

```

变为

```
mrgx git pull
```

# 开始

## 安装

全局安装该命令：

`npm install mrgx -g`

## 使用

你可以通过全局配置文件的方式来管理多个项目的操作。

如果你不想增加配置文件，也可以通过[locals命令](#locals)管理位于同一个目录下的所有项目。

## 配置文件

mrgx会从电脑的跟目录下获取配置文件。

配置文件必须命名为`.mrgx.config.json`且是json格式。其路径可以参考`/Users/liufang/.mrgx.config.json`。
基本格式如下：

```json
{
  "projects": [
    {
      "path": "/Users/liufang/Neteasework/front-study"
    },
    {
      "path": "/Users/liufang/Neteasework/front-study-web"
    },
    {
      "path": "/Users/liufang/Neteasework/front-study-course"
    },
    {
      "path": "/Users/liufang/Neteasework/front-study-order"
    },
    {
      "path": "/Users/liufang/Neteasework/front-yooc"
    },
    {
      "path": "/Users/liufang/Neteasework/edu-front-2.0"
    },
    {
      "path": "/Users/liufang/Neteasework/front-study-wap"
    }
  ]
}
```

## mrgx的工作

当你完成了配置文件，就可以开始工作了。`mrgx`后面直接增加你想要操作的git命令就好了。默认是git命令，其他命令需要用到[cmd](#cmd)

![img](http://edu-image.nosdn.127.net/b22c8e19f0164cdea002b65c69b678d9.png?imageView&quality=100)

or

![img](http://edu-image.nosdn.127.net/b364fdc02c1647288d53460d31aecbab.png?imageView&quality=100)


## 子命令项

### cmd

从v1.7.0开始，可以通过`mrgx cmd ***`来执行除了git以外的其他任何命令。

``` bash
mrgx cmd pwd

mrgx cmd npm install
```


### locals

如果多项目的来源不想读取配置文件，而是直接使用当前目录下的所有文件夹，可以使用locals命令：`mrgx locals git status`, `mrgx locals ls`。

![img](https://raw.githubusercontent.com/brizer/graph-bed/master/img/20190617113620.png)


### git

最基本的git操作命令：

`mrgx git push`, `mrgx git merge master`和其他。

### config

简化对配置文件的操作。比如 `mrgx config ls`, `mrgx config addp` ,`mrgx config rmp`,`mrgx config ui`, [具体查看这里](docs/config.md)。

更进一步简化配置文件的操作，可以使用backup字段来存储下一次会用到的项目。[具体查看这里](docs/backup.md).


### symlink

建立软连接，方便是任何目录下直接打开项目。基于[sym-lnk](https://www.npmjs.com/package/sym-lnk)。  [具体查看这里](docs/symlink.md).

### package

管理项目的包依赖，通过**package**命令。现在只支持bower，如果要使用此功能，需要配置**package**字段，[具体查看这里](docs/package_zh.md).

## 选项

### **-l, --local**

开启当前目录multi-repo模式，操作的项目集不再取自配置文件，而是当前目录下的所有文件夹。

``` 
mrgx -l git status
```

### **-q, --quiet**

默认情况下所有错误会中断操作，如果不想中断，你可以通过`-q` 或者`--quiet`忽略错误，例如o

`mrgx locals -q ls`和`mrgx -q git status`


### **-e, --exclude**

排查哪些文件，仅支持local情况下使用。

在当前文件夹下除了Manhattan,growth,index.js,market以为的文件下执行`git pull`

``` bash
mrgx -e Manhattan,growth,index.js,market locals git pull
```

# 插件系统

从1.10开始，mrgx支持通过插件系统来扩展子命令。具体操作及文档请查看[插件系统。](./docs/plugin_zh.md)


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



## 插件列表

- [mrgx-plugin-exec](https://github.com/brizer/mrgx-plugin-exec) - 在多个路径中共同执行某些shell命令
- [mrgx-plugin-changed](https://github.com/brizer/mrgx-plugin-changed) - 查询哪些包未提交及其未提交的内容

# Changelog

[这里](./CHANGELOG.md)
