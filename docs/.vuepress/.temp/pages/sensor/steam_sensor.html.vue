<template><div><h1 id="水分传感器" tabindex="-1"><a class="header-anchor" href="#水分传感器"><span>水分传感器</span></a></h1>
<img src="@source/sensor/img/steam_sensor.jpg" alt="steam_sensor" style="height:200px;">
<p><strong>功能</strong><br>
通过湿度触控传感器检测水分</p>
<img src="@source/sensor/img/pin_analog_irq.png" alt="pin_analog_irq" style="height:100px;">
<h2 id="生成代码示例" tabindex="-1"><a class="header-anchor" href="#生成代码示例"><span>生成代码示例</span></a></h2>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> mpbit <span class="token keyword">import</span> MPin<span class="token punctuation">,</span>PinMode</span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">on_p0_analog_change</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">p0 <span class="token operator">=</span> MPin<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> PinMode<span class="token punctuation">.</span>ANALOG<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">p0<span class="token punctuation">.</span>on_analog_change<span class="token punctuation">(</span>on_p0_analog_change<span class="token punctuation">,</span>threshold<span class="token operator">=</span><span class="token number">40</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


