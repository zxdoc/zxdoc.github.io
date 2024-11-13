import{_ as i,c as a,a2 as t,o as n}from"./chunks/framework.DPuwY6B9.js";const E=JSON.parse('{"title":"json-server","description":"","frontmatter":{},"headers":[],"relativePath":"前端/开发经验/json-server.md","filePath":"前端/开发经验/json-server.md","lastUpdated":1731485761000}'),p={name:"前端/开发经验/json-server.md"};function h(l,s,e,k,r,d){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="json-server" tabindex="-1">json-server <a class="header-anchor" href="#json-server" aria-label="Permalink to &quot;json-server&quot;">​</a></h1><p><a href="https://github.com/typicode/json-server/" target="_blank" rel="noreferrer">json-server</a> 是为前端提供简单易操作的 RestFul 接口的服务。下面来介绍使用方法，更详细的操作请查看<a href="https://github.com/typicode/json-server/" target="_blank" rel="noreferrer">官方文档</a>。</p><h2 id="安装配置" tabindex="-1">安装配置 <a class="header-anchor" href="#安装配置" aria-label="Permalink to &quot;安装配置&quot;">​</a></h2><p>在项目中执行以下命令来安装 json-server</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm install </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g json</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">server</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">或</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yarn global add json</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">server</span></span></code></pre></div><h2 id="启动服务" tabindex="-1">启动服务 <a class="header-anchor" href="#启动服务" aria-label="Permalink to &quot;启动服务&quot;">​</a></h2><p>然后在项目根目录中执行以下命令</p><ul><li>port 指运行服务的端口号</li><li>db.json 为数据为文件（如不存在，系统会自动创建）</li><li>如果本地有 nginx 等服务，必须设置--host</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">json</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">server </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">watch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">port </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3002</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">host </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> db.json</span></span></code></pre></div><h2 id="文件结构" tabindex="-1">文件结构 <a class="header-anchor" href="#文件结构" aria-label="Permalink to &quot;文件结构&quot;">​</a></h2><p>下面是生成的 db.json 文件结构，posts/comments/profile 为数据列表</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;posts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;json-server&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;author&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;typicode&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;comments&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;body&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;some comment&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;postId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;profile&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;typicode&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="接口请求" tabindex="-1">接口请求 <a class="header-anchor" href="#接口请求" aria-label="Permalink to &quot;接口请求&quot;">​</a></h2><p>json-server 支持 restful api 操作方式</p><ul><li>POST, PUT 或 PATCH 请求时设置 <code>Content-Type: application/json</code></li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GET</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">posts</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GET</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">posts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">POST</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">posts</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PUT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">posts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PATCH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">posts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DELETE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">posts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span></code></pre></div><h3 id="获取列表" tabindex="-1">获取列表 <a class="header-anchor" href="#获取列表" aria-label="Permalink to &quot;获取列表&quot;">​</a></h3><p>发送 get 请求来获取列表</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//localhost:3002/posts</span></span></code></pre></div><h3 id="单个资源" tabindex="-1">单个资源 <a class="header-anchor" href="#单个资源" aria-label="Permalink to &quot;单个资源&quot;">​</a></h3><p>下面是发送 get 请求，用于获取单个资源</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//127.0.0.1:3002/posts/1</span></span></code></pre></div><h3 id="删除数据" tabindex="-1">删除数据 <a class="header-anchor" href="#删除数据" aria-label="Permalink to &quot;删除数据&quot;">​</a></h3><p>删除 id 为 2 的 posts 数据，需要以 delete 请求以下接口</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//localhost:3002/posts/2</span></span></code></pre></div><h3 id="添加数据" tabindex="-1">添加数据 <a class="header-anchor" href="#添加数据" aria-label="Permalink to &quot;添加数据&quot;">​</a></h3><p>发送 post 请求以下接口，完成数据添加</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//localhost:3002/posts</span></span></code></pre></div><h3 id="更新数据" tabindex="-1">更新数据 <a class="header-anchor" href="#更新数据" aria-label="Permalink to &quot;更新数据&quot;">​</a></h3><p>put 请求以下接口，完成数据的更新</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//localhost:3002/posts</span></span></code></pre></div>`,31)]))}const c=i(p,[["render",h]]);export{E as __pageData,c as default};
