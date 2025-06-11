<template><div><h1 id="信息科技八年级-第三单元-第14课-远程控制更便捷" tabindex="-1"><a class="header-anchor" href="#信息科技八年级-第三单元-第14课-远程控制更便捷"><span>信息科技八年级-第三单元-第14课-远程控制更便捷</span></a></h1>
<p>PYTHON代码:</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> educore <span class="token keyword">import</span> wifi<span class="token punctuation">,</span> mqttclient<span class="token punctuation">,</span> servo</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">global</span> s<span class="token punctuation">,</span> msg</span>
<span class="line">    servo<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>angle<span class="token punctuation">(</span><span class="token number">180</span><span class="token punctuation">)</span></span>
<span class="line">    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1.5</span><span class="token punctuation">)</span></span>
<span class="line">    servo<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>angle<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    wifi<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>ssid<span class="token operator">=</span><span class="token string">'mywifi'</span><span class="token punctuation">,</span> psd<span class="token operator">=</span><span class="token string">'123456789'</span><span class="token punctuation">,</span> timeout<span class="token operator">=</span><span class="token number">10000</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    mqttclient<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>server<span class="token operator">=</span><span class="token string">'iot.mpython.cn'</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">1883</span><span class="token punctuation">,</span> client_id<span class="token operator">=</span><span class="token string">'5b47f88377'</span><span class="token punctuation">,</span> user<span class="token operator">=</span><span class="token string">'5b47fLPnCo'</span><span class="token punctuation">,</span> psd<span class="token operator">=</span><span class="token string">'5b47fPkugf'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">receive_5b47fDXrEq</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">global</span> msg</span>
<span class="line">        msg <span class="token operator">=</span> mqttclient<span class="token punctuation">.</span>message<span class="token punctuation">(</span><span class="token string">"5b47fDXrEq"</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> msg <span class="token operator">==</span> <span class="token string">'open'</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    mqttclient<span class="token punctuation">.</span>received<span class="token punctuation">(</span>topic<span class="token operator">=</span><span class="token string">"5b47fDXrEq"</span><span class="token punctuation">,</span> callback<span class="token operator">=</span>receive_5b47fDXrEq<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./py/u3l14_学习活动2-任务2.py" download>点击下载-u3l14_学习活动2-任务2.py</a></p>
</div></template>


