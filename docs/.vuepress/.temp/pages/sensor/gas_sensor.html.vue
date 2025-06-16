<template><div><h1 id="模拟烟雾报警器" tabindex="-1"><a class="header-anchor" href="#模拟烟雾报警器"><span>模拟烟雾报警器</span></a></h1>
<img src="@source/sensor/img/DFR0127.jpg" alt="DFR0127" style="height:160px;">
<p><strong>功能</strong></p>
<p><strong>产品参数</strong></p>
<ul>
<li>接口: 模拟信号</li>
<li>电源: 5V</li>
<li>调节电位器: 顺时针调节大，逆时针调节小</li>
</ul>
<p><a href="https://img.dfrobot.com.cn/wikicn/62b2fb5caa613609f271523c/141f3be4a968057149dd76659026b4b0.pdf" target="_blank" rel="noopener noreferrer">数据手册</a></p>
<h2 id="生成代码" tabindex="-1"><a class="header-anchor" href="#生成代码"><span>生成代码</span></a></h2>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> mpbit <span class="token keyword">import</span> MPin<span class="token punctuation">,</span>PinMode</span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">on_p0_analog_change</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">if</span> value <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">'烟雾强度'</span> <span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'未检测到烟雾'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">p0 <span class="token operator">=</span> MPin<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> PinMode<span class="token punctuation">.</span>ANALOG<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">p0<span class="token punctuation">.</span>on_analog_change<span class="token punctuation">(</span>on_p0_analog_change<span class="token punctuation">,</span>threshold<span class="token operator">=</span><span class="token number">40</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


