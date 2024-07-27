import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.IpiIUH1b.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端/electron/5.基础知识.md","filePath":"前端/electron/5.基础知识.md","lastUpdated":1722073289000}'),e={name:"前端/electron/5.基础知识.md"},t=p(`<h2 id="国内镜像" tabindex="-1">国内镜像 <a href="#国内镜像"></a> <a class="header-anchor" href="#国内镜像" aria-label="Permalink to &quot;国内镜像 [](#国内镜像)&quot;">​</a></h2><p>将Electron设置国内镜像后，可以加快文件的下载速度，需要设置 electron_mirror 与 electron_builder_binaries_mirror 镜像，下面是 electron的国内镜像设置。</p><h2 id="pnpm-设置" tabindex="-1">pnpm 设置 <a href="#pnpm-设置"></a> <a class="header-anchor" href="#pnpm-设置" aria-label="Permalink to &quot;pnpm 设置 [](#pnpm-设置)&quot;">​</a></h2><p><strong>electron_mirror</strong></p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm config set electron_mirror=https://npm.taobao.org/mirrors/electron/</span></span>
<span class="line"><span>或</span></span>
<span class="line"><span>pnpm config set electron_mirror=https://registry.npmmirror.com/-/binary/electron/</span></span>
<span class="line"><span>或</span></span>
<span class="line"><span>pnpm config set electron_mirror https://npmmirror.com/mirrors/electron/</span></span>
<span class="line"><span>或</span></span>
<span class="line"><span>pnpm config set electron_mirror https://mirrors.huaweicloud.com/electron/</span></span></code></pre></div><p><strong>electron_builder_binaries_mirror</strong></p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm config set electron_builder_binaries_mirror=https://npm.taobao.org/mirrors/electron-builder-binaries/</span></span>
<span class="line"><span>或</span></span>
<span class="line"><span>pnpm config set electron_builder_binaries_mirror=https://mirrors.huaweicloud.com/electron-builder-binaries/</span></span>
<span class="line"><span>或</span></span>
<span class="line"><span>pnpm config set electron_builder_binaries_mirror=https://registry.npmmirror.com/-/binary/electron-builder-binaries/</span></span></code></pre></div><h2 id="npm-设置" tabindex="-1">npm 设置 <a href="#npm-设置"></a> <a class="header-anchor" href="#npm-设置" aria-label="Permalink to &quot;npm 设置 [](#npm-设置)&quot;">​</a></h2><p>使用以下命令打开 npm 配置文件</p><p>然后在文件内添加 electron 的镜像服务器</p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>electron_builder_binaries_mirror=&quot;https://mirrors.huaweicloud.com/electron-builder-binaries&quot;</span></span>
<span class="line"><span>ELECTRON_MIRROR=&quot;https://mirrors.huaweicloud.com/electron&quot;</span></span>
<span class="line"><span>....</span></span></code></pre></div><h2 id="创建应用" tabindex="-1">创建应用 <a href="#创建应用"></a> <a class="header-anchor" href="#创建应用" aria-label="Permalink to &quot;创建应用 [](#创建应用)&quot;">​</a></h2><p>下面创建一个简单的桌面应用，来体验 electron 的工作流程。</p><p>首先安装 <a href="https://nodejs.org/zh-cn/" target="_blank" rel="noreferrer">node.js</a> ，因为 Electron 将 Node.js 嵌入到其二进制文件中，你应用运行时的 Node.js 版本与你系统中运行的 Node.js 版本无关。</p><h3 id="package" tabindex="-1">package <a href="#package"></a> <a class="header-anchor" href="#package" aria-label="Permalink to &quot;package [](#package)&quot;">​</a></h3><p>然后初始化 npm 项目</p><p>创建 package.json 内容如下</p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;code&quot;,</span></span>
<span class="line"><span>  &quot;productName&quot;:&quot;代码片段&quot;,</span></span>
<span class="line"><span>  &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span>  &quot;description&quot;: &quot;&quot;,</span></span>
<span class="line"><span>  &quot;main&quot;: &quot;index.js&quot;,</span></span>
<span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;keywords&quot;: [],</span></span>
<span class="line"><span>  &quot;author&quot;: &quot;&quot;,</span></span>
<span class="line"><span>  &quot;license&quot;: &quot;ISC&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>然后安装依赖包</p><p>修改package.json文件中的 main与scripts配置段</p><ul><li>name字段会做为app.name的默认值</li><li>productName 字段会做为app.name的默认值，优先级高于name</li><li>main 主进程脚本</li><li>dev 运行electron项目命令</li></ul><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;code&quot;,</span></span>
<span class="line"><span> &quot;productName&quot;:&quot;代码片段&quot;,</span></span>
<span class="line"><span>  &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span>  &quot;description&quot;: &quot;&quot;,</span></span>
<span class="line"><span>  &quot;main&quot;: &quot;main.js&quot;,</span></span>
<span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;dev&quot;: &quot;electron .&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;keywords&quot;: [],</span></span>
<span class="line"><span>  &quot;author&quot;: &quot;&quot;,</span></span>
<span class="line"><span>  &quot;license&quot;: &quot;ISC&quot;,</span></span>
<span class="line"><span>  &quot;devDependencies&quot;: {</span></span>
<span class="line"><span>    &quot;electron&quot;: &quot;^22.0.0&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="模板文件" tabindex="-1">模板文件 <a href="#模板文件"></a> <a class="header-anchor" href="#模板文件" aria-label="Permalink to &quot;模板文件 [](#模板文件)&quot;">​</a></h3><p>然后创建index.html模板文件</p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>  &lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot; /&gt;</span></span>
<span class="line"><span>  &lt;/head&gt;</span></span>
<span class="line"><span>  &lt;body&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;electron&lt;/h1&gt;</span></span>
<span class="line"><span>  &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h3 id="主进程" tabindex="-1">主进程 <a href="#主进程"></a> <a class="header-anchor" href="#主进程" aria-label="Permalink to &quot;主进程 [](#主进程)&quot;">​</a></h3><p>创建main.js主进程文件，用于创建窗口并加载模板文件</p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const { app, BrowserWindow } = require(&#39;electron&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const createWindow = () =&gt; {</span></span>
<span class="line"><span>    //定义窗口</span></span>
<span class="line"><span>    const newWin = new BrowserWindow({</span></span>
<span class="line"><span>        width: 300,</span></span>
<span class="line"><span>        height: 300,</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    //加载模板</span></span>
<span class="line"><span>    newWin.loadFile(&#39;index.html&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//应用准备好后创建窗口</span></span>
<span class="line"><span>app.whenReady().then(() =&gt; {</span></span>
<span class="line"><span>    createWindow()</span></span>
<span class="line"><span>    //苹果电脑当关闭所有窗口后，点击dash图标时创建新窗口</span></span>
<span class="line"><span>    app.on(&#39;activate&#39;, () =&gt; {</span></span>
<span class="line"><span>        if (BrowserWindow.getAllWindows().length === 0) {</span></span>
<span class="line"><span>            createWindow()</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//非苹果系统当关闭所有窗口时退出应用</span></span>
<span class="line"><span>app.on(&#39;window-all-closed&#39;, () =&gt; {</span></span>
<span class="line"><span>    if (process.platform != &#39;darwin&#39;) {</span></span>
<span class="line"><span>        app.quit()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>然后在命令行执行</p><h3 id="自动重起" tabindex="-1">自动重起 <a href="#自动重起"></a> <a class="header-anchor" href="#自动重起" aria-label="Permalink to &quot;自动重起 [](#自动重起)&quot;">​</a></h3><p>有时需要当文件修改后，自动重起项目，这时需要安装nodemon模块</p><p>并修改 package.json 文件</p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>...</span></span>
<span class="line"><span>&quot;scripts&quot;: {</span></span>
<span class="line"><span>  &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;,</span></span>
<span class="line"><span>  &quot;dev&quot;: &quot;nodemon --exec electron .&quot;</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>然后添加 nodemon.json 配置文件</p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;ignore&quot;: [</span></span>
<span class="line"><span>		&quot;node_modules&quot;,</span></span>
<span class="line"><span>		&quot;dist&quot;</span></span>
<span class="line"><span>	],</span></span>
<span class="line"><span>	&quot;colours&quot;: true,</span></span>
<span class="line"><span>	&quot;verbose&quot;: true,</span></span>
<span class="line"><span>	&quot;watch&quot;: [</span></span>
<span class="line"><span>		&quot;*.*&quot;</span></span>
<span class="line"><span>	],</span></span>
<span class="line"><span>	&quot;ext&quot;: &quot;html,js&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>主进程设置窗口的位置，并且让窗口置顶，这样不会遮挡vscode编辑器</p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>...</span></span>
<span class="line"><span>const mainWin = new BrowserWindow({</span></span>
<span class="line"><span>  width: 400,</span></span>
<span class="line"><span>  height: 400,</span></span>
<span class="line"><span>  x: 1400,</span></span>
<span class="line"><span>  y: 100,</span></span>
<span class="line"><span>  alwaysOnTop: true,</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>...</span></span></code></pre></div><h2 id="安全策略" tabindex="-1">安全策略 <a href="#安全策略"></a> <a class="header-anchor" href="#安全策略" aria-label="Permalink to &quot;安全策略 [](#安全策略)&quot;">​</a></h2><p>因为 Electron 项目可以执行javascript代码，也可以访问用户电脑的文件系统，所以访问任何不受信任的内容都可能带来安全隐患。</p><h3 id="错误报告" tabindex="-1">错误报告 <a href="#错误报告"></a> <a class="header-anchor" href="#错误报告" aria-label="Permalink to &quot;错误报告 [](#错误报告)&quot;">​</a></h3><p>当没有配置安装策略时，Electron会报出警告，你可以在渲染进程的开发者工具中查看到。</p><p><img src="https://gitee.com/zhaox010/pic-go-save/raw/master/image/202406271520813.png" alt="image-20240627152012781"></p><h3 id="csp" tabindex="-1">CSP <a href="#csp"></a> <a class="header-anchor" href="#csp" aria-label="Permalink to &quot;CSP [](#csp)&quot;">​</a></h3><p>内容安全策略(CSP) 是应对跨站脚本攻击和数据注入攻击的又一层保护措施。 我们建议任何载入到Electron的站点都要开启。</p><p><strong>定义方式</strong></p><p>访问内容均来自项目资源</p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;meta http-equiv=&quot;Content-Security-Policy&quot; content=&quot;default-src &#39;self&#39;; script-src &#39;self&#39;&quot; /&gt;</span></span></code></pre></div><p>允许访问 *<strong>.taobao</strong> 源内容</p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;meta http-equiv=&quot;Content-Security-Policy&quot; content=&quot;default-src &#39;self&#39; *.trusted.com; script-src &#39;*.tabao.com&#39;&quot; /&gt;</span></span></code></pre></div><p><strong>模板文件</strong></p><p>我们在模板文件中定义安全策略，以告之Electron我们已经对安全策略进行了定义，上面的警告就不会出现了</p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>  &lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot; /&gt;</span></span>
<span class="line"><span>    &lt;meta http-equiv=&quot;Content-Security-Policy&quot; content=&quot;default-src &#39;self&#39;; script-src &#39;self&#39;&quot; /&gt;</span></span>
<span class="line"><span>    &lt;title&gt;electron&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;/head&gt;</span></span>
<span class="line"><span>  &lt;body&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;electron&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;renderer.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>  &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h2 id="基于框架" tabindex="-1">基于框架 <a href="#基于框架"></a> <a class="header-anchor" href="#基于框架" aria-label="Permalink to &quot;基于框架 [](#基于框架)&quot;">​</a></h2><p>平时项目开发我们都会使用到 vue、react等框架开发渲染进程的代码，所以要配置electron与常用框架的整合。下面我们先自己配置个electron+vite+vue3的脚手架，然后在介绍成熟的开源脚手架。</p><h3 id="自己开发" tabindex="-1">自己开发 <a href="#自己开发"></a> <a class="header-anchor" href="#自己开发" aria-label="Permalink to &quot;自己开发 [](#自己开发)&quot;">​</a></h3><p>下面我们自己来开发一个使用 electron+vite+vue 技术的脚手架。</p><p>首先创建vue3项目</p><p>然后安装electron</p><p>因为我们要跑两个进程所以要安装 <a href="https://github.com/open-cli-tools/concurrently" target="_blank" rel="noreferrer">concurrently</a> ，它可以控制依次启动多个进程</p><p>然后修改package.json</p><ul><li>&quot;main&quot;: &quot;electron/main.cjs&quot; 定义electron 主进程脚本</li><li>&quot;dev&quot;: &quot;concurrently &quot;nodemon --exec electron . &quot; &quot;vite&quot;&quot; 定义依次启动 vue与electron脚本</li></ul><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;test&quot;,</span></span>
<span class="line"><span>  &quot;private&quot;: true,</span></span>
<span class="line"><span>  &quot;version&quot;: &quot;0.0.0&quot;,</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;module&quot;,</span></span>
<span class="line"><span>  &quot;main&quot;: &quot;electron/main.cjs&quot;,</span></span>
<span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;dev&quot;: &quot;concurrently \\&quot;nodemon --exec electron . \\&quot; \\&quot;vite\\&quot;&quot;,</span></span>
<span class="line"><span>    &quot;build&quot;: &quot;vue-tsc &amp;&amp; vite build&quot;,</span></span>
<span class="line"><span>    &quot;preview&quot;: &quot;vite preview&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;dependencies&quot;: {</span></span>
<span class="line"><span>    &quot;vue&quot;: &quot;^3.2.45&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;devDependencies&quot;: {</span></span>
<span class="line"><span>    &quot;@vitejs/plugin-vue&quot;: &quot;^4.0.0&quot;,</span></span>
<span class="line"><span>    &quot;concurrently&quot;: &quot;^7.6.0&quot;,</span></span>
<span class="line"><span>    &quot;electron&quot;: &quot;^22.0.3&quot;,</span></span>
<span class="line"><span>    &quot;typescript&quot;: &quot;^4.9.3&quot;,</span></span>
<span class="line"><span>    &quot;vite&quot;: &quot;^4.0.0&quot;,</span></span>
<span class="line"><span>    &quot;vue-tsc&quot;: &quot;^1.0.11&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>然后定义 electron/main.cjs 主进程脚本</p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const { ipcMain, BrowserWindow, app } = require(&#39;electron&#39;)</span></span>
<span class="line"><span>const path = require(&#39;path&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const createWindow = () =&gt; {</span></span>
<span class="line"><span>  const win = new BrowserWindow({</span></span>
<span class="line"><span>    width: 600,</span></span>
<span class="line"><span>    height: 600,</span></span>
<span class="line"><span>    alwaysOnTop: true,</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  win.webContents.openDevTools()</span></span>
<span class="line"><span>  win.loadURL(&#39;http://localhost:5173&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return win</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.whenReady().then(() =&gt; {</span></span>
<span class="line"><span>  createWindow()</span></span>
<span class="line"><span>  app.on(&#39;window-all-closed&#39;, () =&gt; {</span></span>
<span class="line"><span>    if (process.platform != &#39;darwin&#39;) app.quit</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  app.on(&#39;activate&#39;, () =&gt; {</span></span>
<span class="line"><span>    if (BrowserWindow.getAllWindows().length == 0) {</span></span>
<span class="line"><span>      createWindow()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>现在就可以启动项目了</p><h3 id="成熟的脚手架" tabindex="-1">成熟的脚手架 <a href="#成熟的脚手架"></a> <a class="header-anchor" href="#成熟的脚手架" aria-label="Permalink to &quot;成熟的脚手架 [](#成熟的脚手架)&quot;">​</a></h3><p>日常开发可以使用 <a href="https://cn-evite.netlify.app/guide/#%E6%90%AD%E5%BB%BA%E7%AC%AC%E4%B8%80%E4%B8%AA-electron-vite-%E9%A1%B9%E7%9B%AE" target="_blank" rel="noreferrer">electron-vite</a> 或 <a href="https://github.com/electron-vite/electron-vite-vue" target="_blank" rel="noreferrer">electron-vite-vue</a> 、 <a href="https://github.com/electron-react-boilerplate/electron-react-boilerplate" target="_blank" rel="noreferrer">electron-react-boilerplate</a> 等脚手架快速创建项目，脚手架已经为我们完成了基本的配置，并支持使用 Vue与React等技术开发Electron项目。</p><p>下面使用 <a href="https://cn-evite.netlify.app/guide/#%E6%90%AD%E5%BB%BA%E7%AC%AC%E4%B8%80%E4%B8%AA-electron-vite-%E9%A1%B9%E7%9B%AE" target="_blank" rel="noreferrer">electron-vite</a> 脚手架创建项目</p><div class="language-auto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">auto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm create @quick-start/electron</span></span></code></pre></div><p>然后进行项目目录 <strong>electron-vite-vue</strong> 安装依赖包</p><p>然后运行项目</p><p>运行项目后会打开Election应用</p><p><img src="https://gitee.com/zhaox010/pic-go-save/raw/master/image/202406271517336.png" alt="image-20221016190801918"></p>`,73),l=[t];function o(i,c,r,u,d,h){return n(),a("div",null,l)}const m=s(e,[["render",o]]);export{g as __pageData,m as default};
