# Multi Repo Git [![npm](https://img.shields.io/npm/v/mrgx.svg?maxAge=2592000)](https://www.npmjs.com/package/mrgx) [![Build Status](https://travis-ci.org/brizer/multi-repo-git.svg?branch=master)](https://travis-ci.org/brizer/multi-repo-git)

A very simple Git command line tool, to manage multiple git repositories at once.

# Why you need it?

If you manage projects using multi-repo style，or worked in a micro service environment, you have most likely been asked to worked with dozen of projects.

This tool amis to replace this:

```
cd ./project1
git pull
cd ./project2
git pull
cd ./project3
git pull

```

by that:

```
mrgx git pull
```

# Getting started

## Installing

`npm install mrgx -g` will install a `mrgx` command on your system.

## Configuration

mrgx will try to read its configuration file from the current command execution path to the ancestor root path.

The configuration file must be named `.mrgx.config.json` and be in `json` format. Its best to user it in the root directory,such as `/Users/liufang/.mrgx.config.json`

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

## Working with mrgx

When you're done configuring, you can use it directly on any path, just like git command itself.

![img](http://edu-image.nosdn.127.net/b22c8e19f0164cdea002b65c69b678d9.png?imageView&quality=100)

or

![img](http://edu-image.nosdn.127.net/b364fdc02c1647288d53460d31aecbab.png?imageView&quality=100)

## Config Params

### git

When using git, it is the same as using the native git command:
`mrgx git push`, `mrgx git merge master`, and so on.

### config

Simplify some operations on the path with the config command, such as `mrgx config ls`, `mrgx config addp` ,`mrgx config rmp`, [read here for more details](docs/config.md).

There are some more flexible and simple configuration methods, but need to be based on the **backup** configuration. [read here for more details](docs/backup.md).


### symlink

Manage symbolic links with the symlink command, so  that you can reach the project path more efficiently, all based on [sym-lnk](https://www.npmjs.com/package/sym-lnk).  [read here for more details](docs/symlink.md).

# Want to contribute?

At this stage, the tool configuration is very simple and the function is very simple. Any idea to improve this project would be greatly appreciated.
