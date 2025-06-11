<template><div><h1 id="信息科技八年级-第三单元-第13课-门铃通知即时到" tabindex="-1"><a class="header-anchor" href="#信息科技八年级-第三单元-第13课-门铃通知即时到"><span>信息科技八年级-第三单元-第13课-门铃通知即时到</span></a></h1>
<p>PYTHON代码:</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> educore <span class="token keyword">import</span> oled<span class="token punctuation">,</span> wifi<span class="token punctuation">,</span> mqttclient</span>
<span class="line"></span>
<span class="line">wifi<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>ssid<span class="token operator">=</span><span class="token string">'mywifi'</span><span class="token punctuation">,</span> psd<span class="token operator">=</span><span class="token string">'123456789'</span><span class="token punctuation">,</span> timeout<span class="token operator">=</span><span class="token number">10000</span><span class="token punctuation">)</span></span>
<span class="line">mqttclient<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>server<span class="token operator">=</span><span class="token string">'iot.mpython.cn'</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">1883</span><span class="token punctuation">,</span> client_id<span class="token operator">=</span><span class="token string">'5b47f10241'</span><span class="token punctuation">,</span> user<span class="token operator">=</span><span class="token string">'5b47fGR9Dy'</span><span class="token punctuation">,</span> psd<span class="token operator">=</span><span class="token string">'5b47fdIdrz'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">receive_5b47fD2cGl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">global</span> msg</span>
<span class="line">    msg <span class="token operator">=</span> mqttclient<span class="token punctuation">.</span>message<span class="token punctuation">(</span><span class="token string">"5b47fD2cGl"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> msg <span class="token operator">==</span> <span class="token string">'有人按门铃'</span><span class="token punctuation">:</span></span>
<span class="line">        oled<span class="token punctuation">.</span><span class="token keyword">print</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span></span>
<span class="line">        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span></span>
<span class="line">        oled<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">mqttclient<span class="token punctuation">.</span>received<span class="token punctuation">(</span>topic<span class="token operator">=</span><span class="token string">"5b47fD2cGl"</span><span class="token punctuation">,</span> callback<span class="token operator">=</span>receive_5b47fD2cGl<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./py/u3l13_学习活动2-任务2.py" download>点击下载-u3l13_学习活动2-任务2.py</a></p>
</div></template>


