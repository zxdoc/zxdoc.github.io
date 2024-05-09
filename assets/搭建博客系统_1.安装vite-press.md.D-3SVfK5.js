import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.4aTu-Nia.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"搭建博客系统/1.安装vite-press.md","filePath":"搭建博客系统/1.安装vite-press.md","lastUpdated":1715224802000}'),t={name:"搭建博客系统/1.安装vite-press.md"},h=e(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h1><p>如果你用过<code>vue-press</code>的话 就知道<code>vite-press</code>有多快</p><h3 id="前置准备" tabindex="-1">前置准备 <a class="header-anchor" href="#前置准备" aria-label="Permalink to &quot;前置准备&quot;">​</a></h3><ul><li><a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> 18 及以上版本。</li><li>通过命令行界面 (CLI) 访问 VitePress 的终端。</li><li>支持 <a href="https://en.wikipedia.org/wiki/Markdown" target="_blank" rel="noreferrer">Markdown</a> 语法的编辑器。</li></ul><h2 id="创建一个目录" tabindex="-1">创建一个目录 <a class="header-anchor" href="#创建一个目录" aria-label="Permalink to &quot;创建一个目录&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span></span></code></pre></div><p><img src="https://gitee.com/zhaox010/pic-go-save/raw/master/image/202405091008246.png" alt="image-20240509100818211"></p><h2 id="安装vite-press包" tabindex="-1">安装vite-press包 <a class="header-anchor" href="#安装vite-press包" aria-label="Permalink to &quot;安装vite-press包&quot;">​</a></h2><p><img src="https://gitee.com/zhaox010/pic-go-save/raw/master/image/202405091010704.png" alt="image-20240509101001664"></p><p><img src="https://gitee.com/zhaox010/pic-go-save/raw/master/image/202405091010534.png" alt="image-20240509101039502"></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span></span></code></pre></div><p>以上三种都可以 除了<code>npm</code>是<code>nodeJs</code>自带以外 其余的包管理器都需要额外安装</p><h3 id="包管理器" tabindex="-1">包管理器 <a class="header-anchor" href="#包管理器" aria-label="Permalink to &quot;包管理器&quot;">​</a></h3><p>在现代Web开发中，一个Node.js应用的构建往往离不开各种依赖，比如库、辅助工具或其他工具包。以一个典型的React项目为例，当你想为项目添加路由功能时，你需要安装如react-router-dom这样的包。类似这样的需求在开发过程中屡见不鲜，而这就是为什么我们需要一个包管理器来帮助我们管理这些依赖.</p><p>在这里我们不具体介绍包管理的内容,搭建vite-press可以使用 <code>npm</code> <code>yarn</code> <code>pnpm</code> 等等</p><h3 id="安装额外的包管理器" tabindex="-1">安装额外的包管理器 <a class="header-anchor" href="#安装额外的包管理器" aria-label="Permalink to &quot;安装额外的包管理器&quot;">​</a></h3><h5 id="yarn" tabindex="-1">yarn <a class="header-anchor" href="#yarn" aria-label="Permalink to &quot;yarn&quot;">​</a></h5><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span></span></code></pre></div><h5 id="pnpm" tabindex="-1">pnpm <a class="header-anchor" href="#pnpm" aria-label="Permalink to &quot;pnpm&quot;">​</a></h5><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span></span></code></pre></div><h2 id="安装向导" tabindex="-1">安装向导 <a class="header-anchor" href="#安装向导" aria-label="Permalink to &quot;安装向导&quot;">​</a></h2><p>VitePress 附带一个命令行设置向导，可以帮助你构建一个基本项目。安装后，通过运行以下命令启动向导：</p><h5 id="npm" tabindex="-1">npm <a class="header-anchor" href="#npm" aria-label="Permalink to &quot;npm&quot;">​</a></h5><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><h5 id="yarn-1" tabindex="-1">yarn <a class="header-anchor" href="#yarn-1" aria-label="Permalink to &quot;yarn&quot;">​</a></h5><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><h5 id="pnpm-1" tabindex="-1">pnpm <a class="header-anchor" href="#pnpm-1" aria-label="Permalink to &quot;pnpm&quot;">​</a></h5><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">┌</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Welcome</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> VitePress!</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">◇</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Where</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> should</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> VitePress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> initialize</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config?</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ./docs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">◇</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Site</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> title:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  My</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Awesome</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Project</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">◇</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Site</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> description:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  A</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> VitePress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Site</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">◆</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Theme:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ●</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (Out </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> box,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> good-looking</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ○</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Theme</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Customization</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ○</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Custom</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Theme</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└</span></span></code></pre></div><p><img src="https://gitee.com/zhaox010/pic-go-save/raw/master/image/202405091014583.png" alt="image-20240509101433544"></p><p>按照如上进行配置</p><h2 id="启动项目" tabindex="-1">启动项目 <a class="header-anchor" href="#启动项目" aria-label="Permalink to &quot;启动项目&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span></span></code></pre></div><p><img src="https://gitee.com/zhaox010/pic-go-save/raw/master/image/202405091015169.png" alt="image-20240509101521128"></p><p><img src="https://gitee.com/zhaox010/pic-go-save/raw/master/image/202405091015888.png" alt="image-20240509101555828"></p><p><strong>一个简单的博客系统就启动好了</strong></p>`,38),n=[h];function p(l,k,r,d,F,o){return a(),i("div",null,n)}const y=s(t,[["render",p]]);export{c as __pageData,y as default};
