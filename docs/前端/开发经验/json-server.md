# json-server

[json-server](https://github.com/typicode/json-server/) 是为前端提供简单易操作的 RestFul 接口的服务。下面来介绍使用方法，更详细的操作请查看[官方文档](https://github.com/typicode/json-server/)。

## 安装配置

在项目中执行以下命令来安装 json-server

```javascript
npm install -g json-server

或

yarn global add json-server
```

## 启动服务

然后在项目根目录中执行以下命令

- port 指运行服务的端口号
- db.json 为数据为文件（如不存在，系统会自动创建）
- 如果本地有 nginx 等服务，必须设置--host

```javascript
json-server --watch --port 3002 --host 127.0.0.1 db.json
```

## 文件结构

下面是生成的 db.json 文件结构，posts/comments/profile 为数据列表

```javascript
{
  "posts": [
    {
      "id": 1,
      "title": "json-server",
      "author": "typicode"
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "some comment",
      "postId": 1
    }
  ],
  "profile": {
    "name": "typicode"
  }
}
```

## 接口请求

json-server 支持 restful api 操作方式

- POST, PUT 或 PATCH 请求时设置 `Content-Type: application/json`

```javascript
GET    /posts
GET    /posts/1
POST   /posts
PUT    /posts/1
PATCH  /posts/1
DELETE /posts/1
```

### 获取列表

发送 get 请求来获取列表

```javascript
http://localhost:3002/posts
```

### 单个资源

下面是发送 get 请求，用于获取单个资源

```javascript
http://127.0.0.1:3002/posts/1
```

### 删除数据

删除 id 为 2 的 posts 数据，需要以 delete 请求以下接口

```javascript
http://localhost:3002/posts/2
```

### 添加数据

发送 post 请求以下接口，完成数据添加

```javascript
http://localhost:3002/posts
```

### 更新数据

put 请求以下接口，完成数据的更新

```javascript
http://localhost:3002/posts
```