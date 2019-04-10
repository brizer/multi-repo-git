# backup in config

Since version 1.2.0, the configuration file has become very flexible due to the introduction of backup.

Let's take a look at a configuration file with a backup:

```json
{
  "projects": [
    {
      "path": "/Users/liufang/Neteasework/front-study-wap",
      "alias": "front-study-wap"
    },
    {
      "path": "/Users/liufang/Neteasework/front-study-web",
      "alias": "front-study-web"
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

# Why you need id?

## addp with alias

When an iteration, a project path no longer exists with projects, and the next iteration adds it back. There are two ways to choose:

- switch to the path and execute `mrgx config addp` manually

- or modify configuration file `.mrgx.config.json` itself

But in the case of backup, you can quickly add project by alias in any directory
`mrgx config addp front-study-web`

I will find the corresponding configuration in the backup list and add it to the projects.

# How to modify backup content

There are 2 ways to add content to the backup list:

- modify `.mrgx.config.json` directly

- when you use mrgx in the engineering path, take the parameters `backup`, juet like `mrgx config addp -b`

There are 3 ways to remove content from the backup list:

- modify `.mrgx.config.json` directly

- when you use mrgx in the engineering path, take the parameters `backup`, juet like `mrgx config rmp -b`

- clean all config by `mrgx config clean -b`
