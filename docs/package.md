# package

[中文文档](https://github.com/brizer/multi-repo-git/blob/master/docs/package_zh.md)

This command is mainly used to add dependencies to the items in the configuration file in batches. At present, only the branch dependency mode of bower.json is supported, and subsequent support for package.json may be added according to requirements.

First time you should add packageName into your config:

``` json
{
  "projects": [
  ],
  "backup": [
  ],
  "package": "bower"
}
```

## Usage

Add common-layout package dependencies to all projects, and branch to feature/settle_lf_20190423

``` shell
mrgx package add -p common-layout -b feature/settle_lf_20190423
```

You can also add multiple package dependencies, separated by `,` such as:

``` shell
mrgx package add -p common-layout,ykt-config -b feature/settle_lf_20190423
```

Add a dependency package to a project front-study, provided that its alias alias is configured in the configuration file .mrgx.config.json.

``` shell
mrgx package add -p common-layout -b feature/settle_lf_20190423 -t front-study
```


## API

### add

Used to add or modify the dependency package (subsequent support version number)

## Options

### -t --target

Used to specify the project alias that needs to be replaced. If not specified, the project list under all projects in the configuration file is taken.

### -p --package

A dependency that specifies which package to replace or add.

### -b --branch

Used to specify the modified branch of the dependency package

### -p --onlyUpdate

A package will be updated only when it's used by the project