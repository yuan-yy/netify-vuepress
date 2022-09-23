import{_ as t,r as c,o as r,b as p,d as e,e as o,F as l,a as n,f as s}from"./app.0556a3cd.js";const d={},i=n('<h1 id="\u7F16\u8BD1\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u9009\u9879" aria-hidden="true">#</a> \u7F16\u8BD1\u9009\u9879</h1><p>TypeScript \u63D0\u4F9B\u4E86\u975E\u5E38\u591A\u7684\u7F16\u8BD1\u9009\u9879\uFF0C\u4F46\u662F\u5B98\u65B9\u6587\u6863\u5BF9\u6BCF\u4E00\u9879\u7684\u89E3\u91CA\u5F88\u62BD\u8C61\uFF0C\u8FD9\u4E00\u7AE0\u4F1A\u8BE6\u7EC6\u4ECB\u7ECD\u6BCF\u4E00\u4E2A\u9009\u9879\u7684\u4F5C\u7528\uFF0C\u5E76\u7ED9\u51FA\u5BF9\u5E94\u7684\u793A\u4F8B\u3002</p><p>\u7D22\u5F15\uFF08\u70B9\u51FB\u9009\u9879\u8DF3\u8F6C\u5230\u8BE6\u7EC6\u4ECB\u7ECD\uFF09\uFF1A</p><table><thead><tr><th>\u9009\u9879</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><a href="#allowjs"><code>allowJs</code></a></td><td><code>boolean</code></td><td><code>false</code></td><td>\u5141\u8BB8\u7F16\u8BD1 js \u6587\u4EF6</td></tr><tr><td><a href="#allowsyntheticdefaultimports"><code>allowSyntheticDefaultImports</code></a></td><td><code>boolean</code></td><td><code>false</code></td><td>\u5141\u8BB8\u5BF9\u4E0D\u5305\u542B\u9ED8\u8BA4\u5BFC\u51FA\u7684\u6A21\u5757\u4F7F\u7528\u9ED8\u8BA4\u5BFC\u5165\u3002\u8FD9\u4E2A\u9009\u9879\u4E0D\u4F1A\u5F71\u54CD\u751F\u6210\u7684\u4EE3\u7801\uFF0C\u53EA\u4F1A\u5F71\u54CD\u7C7B\u578B\u68C0\u67E5\u3002</td></tr></tbody></table><h2 id="allowjs" tabindex="-1"><a class="header-anchor" href="#allowjs" aria-hidden="true">#</a> allowJs</h2><blockquote><p>\u5141\u8BB8\u7F16\u8BD1 js \u6587\u4EF6\u3002</p></blockquote><p>\u8BBE\u7F6E\u4E3A <code>true</code> \u65F6\uFF0Cjs \u6587\u4EF6\u4F1A\u88AB tsc \u7F16\u8BD1\uFF0C\u5426\u5219\u4E0D\u4F1A\u3002\u4E00\u822C\u5728\u9879\u76EE\u4E2D js, ts \u6DF7\u5408\u5F00\u53D1\u65F6\u9700\u8981\u8BBE\u7F6E\u3002</p>',7),u={href:"https://github.com/xcatliu/typescript-tutorial/tree/master/examples/compiler-options/01-allowJs",target:"_blank",rel:"noopener noreferrer"},m=s("\u67E5\u770B\u793A\u4F8B"),b=n(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BBE\u7F6E\u4E3A true \u65F6\uFF0C\u7F16\u8BD1\u540E\u7684\u6587\u4EF6\u5305\u542B foo.js</span>
\u251C\u2500\u2500 lib
\u2502   \u251C\u2500\u2500 foo.js
\u2502   \u2514\u2500\u2500 index.js
\u251C\u2500\u2500 src
\u2502   \u251C\u2500\u2500 foo.js
\u2502   \u2514\u2500\u2500 index.ts
\u251C\u2500\u2500 package.json
\u2514\u2500\u2500 tsconfig.json
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BBE\u7F6E\u4E3A false \u65F6\uFF0C\u7F16\u8BD1\u540E\u7684\u6587\u4EF6\u4E0D\u5305\u542B foo.js</span>
\u251C\u2500\u2500 lib
\u2502   \u2514\u2500\u2500 index.js
\u251C\u2500\u2500 src
\u2502   \u251C\u2500\u2500 foo.js
\u2502   \u2514\u2500\u2500 index.ts
\u251C\u2500\u2500 package.json
\u2514\u2500\u2500 tsconfig.json
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="allowsyntheticdefaultimports" tabindex="-1"><a class="header-anchor" href="#allowsyntheticdefaultimports" aria-hidden="true">#</a> allowSyntheticDefaultImports</h2><blockquote><p>\u5141\u8BB8\u5BF9\u4E0D\u5305\u542B\u9ED8\u8BA4\u5BFC\u51FA\u7684\u6A21\u5757\u4F7F\u7528\u9ED8\u8BA4\u5BFC\u5165\u3002\u8FD9\u4E2A\u9009\u9879\u4E0D\u4F1A\u5F71\u54CD\u751F\u6210\u7684\u4EE3\u7801\uFF0C\u53EA\u4F1A\u5F71\u54CD\u7C7B\u578B\u68C0\u67E5\u3002</p></blockquote><p><code>export = foo</code> \u662F ts \u4E3A\u4E86\u517C\u5BB9 commonjs \u521B\u9020\u7684\u8BED\u6CD5\uFF0C\u5B83\u5BF9\u5E94\u4E8E commonjs \u4E2D\u7684 <code>module.exports = foo</code>\u3002</p><p>\u5728 ts \u4E2D\uFF0C\u5982\u679C\u8981\u5F15\u5165\u4E00\u4E2A\u901A\u8FC7 <code>export = foo</code> \u5BFC\u51FA\u7684\u6A21\u5757\uFF0C\u6807\u51C6\u7684\u8BED\u6CD5\u662F <code>import foo = require(&#39;foo&#39;)</code>\uFF0C\u6216\u8005 <code>import * as foo from &#39;foo&#39;</code>\u3002</p><p>\u4F46\u7531\u4E8E\u5386\u53F2\u539F\u56E0\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u4E60\u60EF\u4E86\u4F7F\u7528 <code>import foo from &#39;foo&#39;</code>\u3002</p><p>\u8FD9\u4E2A\u9009\u9879\u5C31\u662F\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002\u5F53\u5B83\u8BBE\u7F6E\u4E3A <code>true</code> \u65F6\uFF0C\u5141\u8BB8\u4F7F\u7528 <code>import foo from &#39;foo&#39;</code> \u6765\u5BFC\u5165\u4E00\u4E2A\u901A\u8FC7 <code>export = foo</code> \u5BFC\u51FA\u7684\u6A21\u5757\u3002\u5F53\u5B83\u8BBE\u7F6E\u4E3A <code>false</code> \u65F6\uFF0C\u5219\u4E0D\u5141\u8BB8\uFF0C\u4F1A\u62A5\u9519\u3002</p><p>\u5F53\u7136\uFF0C\u6211\u4EEC\u4E00\u822C\u4E0D\u4F1A\u5728 ts \u6587\u4EF6\u4E2D\u4F7F\u7528 <code>export = foo</code> \u6765\u5BFC\u51FA\u6A21\u5757\uFF0C\u800C\u662F\u5728<a href="../basics/declaration-files#export-1">\u5199\uFF08\u7B26\u5408 commonjs \u89C4\u8303\u7684\uFF09\u7B2C\u4E09\u65B9\u5E93\u7684\u58F0\u660E\u6587\u4EF6</a>\u65F6\uFF0C\u624D\u4F1A\u7528\u5230 <code>export = foo</code> \u6765\u5BFC\u51FA\u7C7B\u578B\u3002</p><p>\u6BD4\u5982 React \u7684\u58F0\u660E\u6587\u4EF6\u4E2D\uFF0C\u5C31\u662F\u901A\u8FC7 <code>export = React</code> \u6765\u5BFC\u51FA\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token operator">=</span> React<span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">as</span> <span class="token keyword">namespace</span> React<span class="token punctuation">;</span>

<span class="token keyword">declare</span> <span class="token keyword">namespace</span> React <span class="token punctuation">{</span>
    <span class="token comment">// \u58F0\u660E React \u7684\u7C7B\u578B</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,11),h=s("\u6B64\u65F6\u82E5\u6211\u4EEC\u901A\u8FC7 "),f=e("code",null,"import React from 'react'",-1),k=s(" \u6765\u5BFC\u5165 react \u5219\u4F1A\u62A5\u9519\uFF0C"),_={href:"https://github.com/xcatliu/typescript-tutorial/tree/master/examples/compiler-options/02-allowSyntheticDefaultImports",target:"_blank",rel:"noopener noreferrer"},x=s("\u67E5\u770B\u793A\u4F8B"),g=s(" \uFF1A"),y=n(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// Module &#39;&quot;typescript-tutorial/examples/compiler-options/02-allowSyntheticDefaultImports/false/node_modules/@types/react/index&quot;&#39; can only be default-imported using the &#39;esModuleInterop&#39; flagts(1259)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u89E3\u51B3\u529E\u6CD5\u5C31\u662F\u5C06 <code>allowSyntheticDefaultImports</code> \u8BBE\u7F6E\u4E3A <code>true</code>\u3002</p>`,2);function w(j,v){const a=c("ExternalLinkIcon");return r(),p(l,null,[i,e("p",null,[e("a",u,[m,o(a)])]),b,e("p",null,[h,f,k,e("a",_,[x,o(a)]),g]),y],64)}var R=t(d,[["render",w]]);export{R as default};
