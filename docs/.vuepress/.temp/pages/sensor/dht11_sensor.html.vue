<template><div><h1 id="dht11数字温湿度传感器" tabindex="-1"><a class="header-anchor" href="#dht11数字温湿度传感器"><span>DHT11数字温湿度传感器</span></a></h1>
<img src="@source/sensor/img/dht11_sensor.jpg" alt="dht11_sensor" style="height:120px;">
<p><strong>功能</strong></p>
<p>含有已校准数字信号输出的温湿度复合传感器</p>
<h2 id="产品参数" tabindex="-1"><a class="header-anchor" href="#产品参数"><span>产品参数</span></a></h2>
<ul>
<li>接口: 数字</li>
<li>电压: +5V</li>
<li>温度: 0-50℃ 误差±2℃</li>
<li>湿度：20-90%RH 误差±5%RH</li>
</ul>
<img src="@source/sensor/img/dht11_mix.png" alt="dht11_mix" style="height:250px;">
<h2 id="生成代码示例" tabindex="-1"><a class="header-anchor" href="#生成代码示例"><span>生成代码示例</span></a></h2>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> timer_manager <span class="token keyword">import</span> TimerManager</span>
<span class="line"><span class="token keyword">from</span> mpbit <span class="token keyword">import</span> oled</span>
<span class="line"><span class="token keyword">from</span> mpbit<span class="token punctuation">.</span>mpin <span class="token keyword">import</span> MPin</span>
<span class="line"><span class="token keyword">import</span> dhtx</span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    oled<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">    oled<span class="token punctuation">.</span>draw_text<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span><span class="token string">'温度:'</span><span class="token operator">+</span><span class="token builtin">str</span><span class="token punctuation">(</span>dht11_p0<span class="token punctuation">.</span>temperature<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>mode<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>wrap<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span></span>
<span class="line">    oled<span class="token punctuation">.</span>draw_text<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span><span class="token string">'湿度:'</span><span class="token operator">+</span><span class="token builtin">str</span><span class="token punctuation">(</span>dht11_p0<span class="token punctuation">.</span>humidity<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">16</span><span class="token punctuation">,</span>mode<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>wrap<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span></span>
<span class="line">    oled<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">dht11_p0 <span class="token operator">=</span> dhtx<span class="token punctuation">.</span>DHT11<span class="token punctuation">(</span>MPin<span class="token punctuation">.</span>P0<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">TimerManager<span class="token punctuation">.</span>loop<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span>cb<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./mix/DHT11.mix" download>点击下载-DHT11.mix</a></p>
</div></template>


