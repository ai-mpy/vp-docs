<template><div><h1 id="光线传感器" tabindex="-1"><a class="header-anchor" href="#光线传感器"><span>光线传感器</span></a></h1>
<img src="@source/sensor/img/DFR0026.png" alt="SKU:DFR0026" style="height:120px;">
<p>光线传感器是一种能够检测环境光线强度的传感器。它通常由光敏电阻或光电二极管构成，可以将光信号转换为电信号。</p>
<ul>
<li>MicroPython标准库范例</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> machine <span class="token keyword">import</span> ADC</span>
<span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line">adc0 <span class="token operator">=</span> ADC<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"adc0="</span><span class="token punctuation">,</span> adc0<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>LGBIT-Mixly高级用法
<br>
<img src="@source/sensor/img/光线传感器2.png" alt="光线传感器2" height="80"></li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"></span>
<span class="line"><span class="token keyword">from</span> mpbit <span class="token keyword">import</span> MPin<span class="token punctuation">,</span>PinMode</span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">on_p0_analog_change</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">p0 <span class="token operator">=</span> MPin<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> PinMode<span class="token punctuation">.</span>ANALOG<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">p0<span class="token punctuation">.</span>on_analog_change<span class="token punctuation">(</span>on_p0_analog_change<span class="token punctuation">,</span>threshold<span class="token operator">=</span><span class="token number">40</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


