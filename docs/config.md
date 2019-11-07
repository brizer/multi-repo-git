# config

## ls

Show mrgx config

### Example
```
mrgx config ls
```

The terminal will show content as json:

``` json
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

## ui

If you use [backup](./backup.md), you can use `mrgx config ui` to choose projects more easier.

### Example

The content of your config file `.mrgx.config.json` is :

``` json
{
  "projects": [
    {
      "path": "/Users/liufang/Neteasework/front-study-wap",
      "alias": "front-study-wap"
    }
  ],
  "backup": [
    {
      "path": "/Users/liufang/Neteasework/front-study-wap",
      "alias": "front-study-wap"
    },
    {
      "path": "/Users/liufang/Neteasework/front-study-web",
      "alias": "front-study-web"
    }
  ]
}
```

Now you want to choose `front-study-web` and `front-study-wap` together. Use `mrgx config ui`, and choose both of them:

<img src="https://raw.githubusercontent.com/brizer/graph-bed/master/img/20191107202703.png"/>

The content of your config will be:

``` json
{
  "projects": [
    {
      "path": "/Users/liufang/Neteasework/front-study-web",
      "alias": "front-study-web"
    },
    {
      "path": "/Users/liufang/Neteasework/front-study-wap",
      "alias": "front-study-wap"
    }
  ],
  "backup": [
    {
      "path": "/Users/liufang/Neteasework/front-study-wap",
      "alias": "front-study-wap"
    },
    {
      "path": "/Users/liufang/Neteasework/front-study-web",
      "alias": "front-study-web"
    }
  ]
}
```

The you can operate both of `front-study-web` and `front-study-wap`.


## addp

Add the current path to the projects filed of `.mrgx.config.json`, to simplify the operations of configurations.

### Example

Your path is `/Users/liufang/openSource/brizer`, then use 
```
mrgx config addp

mrgx config ls
```

The current Path will be added in config file with a default alias:

``` json
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
    },
    {
      "alias": "brizer",
      "path": "/Users/liufang/openSource/brizer"
    }
  ]
}
```

The alias is used to rmp quickly.

# rmp

Remove the current path from your `.mrgx.config.json`, to simplify the operations of configurations.



### Example

Your path is `/Users/liufang/openSource/brizer`, and your config files content is:
``` json
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
    },
    {
      "alias": "brizer",
      "path": "/Users/liufang/openSource/brizer"
    }
  ]
}
```

now use 
```
mrgx config rmp

mrgx config ls
```

The current Path will be removed from config file:

``` json
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

Note that you can use alias to delete the configuration anywhere sincn version 1.1.1 

