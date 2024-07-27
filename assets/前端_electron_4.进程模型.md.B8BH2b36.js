import{_ as s,c as n,o as a,a4 as p}from"./chunks/framework.IpiIUH1b.js";const b=JSON.parse('{"title":"多进程模型 ​","description":"","frontmatter":{},"headers":[],"relativePath":"前端/electron/4.进程模型.md","filePath":"前端/electron/4.进程模型.md","lastUpdated":1722073289000}'),e={name:"前端/electron/4.进程模型.md"},t=p(`<h1 id="多进程模型-​" tabindex="-1">多进程模型 <a href="#多进程模型">​</a> <a class="header-anchor" href="#多进程模型-​" aria-label="Permalink to &quot;多进程模型 [​](#多进程模型)&quot;">​</a></h1><p>Electron 将使用两种类型的进程：<a href="https://www.electronjs.org/zh/docs/latest/tutorial/process-model#the-main-process" target="_blank" rel="noreferrer">主进程</a> 和 <a href="https://www.electronjs.org/zh/docs/latest/tutorial/process-model#the-renderer-process" target="_blank" rel="noreferrer">渲染器进程</a>。</p><p><img src="https://gitee.com/zhaox010/pic-go-save/raw/master/image/202406271513696.png" alt="image-20240627151356658"></p><p>不同进程承载着不同的任务，本章讨论的进程通信（IPC）就是解决不同进程间任务传递的方式。</p><ul><li>比如渲染进程通过主进程调用原生Node.js API，比如文件操作</li><li>主进程通过原生菜单改变渲染进程页面内容</li><li>IPC通信使用 <a href="https://www.electronjs.org/zh/docs/latest/api/ipc-main" target="_blank" rel="noreferrer"><code>ipcMain</code></a> 和 <a href="https://www.electronjs.org/zh/docs/latest/api/ipc-renderer" target="_blank" rel="noreferrer"><code>ipcRenderer</code></a> 两个模块传递消息</li></ul><h3 id="主进程-​" tabindex="-1">主进程 <a href="#主进程">​</a> <a class="header-anchor" href="#主进程-​" aria-label="Permalink to &quot;主进程 [​](#主进程)&quot;">​</a></h3><p>每个 Electron 应用都有一个单一的主进程，作为应用程序的入口点。 主进程在 Node.js 环境中运行，这意味着它具有使用 Node.js API 的能力。</p><p>主进程的主要目的是使用 <a href="https://www.electronjs.org/zh/docs/latest/api/browser-window" target="_blank" rel="noreferrer"><code>BrowserWindow</code></a> 模块创建和管理应用程序窗口。</p><h3 id="渲染器进程-​" tabindex="-1">渲染器进程 <a href="#渲染器进程">​</a> <a class="header-anchor" href="#渲染器进程-​" aria-label="Permalink to &quot;渲染器进程 [​](#渲染器进程)&quot;">​</a></h3><p>每个 Electron 应用都会为使用 <code>BrowserWindow</code> 打开的窗口生成一个单独的渲染器进程。</p><p>默认情况下渲染进程与主进程使用 preload.js预加载做为通信桥梁。</p><h2 id="预加载脚本-​" tabindex="-1">预加载脚本 <a href="#预加载脚本">​</a> <a class="header-anchor" href="#预加载脚本-​" aria-label="Permalink to &quot;预加载脚本 [​](#预加载脚本)&quot;">​</a></h2><p>预加载（preload）脚本包含了那些执行于渲染进程中，且先于网页内容开始加载的代码 。这些脚本虽运行于渲染器的环境中，却因能访问有限的 Node.js、Electron高级权限。</p><p>因为Electron项目与其他桌面应用是有区别的，他具有浏览器的特性，所以开放主进程的node.js给渲染进程，是有安全隐患的。默认electron是不会开放高级权限给渲染进程，而是要求开发者自行决定渲染进程可以使用哪些主进程任务，这块功能就要在预加载脚本中完成。</p><p>预加载脚本像一个桥接器，用于渲染脚本renderer.js与main.js脚本的连接。</p><h3 id="基础知识-​" tabindex="-1">基础知识 <a href="#基础知识">​</a> <a class="header-anchor" href="#基础知识-​" aria-label="Permalink to &quot;基础知识 [​](#基础知识)&quot;">​</a></h3><p>预加载脚本运行在具有 HTML DOM APIs 和 Node.js、Electron 的有限功能访问权限的环境中。</p><p>Preload.js 是渲染进程与主进程通信的桥梁。</p><p><strong>使用场景</strong></p><ul><li>使用有限的node.js、Electron高级api</li><li>主进程与渲染进程进行IPC通信，比如渲染进程让主进程帮助在本地保存文件</li></ul><h3 id="使用示例-​" tabindex="-1">使用示例 <a href="#使用示例">​</a> <a class="header-anchor" href="#使用示例-​" aria-label="Permalink to &quot;使用示例 [​](#使用示例)&quot;">​</a></h3><p>下面使用预加载脚本preload.js，通过node 的process查看软件版本的信息</p><p>main.js 主进程脚本</p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const { BrowserWindow, app } = require(&#39;electron&#39;)</span></span>
<span class="line"><span>const path = require(&#39;path&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const createWindow = () =&gt; {</span></span>
<span class="line"><span>  const win = new BrowserWindow({</span></span>
<span class="line"><span>    width: 300,</span></span>
<span class="line"><span>    height: 300,</span></span>
<span class="line"><span>    webPreferences: {</span></span>
<span class="line"><span>    	//预加载脚本</span></span>
<span class="line"><span>      preload: path.resolve(__dirname, &#39;preload.js&#39;),</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  win.loadFile(path.resolve(__dirname, &#39;index.html&#39;))</span></span>
<span class="line"><span>  win.webContents.openDevTools()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.whenReady().then(() =&gt; {</span></span>
<span class="line"><span>  createWindow()</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>preload.js 预加载脚本</p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>document.addEventListener(&#39;DOMContentLoaded&#39;, () =&gt; {</span></span>
<span class="line"><span>  for (const soft of [&#39;chrome&#39;, &#39;electron&#39;, &#39;node&#39;]) {</span></span>
<span class="line"><span>    console.log(soft)</span></span>
<span class="line"><span>    document.querySelector(\`#\${soft}\`).innerHTML = \`\${soft}:\` + process.versions[soft]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>index.html 模板文件</p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>  &lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot; /&gt;</span></span>
<span class="line"><span>    &lt;meta http-equiv=&quot;Content-Security-Policy&quot; content=&quot;default-src &#39;self&#39;; script-src &#39;self&#39;&quot; /&gt;</span></span>
<span class="line"><span>    &lt;meta http-equiv=&quot;X-Content-Security-Policy&quot; content=&quot;default-src &#39;self&#39;; script-src &#39;self&#39;&quot; /&gt;</span></span>
<span class="line"><span>    &lt;title&gt;electron&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;/head&gt;</span></span>
<span class="line"><span>  &lt;body&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;chrome&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;node&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;electron&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;renderer.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>  &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>最终会打印出node、electron、chrome版本信息</p><p><img src="https://gitee.com/zhaox010/pic-go-save/raw/master/image/202406271514264.png" alt="image-20240627151428234"></p><h2 id="进程通信-​" tabindex="-1">进程通信 <a href="#进程通信">​</a> <a class="header-anchor" href="#进程通信-​" aria-label="Permalink to &quot;进程通信 [​](#进程通信)&quot;">​</a></h2><p>下面介绍主进程与渲染进程是如何进行通信的。</p><h3 id="渲染进程到主进程-​" tabindex="-1">渲染进程到主进程 <a href="#渲染进程到主进程">​</a> <a class="header-anchor" href="#渲染进程到主进程-​" aria-label="Permalink to &quot;渲染进程到主进程 [​](#渲染进程到主进程)&quot;">​</a></h3><p>下面介绍渲染进程向主进程通信，这是单向通信行为。本例实现的功能是渲染进程向主进程发送请求，更改窗口标题。</p><p><strong>main.js</strong></p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const { BrowserWindow, app, ipcMain } = require(&#39;electron&#39;)</span></span>
<span class="line"><span>const path = require(&#39;path&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const createWindow = () =&gt; {</span></span>
<span class="line"><span>  const win = new BrowserWindow({</span></span>
<span class="line"><span>    width: 300,</span></span>
<span class="line"><span>    height: 300,</span></span>
<span class="line"><span>    alwaysOnTop: true,</span></span>
<span class="line"><span>    x: 1500,</span></span>
<span class="line"><span>    y: 100,</span></span>
<span class="line"><span>    webPreferences: {</span></span>
<span class="line"><span>      preload: path.join(__dirname, &#39;preload.js&#39;),</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  win.webContents.openDevTools()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  win.loadFile(path.resolve(__dirname, &#39;index.html&#39;))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.whenReady().then(() =&gt; {</span></span>
<span class="line"><span>  createWindow()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //主进程事件监听</span></span>
<span class="line"><span>  ipcMain.on(&#39;setTitle&#39;, (event, title) =&gt; {</span></span>
<span class="line"><span>    //获取用于控制网页的webContents对象</span></span>
<span class="line"><span>    const webContents = event.sender</span></span>
<span class="line"><span>    //获取窗口</span></span>
<span class="line"><span>    const win = BrowserWindow.fromWebContents(webContents)</span></span>
<span class="line"><span>    //设置窗口标题</span></span>
<span class="line"><span>    win.setTitle(title)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>})</span></span></code></pre></div><p><strong>preload.js</strong></p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const { contextBridge, ipcRenderer } = require(&#39;electron&#39;)</span></span>
<span class="line"><span>//为渲染进程暴露API</span></span>
<span class="line"><span>contextBridge.exposeInMainWorld(&#39;api&#39;, {</span></span>
<span class="line"><span>  //该API用于向主进程事件</span></span>
<span class="line"><span>  setTitle: (title) =&gt; ipcRenderer.send(&#39;setTitle&#39;, title),</span></span>
<span class="line"><span>})</span></span></code></pre></div><p><strong>index.html</strong></p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>  &lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot; /&gt;</span></span>
<span class="line"><span>    &lt;meta http-equiv=&quot;Content-Security-Policy&quot; content=&quot;default-src &#39;self&#39;; script-src &#39;self&#39;&quot; /&gt;</span></span>
<span class="line"><span>    &lt;title&gt;electron&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;/head&gt;</span></span>
<span class="line"><span>  &lt;body&gt;</span></span>
<span class="line"><span>    &lt;input type=&quot;text&quot; name=&quot;title&quot; /&gt;</span></span>
<span class="line"><span>    &lt;button&gt;更改标题&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;renderer.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>  &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p><strong>renderer.js</strong></p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>window.addEventListener(&#39;DOMContentLoaded&#39;, () =&gt; {</span></span>
<span class="line"><span>  document.querySelector(&#39;button&#39;).addEventListener(&#39;click&#39;, () =&gt; {</span></span>
<span class="line"><span>    const value = document.querySelector(&#39;[name=title]&#39;).value</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //使用preload.js暴露出的API，触发主进程事件</span></span>
<span class="line"><span>    window.api.setTitle(value)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="主进程到渲染进程-​" tabindex="-1">主进程到渲染进程 <a href="#主进程到渲染进程">​</a> <a class="header-anchor" href="#主进程到渲染进程-​" aria-label="Permalink to &quot;主进程到渲染进程 [​](#主进程到渲染进程)&quot;">​</a></h3><p>下面介绍主进程主动向渲染进程通信，这也是单向通信IPC。</p><p>将消息从主进程发送到渲染器进程时，需要指定是哪一个渲染器接收消息。 消息需要通过 <a href="https://www.electronjs.org/zh/docs/latest/api/web-contents" target="_blank" rel="noreferrer"><code>WebContents</code></a> 实例的send方法发送到渲染器进程。</p><p><strong>main.js</strong></p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const { BrowserWindow, app, ipcMain, Menu } = require(&#39;electron&#39;)</span></span>
<span class="line"><span>const path = require(&#39;path&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const createWindow = () =&gt; {</span></span>
<span class="line"><span>  const win = new BrowserWindow({</span></span>
<span class="line"><span>    width: 300,</span></span>
<span class="line"><span>    height: 300,</span></span>
<span class="line"><span>    alwaysOnTop: true,</span></span>
<span class="line"><span>    x: 1500,</span></span>
<span class="line"><span>    y: 100,</span></span>
<span class="line"><span>    webPreferences: {</span></span>
<span class="line"><span>      preload: path.join(__dirname, &#39;preload.js&#39;),</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  //定义菜单</span></span>
<span class="line"><span>  const menu = Menu.buildFromTemplate([</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      label: &#39;菜单&#39;,</span></span>
<span class="line"><span>      submenu: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>        	//主进程向渲染进程发送消息</span></span>
<span class="line"><span>          click: () =&gt; win.webContents.send(&#39;increment&#39;, 1),</span></span>
<span class="line"><span>          label: &#39;增加&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  ])</span></span>
<span class="line"><span>  Menu.setApplicationMenu(menu)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //打开开发者工具</span></span>
<span class="line"><span>  win.webContents.openDevTools()</span></span>
<span class="line"><span>  win.loadFile(path.resolve(__dirname, &#39;index.html&#39;))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.whenReady().then(() =&gt; {</span></span>
<span class="line"><span>  createWindow()</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//接收渲染进程的结果</span></span>
<span class="line"><span>ipcMain.on(&#39;finish&#39;, (event, value) =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;最后结果是：&#39; + value)</span></span>
<span class="line"><span>})</span></span></code></pre></div><p><strong>perload.js</strong></p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const { contextBridge, ipcRenderer } = require(&#39;electron&#39;)</span></span>
<span class="line"><span>//为渲染进程暴露API</span></span>
<span class="line"><span>contextBridge.exposeInMainWorld(&#39;api&#39;, {</span></span>
<span class="line"><span>  //为渲染进程设置接口，用于接收主进程的消息</span></span>
<span class="line"><span>  incrementNumber: (callback) =&gt; ipcRenderer.on(&#39;increment&#39;, callback),</span></span>
<span class="line"><span>})</span></span></code></pre></div><p><strong>index.html</strong></p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>  &lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot; /&gt;</span></span>
<span class="line"><span>    &lt;meta http-equiv=&quot;Content-Security-Policy&quot; content=&quot;default-src &#39;self&#39;; script-src &#39;self&#39;&quot; /&gt;</span></span>
<span class="line"><span>    &lt;title&gt;electron&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;/head&gt;</span></span>
<span class="line"><span>  &lt;body&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;renderer.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>  &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p><strong>renderer.js</strong></p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//向预加载脚本传递回调方法，用于处理主进程的消息</span></span>
<span class="line"><span>window.api.incrementNumber((event, value) =&gt; {</span></span>
<span class="line"><span>  const h1 = document.querySelector(&#39;h1&#39;)</span></span>
<span class="line"><span>  h1.innerHTML = Number(h1.innerText) + value</span></span>
<span class="line"><span>  //向主进程发送消息</span></span>
<span class="line"><span>  event.sender.send(&#39;finish&#39;, h1.innerHTML)</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="双向通信-​" tabindex="-1">双向通信 <a href="#双向通信">​</a> <a class="header-anchor" href="#双向通信-​" aria-label="Permalink to &quot;双向通信 [​](#双向通信)&quot;">​</a></h3><p>使用 ipc 的invoke 进行渲染进程与主进程的通信，主进程会返回 promise。</p><p><strong>index.html</strong></p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>...</span></span>
<span class="line"><span>&lt;button id=&quot;btn&quot;&gt;IPC&lt;/button&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;renderer.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>...</span></span></code></pre></div><p><strong>main.js</strong></p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const { BrowserWindow, app } = require(&#39;electron&#39;)</span></span>
<span class="line"><span>const { ipcMain } = require(&#39;electron/main&#39;)</span></span>
<span class="line"><span>const path = require(&#39;path&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const createWindow = () =&gt; {</span></span>
<span class="line"><span>    const win = new BrowserWindow({</span></span>
<span class="line"><span>        width: 300,</span></span>
<span class="line"><span>        height: 300,</span></span>
<span class="line"><span>        alwaysOnTop: true,</span></span>
<span class="line"><span>        webPreferences: {</span></span>
<span class="line"><span>            preload: path.resolve(__dirname, &#39;preload.js&#39;),</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    win.webContents.openDevTools()</span></span>
<span class="line"><span>    win.loadFile(path.resolve(__dirname, &#39;index.html&#39;))</span></span>
<span class="line"><span>    return win</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.whenReady().then(() =&gt; {</span></span>
<span class="line"><span>    const win = createWindow()</span></span>
<span class="line"><span>    ipcMain.handle(&#39;mainShow&#39;, (event) =&gt; {</span></span>
<span class="line"><span>        return &#39;is main handle&#39;</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>})</span></span></code></pre></div><p><strong>preload.js</strong></p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const { ipcRenderer } = require(&#39;electron&#39;)</span></span>
<span class="line"><span>const { contextBridge } = require(&#39;electron/renderer&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>contextBridge.exposeInMainWorld(&#39;api&#39;, {</span></span>
<span class="line"><span>    show: () =&gt; {</span></span>
<span class="line"><span>        return ipcRenderer.invoke(&#39;mainShow&#39;)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span></code></pre></div><p><strong>renderer.js</strong></p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const bt = document.querySelector(&#39;#btn&#39;)</span></span>
<span class="line"><span>bt.addEventListener(&#39;click&#39;, async () =&gt; {</span></span>
<span class="line"><span>    const res = await api.show()</span></span>
<span class="line"><span>    console.log(res)</span></span>
<span class="line"><span>})</span></span></code></pre></div><blockquote><p>其他进程的通信的使用是类似的，可以参考 <a href="https://www.electronjs.org/zh/docs/latest/tutorial/ipc" target="_blank" rel="noreferrer">electron 文档</a>学习</p></blockquote>`,64),l=[t];function i(o,c,r,d,h,u){return a(),n("div",null,l)}const m=s(e,[["render",i]]);export{b as __pageData,m as default};
