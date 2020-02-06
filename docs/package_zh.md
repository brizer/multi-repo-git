# package
该命令主要用于，批量给配置文件中的项目增加依赖项，目前只支持bower.json的分支依赖模式，后续根据需求可能会增加对package.json的支持。

第一次使用，你需要手动在配置文件里指明你的包管理器。

``` json
{
  "projects": [
  ],
  "backup": [
  ],
  "package": "bower"
}
```

## 用法

给所有工程增加common-layout的包依赖，且分支为feature/settle_lf_20190423

``` shell
mrgx package add -p common-layout -b feature/settle_lf_20190423
```

也可以通过增加多个包依赖，使用`,`分隔，比如：

``` shell
mrgx package add -p common-layout,ykt-config -b feature/settle_lf_20190423
```

给某一个工程front-study增加依赖包，前提是其别名alias配置在配置文件.mrgx.config.json中。
``` shell
mrgx package add -p common-layout -b feature/settle_lf_20190423 -t front-study
```


## API

### add

用于增加和修改依赖包的分支号（后续支持版本号）

## 参数

### -t --target

用于指定需要替换依赖的工程别名，不指定则取配置文件中所有projects下的工程列表

### -p --package

用于指定替换或增加哪个包的依赖。

### -b --branch

用于指定依赖包修改后的分支