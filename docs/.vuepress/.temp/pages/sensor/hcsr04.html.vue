<template><div><h1 id="sr04超声波传感器" tabindex="-1"><a class="header-anchor" href="#sr04超声波传感器"><span>SR04超声波传感器</span></a></h1>
<p><strong>功能</strong></p>
<p>SR04超声波测距模块可提供2cm-400cm的距离感测，测距精度可达3mm。</p>
<h2 id="mixly-图形化编程" tabindex="-1"><a class="header-anchor" href="#mixly-图形化编程"><span>Mixly 图形化编程</span></a></h2>
<img src="@source/sensor/img/hcsr04_mix.png" alt="hcsr04_mix" style="height:160px;">
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>VCC引脚接3.3V</p>
</div>
<h2 id="生成代码" tabindex="-1"><a class="header-anchor" href="#生成代码"><span>生成代码</span></a></h2>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> mpbit<span class="token punctuation">.</span>mpin <span class="token keyword">import</span> MPin</span>
<span class="line"><span class="token keyword">from</span> hcsr04 <span class="token keyword">import</span> HCSR04</span>
<span class="line"><span class="token keyword">from</span> timer_manager <span class="token keyword">import</span> TimerManager</span>
<span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>hc_sr04<span class="token punctuation">.</span>distance_cm<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">hc_sr04 <span class="token operator">=</span> HCSR04<span class="token punctuation">(</span>trigger_pin<span class="token operator">=</span>MPin<span class="token punctuation">.</span>P0<span class="token punctuation">,</span>echo_pin<span class="token operator">=</span>MPin<span class="token punctuation">.</span>P1<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">TimerManager<span class="token punctuation">.</span>loop<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span>cb<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


