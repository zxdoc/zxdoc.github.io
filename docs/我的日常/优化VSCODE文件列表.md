在开发前端项目 有时候零散的配置文件非常多 眼花缭乱不是很清晰

![image-20240715092209706](https://gitee.com/zhaox010/pic-go-save/raw/master/image/202407150922774.png)

基本上就是一坨文件堆在一起！

## 启用文件嵌套

说白了就是把文件进行分组

> 配置 settings.json 配置文件

```json
"explorer.fileNesting.patterns": {
    "jsconfig.json": "jsconfig.*.json,README.md,*.json,*.js,.editorconfig,.gitignore,.npmrc,LICENSE,.env*,*.html,*.sh,Makefile"
  },
```

最终的效果

![image-20240715092450124](https://gitee.com/zhaox010/pic-go-save/raw/master/image/202407150924159.png)