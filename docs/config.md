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


## addp

Add the current path to the projects filed of `.mrgx.config.json`, to simplify the operations of configurations.

### Example

Your path is `/Users/liufang/openSource/brizer`, then use 
```
mrgx config addp

mrgx config ls
```

The current Path will be added in config file:

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
      "path": "/Users/liufang/openSource/brizer"
    }
  ]
}
```


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