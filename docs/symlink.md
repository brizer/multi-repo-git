# symlink



## Usage


``` shell
$ mrgx symlink add

create symlink from front-study -> /Users/liufang/Neteasework/front-study successful
create symlink from front-study-web -> /Users/liufang/Neteasework/front-study-web successful
```

Then you can jump to `/Users/liufang/Neteasework/front-study` by `cd front-study`

Since it's based on symbolic links, you'd better **use it in your root directory** so that you can more easily jump to any project folder via an alias.

## API

### mrgx symlink add

add symbolic links to current path, based on `backup` which is defined in `.mrgx.config.json`


### mrgx symlink rm

remove symbolic links from current path, based on `backup` which is defined in `.mrgx.config.json`



