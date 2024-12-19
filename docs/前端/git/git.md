

# Git 教程

## 什么是 Git

Git 是一个开源的分布式版本控制系统，能够有效管理代码的变更。Git 通过创建本地仓库来跟踪项目的历史记录，并能支持多人协作。

## 安装 Git

### Windows 安装

1. 访问 [Git 官方下载页面](https://git-scm.com/download/win)。
2. 下载并运行安装程序。
3. 安装完成后，在命令行中输入 `git --version` 来确认安装成功。

### macOS 安装

在终端输入以下命令安装 Git：

```bash
brew install git
```

### Linux 安装

对于基于 Debian 或 Ubuntu 的系统，使用以下命令安装：

```bash
sudo apt update
sudo apt install git
```

对于 Red Hat 或 CentOS，使用：

```bash
sudo yum install git
```

## 创建和管理 Git 仓库

### 创建新的 Git 仓库

在项目目录中初始化 Git 仓库：

```bash
git init
```

该命令会创建一个 `.git` 目录来跟踪版本信息。

### 克隆现有仓库

从远程仓库克隆代码：

```bash
git clone <repository-url>
```

例如：

```bash
git clone https://github.com/username/repository.git
```

## 基本操作

### 查看状态

查看当前文件的状态：

```bash
git status
```

此命令会显示哪些文件已被修改、哪些文件已暂存，哪些文件未被跟踪。

### 添加文件到暂存区

将文件添加到暂存区，以便于提交：

```bash
git add <file-name>
```

如果要添加所有已修改的文件：

```bash
git add .
```

### 提交更改

将暂存区的文件提交到本地仓库：

```bash
git commit -m "提交信息"
```

提交时，`-m` 后面的文本为提交说明，简明扼要地描述此次提交的内容。

### 查看提交历史

查看仓库的提交历史：

```bash
git log
```

简洁模式：

```bash
git log --oneline
```
## 贮藏
有时你正在进行某项工作，但突然需要切换到另一个任务或者分支，且不想提交当前的更改。此时，你可以使用 `git stash` 将当前的更改保存起来，然后恢复工作。
```bash
git stash
```
#### 查看贮藏的内容
当你有多个 stash 时，可以通过以下命令查看它们的列表：
```bash
git stash list
```
该命令会显示所有保存的 stash，以及对应的索引编号。例如：
```bash
stash@{0}: WIP on master: abc1234 Added new feature
stash@{1}: WIP on feature-x: def5678 Work in progress on feature-x
```
#### 恢复贮藏的内容

```bash
git stash apply
```
如果你想恢复特定的 stash，可以指定它的编号。例如，恢复 stash@{1}：
```bash
git stash apply stash@{1}
```
#### 删除贮藏的内容
```bash
git stash clear
```
#### 恢复并删除贮藏内容
```bash
git stash pop
```
#### 查看具体的贮藏内容
```bash
git stash show stash@{0}
```
如果你想查看更详细的差异内容，可以加上 -p 选项：
```bash
git stash show -p stash@{0}
```
## rebase多次提交合并

在 Git 中，合并多个提交为一个提交是一项常见的操作，特别是在整理和优化提交历史时。本文将介绍如何使用 Git 的不同命令（如 `rebase` 和 `merge --squash`）来合并多个提交。

#### 查看提交历史

```bash 
git log --oneline
```

```bash
git log --oneline -n 5
```

例如，假设你的提交历史如下：

```bash
a1b2c3d Commit 4
e4f5g6h Commit 3
i7j8k9l Commit 2
m0n1o2p Commit 1
```

#### 启动交互式 Rebase

使用 `git rebase -i` 命令来选择你要合并的提交。在这个例子中，我们选择最近的 3 个提交来合并。

```bash
git rebase -i HEAD~3
```

#### 选择合并提交

这时 Git 会打开一个文本编辑器，显示以下内容：

```bash
pick i7j8k9l Commit 2
pick e4f5g6h Commit 3
pick a1b2c3d Commit 4
```

将第二个和第三个提交的 `pick` 改为 `squash`（或简写为 `s`），表示将这些提交合并到第一个提交中：

```bash
pick i7j8k9l Commit 2
squash e4f5g6h Commit 3
squash a1b2c3d Commit 4
```

#### 编辑合并后的提交信息

保存并退出编辑器后，Git 会提示你编辑合并后的提交信息。你可以选择修改默认的提交信息，或者保留原来的信息。

#### 完成 Rebase

完成编辑后，保存并退出，Git 会自动合并这些提交。如果一切顺利，多个提交将被合并为一个提交。

#### 退出当前Rebase 状态

如果在 rebase 过程中遇到冲突，Git 会暂停并提示你解决冲突。在解决完冲突后，你需要运行以下命令继续：

```bash
git rebase --continue
```

如果你决定放弃当前的 rebase 操作，可以使用以下命令回到原来的提交状态：

```bash
git rebase --abort
```

这将会撤销当前的 rebase 操作，恢复到最初的状态。

#### 推送更改（如果有远程仓库）

如果你已经将这些提交推送到远程仓库，并且需要更新远程分支，你可以使用 `git push --force` 来强制推送更改：

```
git push --force
```

**注意：** 强制推送会覆盖远程分支的历史，因此在多人协作时要小心使用。

## 分支管理

### 查看分支

查看所有本地分支：

```bash
git branch
```

查看远程分支：

```bash
git branch -r
```

### 创建和切换分支

创建一个新分支并切换到该分支：

```bash
git checkout -b <branch-name>
```

从 Git 2.23 版本开始，使用 `git switch` 也可以：

```bash
git switch -c <branch-name>
```

切换到提交的 commit-id 历史版本

```bash
git log
```

```bash
git checkout commit-id
```

以历史版本 `commit-id` 创建新分支

```bash	
git checkout commit-id -b 新分支名称
```

### 合并分支

将某个分支的更改合并到当前分支：

```bash
git merge <branch-name>
```

### 删除分支

删除本地分支：

```bash
git branch -d <branch-name>
```

如果分支没有合并过，使用 `-D` 强制删除：

```bash
git branch -D <branch-name>
```

删除远程分支：

```bash
git push origin --delete <branch-name>
```

## 远程仓库操作

### 克隆仓库

从远程仓库克隆代码：

```bash
git clone <repository-url>
```

### 添加远程仓库

添加远程仓库：

```bash
git remote add origin <repository-url>
```

### 推送代码

将本地的更改推送到远程仓库：

```bash
git push origin <branch-name>
```

### 拉取代码

从远程仓库拉取最新的更改并合并：

```bash
git pull origin <branch-name>
```

## 版本回退与恢复

### `git reset`

`git reset` 用于回退到某个特定提交。常用选项：

- `--soft`：回退到某个提交，修改保留在暂存区。
- `--mixed`：回退到某个提交，修改保留在工作区。
- `--hard`：回退到某个提交，修改丢失。

```bash
git reset --soft <commit-hash>
git reset --mixed <commit-hash>
git reset --hard <commit-hash>
git reset HEAD^
git reset HEAD~2
git reset --mixed HEAD^
git reset --mixed HEAD~2
```

### `git revert`

生成一个新的提交来撤销指定的提交：

```bash
git revert <commit-hash>
```

### `git checkout`

切换到指定的提交或分支：

```bash
git checkout <commit-hash>
git checkout <branch-name>
```

## 解决合并冲突

合并分支时，如果存在冲突，Git 会标记冲突的文件。你需要手动解决冲突，冲突标记通常如下：

```bash
<<<<<<< HEAD
当前分支的内容
=======
目标分支的内容
>>>>>>> <branch-name>
```

解决冲突后，删除标记并保存文件。然后执行：

```bash
git add <file-name>
git commit
```

## Git 配置与优化

### 配置用户信息

设置 Git 用户名和邮箱：

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 设置默认编辑器

设置 Git 使用的默认编辑器：

```bash
git config --global core.editor "nano"
```

你可以将 `"nano"` 替换为你喜欢的编辑器（如 `"vim"` 或 `"code"`）。

## Git 高级功能

### 子模块管理

Git 子模块允许在一个 Git 仓库内嵌套另一个仓库。添加子模块：

```bash
git submodule add <repository-url> <path>
```

初始化并更新子模块：

```bash
git submodule init
git submodule update
```

### 标签管理

标签用于标记项目的重要版本。创建标签：

```bash
git tag <tag-name>
```

列出所有标签：

```bash
git tag
```

推送标签到远程仓库：

```bash
git push origin <tag-name>
```

### 代理

禁用和启用 Git 的代理非常简单，你可以根据需求随时操作。以下是详细的步骤：

####  **禁用代理**
要禁用 Git 的代理，你可以通过以下命令移除当前的代理设置：

- **禁用全局代理：**
  这会从全局配置中移除代理设置，使 Git 在接下来的所有操作中不再使用代理。

  ```bash
  git config --global --unset http.proxy
  git config --global --unset https.proxy
  ```

- **禁用当前目录的代理：**
  如果你只想禁用某个项目或某个目录的代理，可以在该目录下运行以下命令：

  ```bash
  git config --unset http.proxy
  git config --unset https.proxy
  ```

  这样，仅当前项目会失去代理配置，不会影响其他 Git 项目。

- **检查代理是否被禁用：**
  可以通过以下命令检查当前是否存在代理设置：

  ```bash
  git config --get http.proxy
  git config --get https.proxy
  ```

  如果没有返回任何值，表示代理已经被禁用。

####  **启用代理**
如果你想恢复代理设置，可以使用以下命令重新启用代理：

- **启用全局代理：**
  假设你的代理地址是 `127.0.0.1:7890`，你可以重新设置代理：

  ```bash
  git config --global http.proxy http://127.0.0.1:7890
  git config --global https.proxy https://127.0.0.1:7890
  ```

  这样会在全局范围内启用代理。

- **启用当前目录的代理：**
  如果你只想在某个 Git 项目中启用代理，可以在该目录下运行以下命令：

  ```bash
  git config http.proxy http://127.0.0.1:7890
  git config https.proxy https://127.0.0.1:7890
  ```

  这样只会影响当前项目，不会改变全局设置。

- **检查代理是否已启用：**
  你可以通过以下命令检查代理是否设置正确：

  ```bash
  git config --get http.proxy
  git config --get https.proxy
  ```

  如果代理设置正确，它们会显示你设置的代理地址（例如：`http://127.0.0.1:7890`）。

**总结**

- **禁用代理：** 使用 `git config --global --unset` 或 `git config --unset` 移除代理配置。
- **启用代理：** 使用 `git config --global` 或 `git config` 设置代理地址。
