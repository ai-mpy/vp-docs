<template><div><h1 id="火焰传感器" tabindex="-1"><a class="header-anchor" href="#火焰传感器"><span>火焰传感器</span></a></h1>
<img src="@source/sensor/img/DFR0076.jpg" alt="SKU:DFR0076" style="height:200px;">
<p><strong>功能</strong></p>
<p>火焰传感器可以用来探测火源或其它波长在760纳米～1100纳米范围内的光源。</p>
<p><strong>产品参数</strong></p>
<ul>
<li>接口: 模拟信号</li>
<li>电源 3.3V ~ 5V</li>
<li>探测距离:20cm (4.8V) ~ 100cm(1V)
随火焰靠近或亮度增加,传感器输出电压增高</li>
<li>探测光谱带: 760nm-1100nm</li>
<li>反馈时间: 15us</li>
</ul>
<img src="@source/sensor/img/flame_sensor_mix.png" alt="flame_sensor_mix" style="height:200px;">
<h2 id="生成代码" tabindex="-1"><a class="header-anchor" href="#生成代码"><span>生成代码</span></a></h2>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> mpbit <span class="token keyword">import</span> MPin<span class="token punctuation">,</span>PinMode</span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">on_p0_analog_change</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">if</span> value <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">'🔥强度'</span> <span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'未检测到🔥'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">p0 <span class="token operator">=</span> MPin<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> PinMode<span class="token punctuation">.</span>ANALOG<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">p0<span class="token punctuation">.</span>on_analog_change<span class="token punctuation">(</span>on_p0_analog_change<span class="token punctuation">,</span>threshold<span class="token operator">=</span><span class="token number">40</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./mix/火焰传感器.mix" download>点击下载-火焰传感器.mix</a></p>
</div></template>


