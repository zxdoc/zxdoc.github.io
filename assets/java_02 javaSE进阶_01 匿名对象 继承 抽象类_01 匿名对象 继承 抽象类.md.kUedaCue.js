import{_ as n,c as l,o as h,a4 as a,m as s,a as i}from"./chunks/framework.IpiIUH1b.js";const p="/assets/image-20210329163755741.DNv_iNTf.png",t="/assets/image-20210329172935229.cOLjMsBe.png",k="/assets/image-20210330193948869.DzFty3Xp.png",m=JSON.parse('{"title":"匿名对象 , 继承 , 抽象类","description":"","frontmatter":{},"headers":[],"relativePath":"java/02 javaSE进阶/01 匿名对象 继承 抽象类/01 匿名对象 继承 抽象类.md","filePath":"java/02 javaSE进阶/01 匿名对象 继承 抽象类/01 匿名对象 继承 抽象类.md","lastUpdated":1722566031000}'),e={name:"java/02 javaSE进阶/01 匿名对象 继承 抽象类/01 匿名对象 继承 抽象类.md"},r=a('<h1 id="匿名对象-继承-抽象类" tabindex="-1">匿名对象 , 继承 , 抽象类 <a class="header-anchor" href="#匿名对象-继承-抽象类" aria-label="Permalink to &quot;匿名对象 , 继承 , 抽象类&quot;">​</a></h1><h2 id="学习目标" tabindex="-1">学习目标 <a class="header-anchor" href="#学习目标" aria-label="Permalink to &quot;学习目标&quot;">​</a></h2><ul><li><h5 id="面向对象回顾" tabindex="-1">面向对象回顾 <a class="header-anchor" href="#面向对象回顾" aria-label="Permalink to &quot;面向对象回顾&quot;">​</a></h5></li><li><h5 id="匿名对象介绍" tabindex="-1">匿名对象介绍 <a class="header-anchor" href="#匿名对象介绍" aria-label="Permalink to &quot;匿名对象介绍&quot;">​</a></h5></li><li><h5 id="面向对象特征-继承" tabindex="-1">面向对象特征 - 继承 <a class="header-anchor" href="#面向对象特征-继承" aria-label="Permalink to &quot;面向对象特征 - 继承&quot;">​</a></h5></li><li><h5 id="抽象类的使用" tabindex="-1">抽象类的使用 <a class="header-anchor" href="#抽象类的使用" aria-label="Permalink to &quot;抽象类的使用&quot;">​</a></h5></li><li><h5 id="模板设计模式" tabindex="-1">模板设计模式 <a class="header-anchor" href="#模板设计模式" aria-label="Permalink to &quot;模板设计模式&quot;">​</a></h5></li></ul><h2 id="_1-面向对象回顾" tabindex="-1">1 面向对象回顾 <a class="header-anchor" href="#_1-面向对象回顾" aria-label="Permalink to &quot;1 面向对象回顾&quot;">​</a></h2>',4),E=s("ul",null,[s("li",null,[s("h5",{id:"面向对象的核心思想是什么",tabindex:"-1"},[i("面向对象的核心思想是什么 ? "),s("a",{class:"header-anchor",href:"#面向对象的核心思想是什么","aria-label":'Permalink to "面向对象的核心思想是什么 ?"'},"​")]),s("ul",null,[s("li",null,"用代码来模拟现实生活中的事物 , 比如学生类表示学生事物 , 对象表示的就是具体的学生 , 有了类就可以描述万千世界所有的事物了")])]),s("li",null,[s("h5",{id:"现有的类还是先有的对象",tabindex:"-1"},[i("现有的类还是先有的对象 ? "),s("a",{class:"header-anchor",href:"#现有的类还是先有的对象","aria-label":'Permalink to "现有的类还是先有的对象 ?"'},"​")]),s("ul",null,[s("li",null,"对象是根据类创建出来的 , 所有现有的类 , 再有对象")])]),s("li",null,[s("h5",{id:"java类的创建",tabindex:"-1"},[i("Java类的创建 ? "),s("a",{class:"header-anchor",href:"#java类的创建","aria-label":'Permalink to "Java类的创建 ?"'},"​")]),s("ul",null,[s("li",null,"类名建议使用大驼峰命名法 , 每个单词首字母需要大写"),s("li",null,"Java规定 , 一个Java文件中可以定义多个类 , 但是只能有一个类使用public修饰 , public修饰的类名需要和java文件名保持一致"),s("li",null,"按照规范 , 实际工作之时 , 建议一个Java文件中只能有一个类")])]),s("li",null,[s("h5",{id:"类中的组成成分",tabindex:"-1"},[i("类中的组成成分 ? "),s("a",{class:"header-anchor",href:"#类中的组成成分","aria-label":'Permalink to "类中的组成成分 ?"'},"​")]),s("ul",null,[s("li",null,"1 成员变量"),s("li",null,"2 成员方法"),s("li",null,"3 构造方法"),s("li",null,"4 内部类(后面学)"),s("li",null,"5 代码块(后面学)")]),s("img",{src:p,alt:"image-20210329163755741",style:{zoom:"80%"}})]),s("li",null,[s("h5",{id:"创建对象所使用的关键字",tabindex:"-1"},[i("创建对象所使用的关键字 ? "),s("a",{class:"header-anchor",href:"#创建对象所使用的关键字","aria-label":'Permalink to "创建对象所使用的关键字 ?"'},"​")]),s("ul",null,[s("li",null,"new关键字")])]),s("li",null,[s("h5",{id:"创建对象的格式",tabindex:"-1"},[i("创建对象的格式 ? "),s("a",{class:"header-anchor",href:"#创建对象的格式","aria-label":'Permalink to "创建对象的格式 ?"'},"​")]),s("ul",null,[s("li",null,"类名 对象名 = new 类名(参数列表);")])]),s("li",null,[s("h5",{id:"调用对象的成员",tabindex:"-1"},[i("调用对象的成员 ? "),s("a",{class:"header-anchor",href:"#调用对象的成员","aria-label":'Permalink to "调用对象的成员 ?"'},"​")]),s("ul",null,[s("li",null,"调用成员变量 : 对象名.成员变量名"),s("li",null,"调用成员方法 : 对象名.成员方法名(参数)")])]),s("li",null,[s("h5",{id:"定义构造方法的格式",tabindex:"-1"},[i("定义构造方法的格式 ? "),s("a",{class:"header-anchor",href:"#定义构造方法的格式","aria-label":'Permalink to "定义构造方法的格式 ?"'},"​")]),s("ul",null,[s("li",{"css-module":"."},"修饰符 类名(参数)")])]),s("li",null,[s("h5",{id:"定义构造方法的特点",tabindex:"-1"},[i("定义构造方法的特点 ? "),s("a",{class:"header-anchor",href:"#定义构造方法的特点","aria-label":'Permalink to "定义构造方法的特点 ?"'},"​")]),s("ul",null,[s("li",null,"没有返回值 , 连void都没有"),s("li",null,"方法名与类名相同"),s("li",null,"构造方法可以进行重载定义")])]),s("li",null,[s("h5",{id:"构造方法的作用",tabindex:"-1"},[i("构造方法的作用 ? "),s("a",{class:"header-anchor",href:"#构造方法的作用","aria-label":'Permalink to "构造方法的作用 ?"'},"​")]),s("ul",null,[s("li",null,"空参构造 : 初始化对象的数据为默认值"),s("li",null,"有参构造 : 初始化对象时 , 为对象的属性赋值")])]),s("li",null,[s("h5",{id:"面向对象三大特征是什么",tabindex:"-1"},[i("面向对象三大特征是什么 ? "),s("a",{class:"header-anchor",href:"#面向对象三大特征是什么","aria-label":'Permalink to "面向对象三大特征是什么 ?"'},"​")]),s("ul",null,[s("li",null,"封装 , 继承 , 多态")])]),s("li",null,[s("h5",{id:"封装的思想及其作用",tabindex:"-1"},[i("封装的思想及其作用 ? "),s("a",{class:"header-anchor",href:"#封装的思想及其作用","aria-label":'Permalink to "封装的思想及其作用 ?"'},"​")]),s("ul",null,[s("li",null,"思想 : 把实现细节隐藏 , 对外提供公共的访问方式"),s("li",null,"作用 : 提高代码的安全性 , 提高代码的复用性")])]),s("li",null,[s("h5",{id:"封装的步骤",tabindex:"-1"},[i("封装的步骤 ? "),s("a",{class:"header-anchor",href:"#封装的步骤","aria-label":'Permalink to "封装的步骤 ?"'},"​")]),s("ul",null,[s("li",null,"把成员变量进行private修饰"),s("li",null,"提供对应的setter和getter方法")])]),s("li",null,[s("h5",{id:"this关键字的含义",tabindex:"-1"},[i("this关键字的含义 ? "),s("a",{class:"header-anchor",href:"#this关键字的含义","aria-label":'Permalink to "this关键字的含义 ?"'},"​")]),s("ul",null,[s("li",null,"this代表的是本类对象的引用"),s("li",null,"在构造方法中 , this代表的是new的对象"),s("li",null,"在成员方法中 , this代表的是调用此方法的对象")])]),s("li",null,[s("h5",{id:"this关键字的作用",tabindex:"-1"},[i("this关键字的作用 ? "),s("a",{class:"header-anchor",href:"#this关键字的作用","aria-label":'Permalink to "this关键字的作用 ?"'},"​")]),s("ul",null,[s("li",null,"主要用于区分局部变量和成员变量同名的问题")])])],-1),d=a(`<h2 id="_2-匿名对象介绍" tabindex="-1">2 匿名对象介绍 <a class="header-anchor" href="#_2-匿名对象介绍" aria-label="Permalink to &quot;2 匿名对象介绍&quot;">​</a></h2><ul><li><h5 id="什么是匿名对象" tabindex="-1">什么是匿名对象 ? <a class="header-anchor" href="#什么是匿名对象" aria-label="Permalink to &quot;什么是匿名对象 ?&quot;">​</a></h5><ul><li>没有变量接收的对象 , 称作为匿名对象</li></ul></li><li><h5 id="匿名对象的使用" tabindex="-1">匿名对象的使用 ? <a class="header-anchor" href="#匿名对象的使用" aria-label="Permalink to &quot;匿名对象的使用 ?&quot;">​</a></h5><ul><li>直接使用匿名对象调用方法</li><li>匿名对象作为方法传参</li><li>匿名对象作为方法的返回值</li></ul></li><li><p>代码实现</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> com.zhaoxin.anonymous;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    匿名对象 :</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        没有对象名接收的对象 , 称作为匿名对象</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        有对象名接收的对象 , 称作有名对象</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    注意 : 一般使用一次的对象 , 我们可以采用匿名对象</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    匿名对象的使用 :</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        1 使用匿名对象直接调用方法</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        2 使用匿名对象作为方法的传参</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        3 使用匿名对象作为方法的返回值</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Demo1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//        Student s = new Student();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//        s.study();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//        1 使用匿名对象直接调用方法</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Student</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">study</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//        Student s2 = new Student();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//        useStudent(s2);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//        2 使用匿名对象作为方法的传参</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        useStudent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Student</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useStudent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Student </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        s.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">study</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Student </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getStudent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//        Student s = new Student();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//        return s;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 3 使用匿名对象作为方法的返回值</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Student</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Student</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> study</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;学生学习...&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><h5 id="代码实践-注册案例" tabindex="-1">代码实践：注册案例 <a class="header-anchor" href="#代码实践-注册案例" aria-label="Permalink to &quot;代码实践：注册案例&quot;">​</a></h5><p><img src="`+t+`" alt="image-20210329172935229"></p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> com.zhaoxin.anonymous;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> java.util.ArrayList;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> java.util.Scanner;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    需求 :</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        1 创建用户(User)对象 , 对象数据采用键盘录入而来</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        2 用户(User)包含的属性 :</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            用户名   (username)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            手机号码 (phonNumber)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            登录密码 (password)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            确认密码 (confirm)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            电子邮箱 (email)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            性别     (sex)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            出生日期 (birthday)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        3 如果登录密码和确认密码不一致 , 重新输入</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        4 把用户(User)对象 ,添加到ArrayList集合中 , 打印集合对象即可</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Demo2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 创建集合对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ArrayList&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">User</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; list </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ArrayList&lt;&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 创建键盘录入对象 , 录入用户的数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Scanner sc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Scanner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(System.in);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请输入用户名:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        String username </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sc.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nextLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请输入手机号码:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        String phoneNumber </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sc.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nextLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请输入登录密码:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        String password </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sc.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nextLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请输入确认密码:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 如果登录密码 , 和确认密码不一致 , 需要重新输入确认密码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        String confirm;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            confirm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sc.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nextLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (password.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">equals</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(confirm)) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;您输入的登录密码和确认密码不一致, 请重新输入...&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请输入电子邮箱:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        String email </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sc.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nextLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请输入性别:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        String sex </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sc.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nextLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请输入出生日期:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        String birthday </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sc.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nextLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 把用户对象添加到集合中</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        list.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> User</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(username, phoneNumber, password, confirm, email, sex, birthday));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 遍历集合</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> list.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // 获取集合中的用户对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            User u </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> list.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(u.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUsername</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;---&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> u.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPhonNumber</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;---&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> u.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPassword</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            +</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;---&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> u.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getConfirm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;---&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> u.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getEmail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;---&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> u.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getSex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;---&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> u.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getBirthday</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> com.zhaoxin.anonymous;</span></span></code></pre></div></li></ul><p>// 用户类 public class User { private String username; private String phoneNumber; private String password; private String confirm; private String email; private String sex; private String birthday;</p><pre><code>  public User() {
  }

  public User(String username, String phonNumber, String password, String confirm, String email, String sex, String birthday) {
      this.username = username;
      this.phoneNumber = phonNumber;
      this.password = password;
      this.confirm = confirm;
      this.email = email;
      this.sex = sex;
      this.birthday = birthday;
  }

  public String getUsername() {
      return username;
  }

  public void setUsername(String username) {
      this.username = username;
  }

  public String getPhonNumber() {
      return phoneNumber;
  }

  public void setPhonNumber(String phonNumber) {
      this.phoneNumber = phonNumber;
  }

  public String getPassword() {
      return password;
  }

  public void setPassword(String password) {
      this.password = password;
  }

  public String getConfirm() {
      return confirm;
  }

  public void setConfirm(String confirm) {
      this.confirm = confirm;
  }

  public String getEmail() {
      return email;
  }

  public void setEmail(String email) {
      this.email = email;
  }

  public String getSex() {
      return sex;
  }

  public void setSex(String sex) {
      this.sex = sex;
  }

  public String getBirthday() {
      return birthday;
  }

  public void setBirthday(String birthday) {
      this.birthday = birthday;
  }
</code></pre><p>}</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>## 3 继承</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#### 3.1 为什么学习继承 ?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 继承是将多个类的相同属性和行为抽取到单独一个类中，那么多个类无需再定义这些共性属性和行为，只要继承这个单独类即可继承这些属性和行为了</span></span>
<span class="line"><span>- 多个类称为子类（派生类），单独的这个类称为父类(基类 或超类)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#### 3.2 继承的格式 ?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 使用关键字extends进行连接子类与父类</span></span>
<span class="line"><span>- 举例 : public class Student extends People{ ... }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#### 3.3 继承的好处 ?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 提高代码的复用性</span></span>
<span class="line"><span>- 提高代码的维护性</span></span>
<span class="line"><span>- 让类与类产生了关系(继承关系) , 是多态的前提</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`java</span></span>
<span class="line"><span>package com.zhaoxin.extends_demo;</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  学生类 : 姓名(name) , 课程名称(course) , 所在班级(className)  , 查看课表(lookForm) , 填写反馈数据(write)</span></span>
<span class="line"><span>  老师类 : 姓名(name) , 课程名称(course) , 部门名称(department) , 查看课表(lookForm) , 发布试题(release)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  设计 : 把学生类 和 老师类的共性内容抽取到一个单独的类中(Person),存储共性内容</span></span>
<span class="line"><span>  父类 : 姓名(name) , 课程名称(course) ,  查看课表(lookForm)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>public class ExtendsDemo1 {</span></span>
<span class="line"><span>  public static void main(String[] args) {</span></span>
<span class="line"><span>      Student s = new Student();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      s.setName(&quot;张三&quot;);</span></span>
<span class="line"><span>      s.setCourse(&quot;Java&quot;);</span></span>
<span class="line"><span>      s.setClassName(&quot;三年二班&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      s.lookForm();</span></span>
<span class="line"><span>      s.write();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> com.zhaoxin.extends_demo;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    此类定义的是子类的共性成员</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String name;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String course;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCourse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> course;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setCourse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">course</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.course </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> course;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lookForm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;查看课表&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> com.zhaoxin.extends_demo;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    子类只需要定义自己特有的成员 , 共性的成员需要抽取到父类中</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Student</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String className;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getClassName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> className;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setClassName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">className</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.className </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> className;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;填写反馈数据&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> com.zhaoxin.extends_demo;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    子类只需要定义自己特有的成员 , 共性的成员需要抽取到父类中</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Teacher</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String department;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getDepartment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> department;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setDepartment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">department</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.department </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> department;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> release</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;发布试题....&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="_3-5-继承后-子类对象内存图解" tabindex="-1">3.5 继承后,子类对象内存图解 <a class="header-anchor" href="#_3-5-继承后-子类对象内存图解" aria-label="Permalink to &quot;3.5 继承后,子类对象内存图解&quot;">​</a></h4><p><img src="`+k+`" alt="image-20210330193948869"></p><h4 id="_3-6-继承的特点" tabindex="-1">3.6 继承的特点 <a class="header-anchor" href="#_3-6-继承的特点" aria-label="Permalink to &quot;3.6 继承的特点&quot;">​</a></h4><ul><li><h5 id="java只支持单继承-不支持多继承-但是可以多层继承" tabindex="-1">Java只支持单继承 , 不支持多继承 , 但是可以多层继承 <a class="header-anchor" href="#java只支持单继承-不支持多继承-但是可以多层继承" aria-label="Permalink to &quot;Java只支持单继承 , 不支持多继承 , 但是可以多层继承&quot;">​</a></h5><ul><li>简单理解 : 一个儿子只能有一个亲爹</li></ul></li><li><h5 id="为什么不支持多继承" tabindex="-1">为什么不支持多继承 ? <a class="header-anchor" href="#为什么不支持多继承" aria-label="Permalink to &quot;为什么不支持多继承 ?&quot;">​</a></h5><ul><li>因为一个子类如果继承多个父类 , 父类有相同的方法声明, 子类会产生继承冲突 , 所以不允许</li></ul></li></ul><h4 id="_3-7-继承中成员的发访问特点" tabindex="-1">3.7 继承中成员的发访问特点 <a class="header-anchor" href="#_3-7-继承中成员的发访问特点" aria-label="Permalink to &quot;3.7 继承中成员的发访问特点&quot;">​</a></h4><ul><li><h5 id="成员变量" tabindex="-1">成员变量 <a class="header-anchor" href="#成员变量" aria-label="Permalink to &quot;成员变量&quot;">​</a></h5><ul><li>访问特点-就近原则 : 局部有访问局部的 , 局部没有访问本类成员的 , 本类成员没有访问父类非私有成员</li></ul></li><li><h5 id="成员方法" tabindex="-1">成员方法 <a class="header-anchor" href="#成员方法" aria-label="Permalink to &quot;成员方法&quot;">​</a></h5><ul><li>访问特点-就近原则 : 子类有调用子类的 , 子类没有调用父类的</li></ul></li><li><h5 id="构造方法" tabindex="-1">构造方法 <a class="header-anchor" href="#构造方法" aria-label="Permalink to &quot;构造方法&quot;">​</a></h5><ul><li>子类所有的构造方法都会默认去访问父类的空参数构造方法 <ul><li>原因 : 因为子类在初始化时 , 可能会用到父类的数据 , 所以通过访问父类的构造 , 先给父类进行初始化</li></ul></li><li>如果进行初始化呢 ? <ul><li>每个构造方法中默认第一条语句都会有一个super()</li></ul></li><li>如果父类没有空参数构造 , 那么子类如果进行给父类初始化 ? <ul><li>子类可以通过super(...)访问父类的有参数构造方法</li><li>子类通过this(..)访问子类的有参构造 , 在通过有参构造区访问父类的有参构造 , 不推荐</li></ul></li><li>注意事项 : <ul><li>super(...) 和 this(...) 因为二者都需要放在构造方法的第一条可执行语句, 所以二者不能共存</li></ul></li></ul></li></ul><h4 id="_3-8-方法重写" tabindex="-1">3.8 方法重写 <a class="header-anchor" href="#_3-8-方法重写" aria-label="Permalink to &quot;3.8 方法重写&quot;">​</a></h4><ul><li><h5 id="什么是方法重写" tabindex="-1">什么是方法重写 ? <a class="header-anchor" href="#什么是方法重写" aria-label="Permalink to &quot;什么是方法重写 ?&quot;">​</a></h5><ul><li>子类和父类出现了一模一样的方法的声明(方法名 , 参数列表)</li></ul></li><li><h5 id="为什么要学习方法重写" tabindex="-1">为什么要学习方法重写 ? <a class="header-anchor" href="#为什么要学习方法重写" aria-label="Permalink to &quot;为什么要学习方法重写 ?&quot;">​</a></h5><ul><li>当子类需要使用父类的功能 , 但是父类的功能又满足不了子类 , 那么子类需要重写 , 这样既可以使用父类的功能 ,也可以增加新的功能</li></ul></li><li><h5 id="如果进行方法重写" tabindex="-1">如果进行方法重写 ? <a class="header-anchor" href="#如果进行方法重写" aria-label="Permalink to &quot;如果进行方法重写 ?&quot;">​</a></h5><ul><li>子类和父类的方法声明一样 , 方法体中的内容重新定义</li></ul></li><li><h5 id="override注解是做什么的-有什么用" tabindex="-1">Override注解是做什么的，有什么用？ <a class="header-anchor" href="#override注解是做什么的-有什么用" aria-label="Permalink to &quot;Override注解是做什么的，有什么用？&quot;">​</a></h5><ul><li>@Override是放在重写后的方法上，作为重写是否正确的校验注解，加上该注解后如果重写错误，编译阶段会出现错误提示。建议重写方法都加@Override注解，代码安全，优雅！</li></ul></li><li><h5 id="方法重写的注意事项" tabindex="-1">方法重写的注意事项 ? <a class="header-anchor" href="#方法重写的注意事项" aria-label="Permalink to &quot;方法重写的注意事项 ?&quot;">​</a></h5><ul><li>私有的方法无法重写</li><li>重写的方法与被重写的方法 , 名字 , 参数列表需要保持一致</li><li>子类重写父类方法时，子类方法访问权限必须大于或者等于父类方法权限 （暂时了解 ：缺省 &lt; protected &lt; public） <ul><li>一般保持一致即可</li></ul></li></ul></li></ul><h4 id="_3-9-this和super关键字的区别" tabindex="-1">3.9 this和super关键字的区别 <a class="header-anchor" href="#_3-9-this和super关键字的区别" aria-label="Permalink to &quot;3.9 this和super关键字的区别&quot;">​</a></h4><ul><li>this : 代表的是本类的对象</li><li>super : 代表的是父类数据存储空间(可以看做成父类的对象)</li><li>使用 : <ul><li>调用变量 : <ul><li>this.变量名 : 访问本类的成员变量</li><li>super.变量名 : 访问父类的成员变量</li></ul></li><li>调用方法 : <ul><li>this.方法名(...) : 访问本类的成员方法</li><li>super.方法名(...): 访问父类的成员方法</li></ul></li><li>调用构造 : <ul><li>this.构造方法名(...) : 访问本类的构造方法</li><li>super.构造方法名(....) : 访问父类的构造方法</li></ul></li></ul></li></ul><h2 id="_4-抽象类" tabindex="-1">4 抽象类 <a class="header-anchor" href="#_4-抽象类" aria-label="Permalink to &quot;4 抽象类&quot;">​</a></h2><h4 id="_4-1-抽象类" tabindex="-1">4.1 抽象类 : <a class="header-anchor" href="#_4-1-抽象类" aria-label="Permalink to &quot;4.1 抽象类 :&quot;">​</a></h4><ul><li>抽象类其实就是为抽象方法提供存活的空间 , 需要在类的前面加上上abstract关键字进行修饰</li><li>抽象类的作用主要是规范子类必须实现某种规则</li></ul><h4 id="_4-2-抽象方法" tabindex="-1">4.2 抽象方法 : <a class="header-anchor" href="#_4-2-抽象方法" aria-label="Permalink to &quot;4.2 抽象方法 :&quot;">​</a></h4><ul><li>一个方法要么有方法体 , 要么是一个抽象方法</li></ul><h4 id="_4-3-抽象类的注意事项" tabindex="-1">4.3 抽象类的注意事项 : <a class="header-anchor" href="#_4-3-抽象类的注意事项" aria-label="Permalink to &quot;4.3 抽象类的注意事项 :&quot;">​</a></h4><ul><li>抽象方法和抽象类必须使用abstract关键字进行修饰</li><li>抽象类中可以抽象方法 , 也可以有非抽象方法 , 抽象方法必须存在抽象类中 <ul><li>抽象方法的作用 : 让子类必须实现此功能</li><li>非抽象方法的作用 : 让子类去继承此功能</li></ul></li><li>抽象类不能实例化</li><li>抽象类的子类 <ul><li>要么是一个抽象类</li><li>要么重写所有的抽象方法</li></ul></li></ul><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    注意事项</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        1 抽象方法和抽象类必须用关键字 abstract</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        2 抽象类中可以有抽象方法 , 也可由非抽象方法</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          但是抽象方法必须存在抽象类中</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          非抽象方法 : 让子类去继承 , 提高代码的复用性</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          抽象方法 : 让子类必须完成某些功能(规范)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        3 抽象类不能进行实例化(不能创建对象)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        4 抽象的子类</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            要么重写所有的抽象方法</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            要么这个子类是一个抽象类</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        抽象类虽然不能创建对象 , 但是存在构造方法</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        构造方法存在的意义 : 让子类去通过super访问 , 从而给抽象类中的私有变量赋值</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AnimalTest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 抽象类不能进行实例化(不能创建对象)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // Animal a = new Animal();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 抽象类案例</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> abstract</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Animal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String breed;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String color;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Animal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Animal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">breed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.breed </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> breed;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> color;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getBreed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> breed;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setBreed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">breed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.breed </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> breed;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> color;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> color;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 抽象方法</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> abstract</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> eat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> drink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;喝水....&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Dog</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Animal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Dog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Dog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">breed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> , String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// breed = &quot;边牧&quot; ,color = &quot;黑白&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        super</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(breed , color);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> eat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;狗吃骨头!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    需求：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    定义猫类（Cat）和狗类（Dog）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	猫类成员方法：eat（猫吃鱼）drink（喝水…）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	狗类成员方法：eat（狗吃肉）drink（喝水…）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	向上抽取父类 :</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	    Animal类 : 品种 , 颜色 , eat（);  , drink（）{喝水…}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AnimalTest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 空参构造 + set</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//        Dog d1 = new Dog();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//        d1.setBreed(&quot;哈士奇&quot;);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//        d1.setColor(&quot;黑白相间&quot;);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//        System.out.println(d1.getBreed() + &quot;---&quot; + d1.getColor());</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//        d1.drink();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//        d1.eat();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 全参构造</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Dog d2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Dog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;边牧&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> , </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;黑白&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(d2.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getBreed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;---&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d2.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_5-模板设计模式" tabindex="-1">5 模板设计模式 <a class="header-anchor" href="#_5-模板设计模式" aria-label="Permalink to &quot;5 模板设计模式&quot;">​</a></h2><h4 id="_5-1-设计模式" tabindex="-1">5.1 设计模式 <a class="header-anchor" href="#_5-1-设计模式" aria-label="Permalink to &quot;5.1 设计模式&quot;">​</a></h4><ul><li>一套良好的编码风格 , 经过众多的开发人员不断的测试总结而来</li></ul><h4 id="_5-2-模板设计模式" tabindex="-1">5.2 模板设计模式 <a class="header-anchor" href="#_5-2-模板设计模式" aria-label="Permalink to &quot;5.2 模板设计模式&quot;">​</a></h4><ul><li><p>可以把抽象类 , 看做一个模板 , 非抽象方法理解为模板的通过格式 , 抽象方法是使用者具体完成的业务逻辑</p></li><li><p>模板已经定义好了通用的结构 , 使用者只要关心自己需要的那部分实现的功能即可</p></li></ul><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> abstract</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;&lt;我的爸爸&gt;&gt;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 正文</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;啊~这就是我的爸爸.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> abstract</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Tom</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;那是一个秋天 , 风儿那么缠绵 ,记忆中,那天爸爸骑车送我放学回家 , &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;我的脚卡在了自行车链中 , 爸爸蹬不动, 他就站起来蹬!&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Tom tom </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Tom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        tom.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,36),g=[r,E,d];function y(c,o,u,F,A,D){return h(),l("div",null,g)}const C=n(e,[["render",y]]);export{m as __pageData,C as default};
