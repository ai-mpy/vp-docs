<template><div><h1 id="信息科技八年级-第三单元-第14课-远程控制更便捷" tabindex="-1"><a class="header-anchor" href="#信息科技八年级-第三单元-第14课-远程控制更便捷"><span>信息科技八年级-第三单元-第14课-远程控制更便捷</span></a></h1>
<p>PYTHON代码:</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> educore <span class="token keyword">import</span> wifi<span class="token punctuation">,</span> mqttclient<span class="token punctuation">,</span> button</span>
<span class="line"></span>
<span class="line">wifi<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>ssid<span class="token operator">=</span><span class="token string">'mywifi'</span><span class="token punctuation">,</span> psd<span class="token operator">=</span><span class="token string">'123456789'</span><span class="token punctuation">,</span> timeout<span class="token operator">=</span><span class="token number">10000</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">mqttclient<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>server<span class="token operator">=</span><span class="token string">'iot.mpython.cn'</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">1883</span><span class="token punctuation">,</span> client_id<span class="token operator">=</span><span class="token string">'5b47f88377'</span><span class="token punctuation">,</span> user<span class="token operator">=</span><span class="token string">'5b47fLPnCo'</span><span class="token punctuation">,</span> psd<span class="token operator">=</span><span class="token string">'5b47fPkugf'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> time</span>
<span class="line">btn_a <span class="token operator">=</span> button<span class="token punctuation">(</span>button<span class="token punctuation">.</span>a<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">if</span> btn_a<span class="token punctuation">.</span>status<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span></span>
<span class="line">        mqttclient<span class="token punctuation">.</span>publish<span class="token punctuation">(</span>topic<span class="token operator">=</span><span class="token string">'5b47fDXrEq'</span><span class="token punctuation">,</span> content<span class="token operator">=</span><span class="token string">'open'</span><span class="token punctuation">)</span></span>
<span class="line">        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./py/u3l14_学习活动2-任务1.py" download>点击下载-u3l14_学习活动2-任务1.py</a></p>
</div></template>


