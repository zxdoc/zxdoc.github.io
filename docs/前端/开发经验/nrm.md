# NRM (NPM Registry Manager) 安装教程

`nrm` 是一个方便的 npm registry 管理工具，可以帮助你轻松切换不同的 npm 镜像源。通过 `nrm`，你可以快速切换到淘宝、npm 官方或其他自定义的镜像源，以加速 npm 的安装速度。

## 安装 NRM

### 1. 使用 npm 安装

首先，确保你已经安装了 Node.js 和 npm。如果还没有安装，可以参考 [Node.js 官网](https://nodejs.org/) 进行安装。

在终端中运行以下命令来安装 `nrm`：

```bash
npm install -g nrm
```

安装完成后，可以使用以下命令来验证 `nrm` 是否安装成功：

```bash
nrm -v
```

如果安装成功，终端会显示 `nrm` 的版本号。

### 2. 使用 yarn 安装

如果你使用的是 `yarn`，可以通过以下命令安装 `nrm`：

```bash
yarn global add nrm
```

同样，安装后可以通过以下命令验证安装：

```bash
nrm -v
```

## 使用 NRM

### 1. 查看可用的 npm 源

使用 `nrm ls` 命令查看当前可用的 npm 源列表：

```bash
nrm ls
```

你会看到类似如下输出：

```bash
*  npm ----- https://registry.npmjs.org/
   yarn ---- https://registry.yarnpkg.com
   taobao -- https://registry.npm.taobao.org
   cnpm ---- https://r.cnpmjs.org/
```

其中，`*` 标记的是当前使用的源。

### 2. 切换 npm 源

你可以使用 `nrm use <source>` 命令来切换到不同的 npm 镜像源。

例如，要切换到淘宝源：

```bash
nrm use taobao
```

如果你想切换回默认的 npm 官方源：

```bash
nrm use npm
```

### 3. 添加自定义 npm 源

如果你想添加一个自定义的 npm 源，可以使用 `nrm add <source> <url>` 命令。例如：

```bash
nrm add myregistry https://myregistry.example.com/
```

这会将 `https://myregistry.example.com/` 添加为 `myregistry` 源。

### 4. 删除自定义 npm 源

如果你不再需要某个自定义源，可以使用 `nrm del <source>` 来删除它：

```bash
nrm del myregistry
```

### 5. 使用其他命令

- **查看当前使用的源**:

  ```bash
  nrm current
  ```

- **更新 `nrm` 本身**:

  ```bash
  npm update -g nrm
  ```

## 总结

通过 `nrm`，你可以轻松切换不同的 npm 镜像源，加速包的下载和安装过程。无论是国内的淘宝镜像还是官方源，`nrm` 都能帮助你更高效地管理 npm 镜像。

> 注意：如果你遇到 `nrm` 安装失败或网络问题，可以尝试使用 `cnpm` 或其他镜像源作为备选。