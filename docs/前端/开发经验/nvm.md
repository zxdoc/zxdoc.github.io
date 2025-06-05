# nvm

### nvm 是什么？

[**nvm（Node Version Manager）**](https://nvm.uihtm.com/) 是一个用于管理 `Node.js` 版本的命令行工具。它允许开发者在同一台机器上安装和切换多个版本的 `Node.js`，以便于在不同的项目中使用不同的 `Node.js` 版本。

#### 一、卸载node（没有安装的可以直接跳过）

nvm 是一个 nodejs 的版本管理工具。通过它可以安装和切换不同版本的 nodejs，解决 node 各种版本存在不兼容现象。但在安装之前需要先卸载之前的 nodejs

1）在控制面版或者应用列表中卸载nodejs

![image-20250407165137016](https://i-blog.csdnimg.cn/img_convert/ca3d4c88889dd7582a5f752cd07cbf6b.png)

（一般，上面删除后环境变量里面会找到删除，[nvm安装](https://so.csdn.net/so/search?q=nvm%E5%AE%89%E8%A3%85&spm=1001.2101.3001.7020)后会自动写入）  
把环境变量中和node有关的全部移除，然后点击确定

![image-20250407165218122](https://i-blog.csdnimg.cn/img_convert/8f5032851f8f42a4ab495357f7213190.png)

重启电脑，这一步主要目的是清除正在执行的Node进程，如果你能在任务管理器Q 中手动清除Node进程也是可以的，但对于小白来议重启电脑是最好的操作。

在 cmd命令Q行中输入where node|回车执行。如果有显示具体的目录，把这个目录删掉，以图中为例，这里我们就要删掉D盘下的nodeis文件夹，然后再重启。如果没有显示具体目录，说明已经卸载成功了。可以安心安装其他版本node了.

2）不行就全局搜索然后删除相关文件

注：一定要确保windows上没有nodejs，血的教训啊！

#### 二、下载安装

*   官网下载： 可选择适合自己电脑操作系统文件进行下载。
*   [网盘下载：](https://pan.quark.cn/s/23ec9b4f241b)windows\` 版本。

1、**安装 nvm 到本地**

1.1、下载到电脑本地后，双击安装程序，同意许可协议，如下：

![image-20250407165837331](https://i-blog.csdnimg.cn/img_convert/1c8ba189dd3f84609e899cae4b63c7b8.png)

![image-20250407165942783](https://i-blog.csdnimg.cn/img_convert/cafe1c82743c6050166d1e3919df15f3.png)

1.2、选择 `nvm` 的安装路径，可自定义安装路径，如下：

![image-20250407170018522](https://i-blog.csdnimg.cn/img_convert/f216590c507c39c3f6a90a1090a3356d.png)

1.3、next下一步安装至安装完成。

![image-20250407170119198](https://i-blog.csdnimg.cn/img_convert/a80e8e8a3755b406bff365d797ea36a5.png)

1.4、验证是否安装成功，以管理员身份打开命令窗口，输入 `nvm -v`，如下：

![image-20250407170157438](https://i-blog.csdnimg.cn/img_convert/0bdc2ec5ab6eecfba82ebe3cd28d3e5f.png)

#### 三、NVM切换镜像源

`nvm` 默认官方源多在国外，受服务器位置、带宽及网络状况影响，易出现下载速度慢甚至失败的情况。同时，部分地区存在网络限制，无法访问官方源。切换为国内镜像源，可显著提升下载速度，绕过网络阻碍，提高下载成功率，还能节省成本与资源。

1、 以管理员身份打开命令窗口，输入 `nvm root`，可查看 `nvm` 的具体安装路径，如下：

![image-20250407170318803](https://i-blog.csdnimg.cn/img_convert/c8b63d94c58e31dcf5d7d92d808775ac.png)

2、找到 `setting.txt` 文件并打开，如下：

![image-20250407170434277](https://i-blog.csdnimg.cn/img_convert/451b71cbc500ac098833147debc4bfbc.png)

3、复制以下代码，粘贴至 `setting.txt` 文件中，最后保存即可完成 `nvm` 源切换，如下：

```
node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/
```

![image-20250407170501003](https://i-blog.csdnimg.cn/img_convert/8f7d1f48137b074acd0cf8ef368608fa.png)

#### 四、nvm 常用命令

1、安装与卸载相关

**`nvm install <version>`**

*   **含义**  
    安装指定版本的 `Node.js`。 可以是具体的版本号，如 `18.16.0`，也可以是特定标识，像 `latest`（安装最新稳定版）、`lts`（安装长期支持版）。
*   **栗子**  
    `nvm install 16.19.1` 会安装 `Node.js 16.19.1` 版本。

![image-20250407170753680](https://i-blog.csdnimg.cn/img_convert/cd573c329a6ffc4a9d9c9a8997887fcf.png)

**`nvm uninstall <version>`**

*   **含义**  
    卸载指定版本的 `Node.js`。
*   **栗子**  
    `nvm uninstall 16.19.1` 会将已安装的 `Node.js 16.19.1` 版本卸载。
*   ![image-20250407170823740](https://i-blog.csdnimg.cn/img_convert/80a0ac5e813633fdfb019df51dc3da9a.png)

2、版本查看与管理相关

**`nvm list` 或者 `nvm ls`**

*   **含义**  
    列出当前系统中已安装的所有 `Node.js` 版本，当前正在使用的版本会有特殊标识。
*   **栗子**  
    执行该命令后，当前系统中已安装的所有 `Node.js` 版本列表，如 `v22.12.0`、`v16.14.0` 等。

![image-20250407170944675](https://i-blog.csdnimg.cn/img_convert/49bfeff520978d3ef63048f5a3efe861.png)

**`nvm list available`**

*   **含义**  
    列出所有可下载的 `Node.js` 版本，包括稳定版、测试版等。
*   **栗子**  
    运行该命令会展示一系列可下载的版本列表，如 `v23.7.0`、`v22.13.1` 等。

![image-20250407171032451](https://i-blog.csdnimg.cn/img_convert/fb0a8c99042706a33ec2d2a4eb9d37d3.png)

**`nvm current`**

*   **含义**  
    显示当前正在使用的 `Node.js` 版本。
*   **栗子**  
    当前使用的是 `Node.js 22.12.0` 版本，执行该命令会输出 `v22.12.0`。

![image-20250407171103842](https://i-blog.csdnimg.cn/img_convert/de88884c2aca89229685bdd0405bc716.png)

**`nvm use <version>`**

*   **含义**  
    切换到指定版本的 `Node.js` 环境，后续在该命令行窗口中执行的 `Node.js` 相关命令都会使用此版本。
*   **栗子**  
    `nvm use 22.12.0` 会将当前环境切换到 `Node.js 22.12.0` 版本。
*   ![image-20250407171234299](https://i-blog.csdnimg.cn/img_convert/b5a4829ae76445461a0ee0d7d0caad51.png)

3、环境配置与代理相关

**`nvm arch`**

*   **含义**  
    显示当前 `Node.js` 实例的架构（`32` 位或 `64` 位）。
*   **栗子**  
    如果当前 `Node.js` 是 `64` 位版本，执行该命令会输出 `64-bit`。

![image-20250407171400002](https://i-blog.csdnimg.cn/img_convert/ce7ea6f156b820464c59aca613a819ac.png)

**`nvm proxy`**

*   **含义**  
    用于查看设置与代理。
*   **栗子**  
    通过 `nvm arch` 查看是否代理。

![image-20250407171440876](https://i-blog.csdnimg.cn/img_convert/efa7ec6624c54d7fd954f6c37b0f0765.png)

4、帮助与版本信息

**`nvm help`**

*   **含义**  
    显示 `nvm` 的帮助文档，列出所有可用命令及其简要说明。
*   **栗子**  
    执行该命令后会展示一系列命令及对应的功能描述。

![image-20250407171530370](https://i-blog.csdnimg.cn/img_convert/832d8ca99746cdc1a09f407ac3045bfb.png)

**`nvm version`**

*   **含义**  
    显示当前安装的 `nvm` 的版本号。
*   **栗子**  
    执行后输出 `1.1.12` 这样的版本信息。

![image-20250407171610909](https://i-blog.csdnimg.cn/img_convert/588d8e82df276ffaf8564764512f0b49.png)

#### 五、结尾

在 Node.js 开发的多元场景下，nvm 作为一款强大的版本管理工具，极大地提升了开发效率与项目的稳定性。通过 nvm，开发者能够在同一系统中便捷地安装、切换不同版本的 Node.js，满足不同项目对特定 Node.js 版本的依赖需求。熟练掌握 nvm 的使用方法，能让大家更好地应对 Node.js 版本管理难题，为项目开发和维护带来便利，也是每一位 Node.js 开发者必备的技能。希望本文能助力大家更高效地运用 nvm，提升开发体验。

> 本文转自 <https://blog.csdn.net/qq_42343318/article/details/147048710>，如有侵权，请联系删除。