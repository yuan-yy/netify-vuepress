import{_ as n,a as s}from"./app.0556a3cd.js";const a={},p=s(`<h1 id="\u6709\u8DA3\u7684javascript" tabindex="-1"><a class="header-anchor" href="#\u6709\u8DA3\u7684javascript" aria-hidden="true">#</a> \u6709\u8DA3\u7684javascript</h1><h4 id="_1\u3001-\u7B26\u53F7" tabindex="-1"><a class="header-anchor" href="#_1\u3001-\u7B26\u53F7" aria-hidden="true">#</a> 1\u3001--&gt;\u7B26\u53F7</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">countdown</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">--</span><span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment">// &quot;n goes to zero&quot;</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">blastoff</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>



<span class="token operator">--</span><span class="token operator">&gt;</span> \u4E0A\u9762\u8FD9\u6BB5\u4EE3\u7801\u53EF\u4EE5\u6B63\u5E38\u8FD0\u884C\uFF0C\u5FAA\u73AF\u4F1A\u4E00\u76F4\u91CD\u590D\u76F4\u5230n\u8D8B\u4E8E<span class="token number">0</span>\uFF0C\u8FD9\u5F53\u7136\u4E0D\u662F<span class="token constant">ES6</span>\u4E2D\u7684\u65B0\u7279\u6027
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u603B\u7ED3\u6765\u8BF4\uFF1A\u5BF9\u4E8E\u4E00\u4E2A\u53D8\u91CF\u8D4B\u503C\uFF0C\u53D1\u751F\u4E86\u4E24\u4E2A\u4E0D\u540C\u7684\u52A8\u4F5C\uFF1A\u7B2C\u4E00\uFF0C*\u7F16\u8BD1\u5668* \u58F0\u660E\u4E00\u4E2A\u53D8\u91CF\uFF08\u5982\u679C\u5148\u524D\u6CA1\u6709\u5728\u5F53\u524D\u4F5C\u7528\u57DF\u4E2D\u58F0\u660E\u8FC7\uFF09\uFF0C\u7B2C\u4E8C\uFF0C\u5F53\u6267\u884C\u65F6\uFF0C*\u5F15\u64CE* \u5728 *\u4F5C\u7528\u57DF* \u4E2D\u67E5\u8BE2\u8FD9\u4E2A\u53D8\u91CF\u5E76\u7ED9\u5B83\u8D4B\u503C\uFF0C\u5982\u679C\u627E\u5230\u7684\u8BDD\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="_2\u3001\u4EC0\u4E48\u662F\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u4EC0\u4E48\u662F\u95ED\u5305" aria-hidden="true">#</a> 2\u3001\u4EC0\u4E48\u662F\u95ED\u5305</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\u5C0F\u59D0\u59D0\u7684\u7275\u624B\u3001\u5403\u996D\u3001\u8D2D\u7269<span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\u8FD9\u4E9B\u5C5E\u6027\u3002\u53EA\u80FD\u8BA9\u6211\u6765\u8BBF\u95EE \u8FD9\u5C31\u662F\u95ED\u5305\u3002

\u628A\u5C0F\u59D0\u59D0\u5F53\u505A\u4E00\u4E2A\u51FD\u6570\uFF0C\u5728\u5979\u7684\u5185\u90E8\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\uFF0C\u7136\u540E<span class="token keyword">return</span>\u8FD9\u4E2A\u51FD\u6570\u3002\u5F53\u5979<span class="token keyword">new</span>\u4E00\u4E2A\u5BF9\u8C61\u3002\u8FD4\u56DE\u7684\u51FD\u6570\u59CB\u5C31\u662F\u662F\u6211\u3002\u53EA\u6709\u6211\u80FD\u8BBF\u95EE \u5C0F\u59D0\u59D0\u8FD9\u4E2A\u51FD\u6570\u7684\u6240\u6709\u5C5E\u6027\u3002\u8FD9\u5C31\u662F\u95ED\u5305\u3002


<span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 5 5 5 5 5</span>


<span class="token comment">// 2</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">j</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u8FD9\u6837\u66F4\u7B80\u6D01</span>
    <span class="token comment">// setTimeout(function(j) {</span>
    <span class="token comment">//     console.log(j);</span>
    <span class="token comment">// }, 0, i);</span>
<span class="token punctuation">}</span>
<span class="token comment">// 0 1 2 3 4</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">j</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 0 1 2 3 4</span>


<span class="token comment">// 4</span>
<span class="token keyword">var</span> scope <span class="token operator">=</span> <span class="token string">&#39;global scope&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> scope <span class="token operator">=</span> <span class="token string">&#39;local scope&#39;</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>scope<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// local scope</span>


<span class="token comment">// 5</span>
<span class="token keyword">var</span> scope <span class="token operator">=</span> <span class="token string">&#39;global scope&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> scope <span class="token operator">=</span> <span class="token string">&#39;local scope&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>scope<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> fn <span class="token operator">=</span> <span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// local scope</span>


<span class="token comment">// 6</span>
<span class="token keyword">var</span> scope <span class="token operator">=</span> <span class="token string">&#39;global scope&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> scope <span class="token operator">=</span> <span class="token string">&#39;local scope&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>scope<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// local scope</span>


<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>
    <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
obj<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// tom</span>


<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>
    <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;alan&#39;</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
obj<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// &#39;tom&#39;</span>

<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;jerry&#39;</span><span class="token punctuation">;</span>   
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>  
    <span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>  
    <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
        <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>   
<span class="token punctuation">}</span><span class="token punctuation">;</span>  
obj<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// jerry</span>

<span class="token comment">// var name = &#39;jerry&#39;;</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>
    <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;alan&#39;</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> sayName <span class="token operator">=</span> obj<span class="token punctuation">.</span>sayName<span class="token punctuation">;</span>
<span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;&#39; // jerry</span>




<span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">fun</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">fun</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
d<span class="token punctuation">.</span><span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2 0</span>
d<span class="token punctuation">.</span><span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2 0</span>
d<span class="token punctuation">.</span><span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2 0</span>

<span class="token keyword">var</span> d1 <span class="token operator">=</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2 undefined 2 0</span>
<span class="token comment">// 2 1</span>
<span class="token comment">// 2 2</span>

<span class="token keyword">var</span> d2 <span class="token operator">=</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> d2<span class="token punctuation">.</span><span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2 undefined</span>
<span class="token comment">// 2 0</span>
<span class="token comment">// 2 1</span>
<span class="token comment">// 2 1</span>

d2<span class="token punctuation">.</span><span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {fun: \u0192}</span>


<span class="token literal-property property">\u539F\u6587\u94FE\u63A5\uFF1Ahttps</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>juejin<span class="token punctuation">.</span>cn<span class="token operator">/</span>post<span class="token operator">/</span><span class="token number">6911473286627098638</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br></div></div><h4 id="_3\u3001\u5199\u51FA\u81EA\u5DF1\u7684filter\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u5199\u51FA\u81EA\u5DF1\u7684filter\u65B9\u6CD5" aria-hidden="true">#</a> 3\u3001\u5199\u51FA\u81EA\u5DF1\u7684filter\u65B9\u6CD5</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">var</span> arra1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myfilter</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> list <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> h <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token keyword">of</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                h<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> h<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> arra <span class="token operator">=</span> arra1<span class="token punctuation">.</span><span class="token function">myfilter</span><span class="token punctuation">(</span>
        <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> a <span class="token operator">==</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h4 id="_4\u3001\u6A21\u62DFlet\u4E2D\u52A0\u5165\u5B9A\u65F6\u5668\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u6A21\u62DFlet\u4E2D\u52A0\u5165\u5B9A\u65F6\u5668\u65B9\u6CD5" aria-hidden="true">#</a> 4\u3001\u6A21\u62DFlet\u4E2D\u52A0\u5165\u5B9A\u65F6\u5668\u65B9\u6CD5</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span> i <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">logs</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            
        <span class="token punctuation">}</span><span class="token punctuation">,</span> i <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
  \u4E00\u5B9A\u8981\u8BB0\u4F4F\uFF0C<span class="token keyword">for</span>\u5FAA\u73AF\u7684\u672C\u8D28\u4E3A\u9012\u5F52\u64CD\u4F5C<span class="token punctuation">,</span>\u6BCF\u6B21\u5FAA\u73AF\u90FD\u8981\u8D4B\u503C\u64CD\u4F5C\u3002
    
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,10);function t(e,o){return p}var l=n(a,[["render",t]]);export{l as default};
