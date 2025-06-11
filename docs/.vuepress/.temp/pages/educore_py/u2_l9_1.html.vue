<template><div><h1 id="信息科技八年级-第二单元-第9课-互联协议仍沿用" tabindex="-1"><a class="header-anchor" href="#信息科技八年级-第二单元-第9课-互联协议仍沿用"><span>信息科技八年级-第二单元-第9课-互联协议仍沿用</span></a></h1>
<p>PYTHON代码:</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> educore <span class="token keyword">import</span> oled<span class="token punctuation">,</span> wifi</span>
<span class="line"></span>
<span class="line">wifi<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>ssid<span class="token operator">=</span><span class="token string">'mywifi'</span><span class="token punctuation">,</span> psd<span class="token operator">=</span><span class="token string">'123456789'</span><span class="token punctuation">,</span> timeout<span class="token operator">=</span><span class="token number">10000</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> urequests</span>
<span class="line"><span class="token keyword">import</span> ujson</span>
<span class="line"></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">'https://quan.suning.com/getSysTime.do'</span></span>
<span class="line">_response <span class="token operator">=</span> urequests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line">res <span class="token operator">=</span> _response<span class="token punctuation">.</span>text</span>
<span class="line">data <span class="token operator">=</span> ujson<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>res<span class="token punctuation">)</span></span>
<span class="line">nowtime <span class="token operator">=</span> data<span class="token punctuation">[</span><span class="token string">'sysTime2'</span><span class="token punctuation">]</span></span>
<span class="line">oled<span class="token punctuation">.</span><span class="token keyword">print</span><span class="token punctuation">(</span>nowtime<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./py/u2l9_学习活动2.py" download>点击下载-u2l9_学习活动2.py</a></p>
</div></template>


