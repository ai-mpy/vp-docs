<template><div><h1 id="数字震动传感器" tabindex="-1"><a class="header-anchor" href="#数字震动传感器"><span>数字震动传感器</span></a></h1>
<img src="@source/sensor/img/digital_vibration_sensor.jpg" alt="digital_vibration_sensor" style="height:120px;">
<p><strong>功能</strong><br>
数字震动传感器是一种能够检测物体震动或倾斜的传感器。当传感器检测到震动时，会输出数字信号。</p>
<p><a href="https://wiki.dfrobot.com.cn/_SKU_DFR0027_%E6%95%B0%E5%AD%97%E9%9C%87%E5%8A%A8%E4%BC%A0%E6%84%9F%E5%99%A8" target="_blank" rel="noopener noreferrer">DFRobot-数字震动传感器产品文档</a></p>
<img src="@source/sensor/img/digital_vibration_mix.png" alt="digital_vibration_mix" style="height:85px;">
<p>生成代码</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> mpbit <span class="token keyword">import</span> MPin<span class="token punctuation">,</span>PinMode</span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">on_p0_falling</span><span class="token punctuation">(</span>_<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'震动'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">p0 <span class="token operator">=</span> MPin<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> PinMode<span class="token punctuation">.</span>IN<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">p0<span class="token punctuation">.</span>irq<span class="token punctuation">(</span>Pin<span class="token punctuation">.</span>IRQ_FALLING<span class="token punctuation">,</span>on_p0_falling<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


