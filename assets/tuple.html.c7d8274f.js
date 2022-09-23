import{_ as t,r as e,o,b as c,d as n,e as p,F as l,a as u,f as s}from"./app.0556a3cd.js";const i={},r=u(`<h1 id="\u5143\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u5143\u7EC4" aria-hidden="true">#</a> \u5143\u7EC4</h1><p>\u6570\u7EC4\u5408\u5E76\u4E86\u76F8\u540C\u7C7B\u578B\u7684\u5BF9\u8C61\uFF0C\u800C\u5143\u7EC4\uFF08Tuple\uFF09\u5408\u5E76\u4E86\u4E0D\u540C\u7C7B\u578B\u7684\u5BF9\u8C61\u3002</p><p>\u5143\u7EC4\u8D77\u6E90\u4E8E\u51FD\u6570\u7F16\u7A0B\u8BED\u8A00\uFF08\u5982 F#\uFF09\uFF0C\u8FD9\u4E9B\u8BED\u8A00\u4E2D\u4F1A\u9891\u7E41\u4F7F\u7528\u5143\u7EC4\u3002</p><h2 id="\u7B80\u5355\u7684\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u7684\u4F8B\u5B50" aria-hidden="true">#</a> \u7B80\u5355\u7684\u4F8B\u5B50</h2><p>\u5B9A\u4E49\u4E00\u5BF9\u503C\u5206\u522B\u4E3A <code>string</code> \u548C <code>number</code> \u7684\u5143\u7EC4\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5F53\u8D4B\u503C\u6216\u8BBF\u95EE\u4E00\u4E2A\u5DF2\u77E5\u7D22\u5F15\u7684\u5143\u7D20\u65F6\uFF0C\u4F1A\u5F97\u5230\u6B63\u786E\u7684\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
tom<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">;</span>
tom<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>

tom<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
tom<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u53EA\u8D4B\u503C\u5176\u4E2D\u4E00\u9879\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
tom<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4F46\u662F\u5F53\u76F4\u63A5\u5BF9\u5143\u7EC4\u7C7B\u578B\u7684\u53D8\u91CF\u8FDB\u884C\u521D\u59CB\u5316\u6216\u8005\u8D4B\u503C\u7684\u65F6\u5019\uFF0C\u9700\u8981\u63D0\u4F9B\u6240\u6709\u5143\u7EC4\u7C7B\u578B\u4E2D\u6307\u5B9A\u7684\u9879\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
tom <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
tom <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// Property &#39;1&#39; is missing in type &#39;[string]&#39; but required in type &#39;[string, number]&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u8D8A\u754C\u7684\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u8D8A\u754C\u7684\u5143\u7D20" aria-hidden="true">#</a> \u8D8A\u754C\u7684\u5143\u7D20</h2><p>\u5F53\u6DFB\u52A0\u8D8A\u754C\u7684\u5143\u7D20\u65F6\uFF0C\u5B83\u7684\u7C7B\u578B\u4F1A\u88AB\u9650\u5236\u4E3A\u5143\u7EC4\u4E2D\u6BCF\u4E2A\u7C7B\u578B\u7684\u8054\u5408\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
tom <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
tom<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;male&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
tom<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Argument of type &#39;true&#39; is not assignable to parameter of type &#39;string | number&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,17),k={href:"http://www.typescriptlang.org/docs/handbook/basic-types.html#tuple",target:"_blank",rel:"noopener noreferrer"},d=s("Basic Types # Tuple"),b=s("\uFF08"),m={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#%E5%85%83%E7%BB%84-tuple",target:"_blank",rel:"noopener noreferrer"},g=s("\u4E2D\u6587\u7248"),h=s("\uFF09");function y(_,v){const a=e("ExternalLinkIcon");return o(),c(l,null,[r,n("ul",null,[n("li",null,[n("a",k,[d,p(a)]),b,n("a",m,[g,p(a)]),h])])],64)}var x=t(i,[["render",y]]);export{x as default};
