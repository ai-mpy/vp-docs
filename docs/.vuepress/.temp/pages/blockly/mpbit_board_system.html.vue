<template><div><h1 id="板载输入" tabindex="-1"><a class="header-anchor" href="#板载输入"><span>板载输入</span></a></h1>
<h2 id="读取触摸按键的值" tabindex="-1"><a class="header-anchor" href="#读取触摸按键的值"><span>读取触摸按键的值</span></a></h2>
<br>
<img src="@source/blockly/img/mpbit_touchpad_read.png" alt="mpbit_touchpad_read" style="height:40px;">
<p><strong>功能</strong>:</p>
<ul>
<li>读取指定触摸按键的值,1为按下,0为松开</li>
<li>触摸键 P,Y,T,H,O,N</li>
</ul>
<p>生成代码示例:</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> mpbit <span class="token keyword">import</span> touchpad_p</span>
<span class="line"></span>
<span class="line">touchpad_p<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置触摸键阀值" tabindex="-1"><a class="header-anchor" href="#设置触摸键阀值"><span>设置触摸键阀值</span></a></h2>
<br>
<img src="@source/blockly/img/mpbit_touchpad_threshold.png" alt="mpbit_touchpad_threshold" style="height:50px;">
<p><strong>功能</strong></p>
<ul>
<li>设置触摸键阀值来调整触摸灵敏度默认为400</li>
<li>触摸键 P,Y,T,H,O,N</li>
</ul>
<p>生成代码示例:</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> mpbit <span class="token keyword">import</span> touchpad_p</span>
<span class="line"></span>
<span class="line">touchpad_p<span class="token punctuation">.</span>config<span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="返回声音值" tabindex="-1"><a class="header-anchor" href="#返回声音值"><span>返回声音值</span></a></h2>
<br>
<img src="@source/blockly/img/mpbit_read_sound.png" alt="mpbit_read_sound" style="height:35px;">
<p><strong>功能</strong></p>
<ul>
<li>返回板载声音传感器的模拟值(0-4095)</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> mpbit <span class="token keyword">import</span> sound</span>
<span class="line"></span>
<span class="line">sound<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="返回光线值" tabindex="-1"><a class="header-anchor" href="#返回光线值"><span>返回光线值</span></a></h2>
<br>
<img src="@source/blockly/img/mpbit_read_light.png" alt="mpbit_read_light" style="height:35px;">
<p><strong>功能</strong></p>
<ul>
<li>返回板载光线传感器的模拟值(0-4095)</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> mpbit <span class="token keyword">import</span> light</span>
<span class="line"></span>
<span class="line">light<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="返回-x-y-z-加速度值" tabindex="-1"><a class="header-anchor" href="#返回-x-y-z-加速度值"><span>返回(X/Y/Z)加速度值</span></a></h2>
<br>
<img src="@source/blockly/img/mpbit_accelerometer_get.png" alt="mpbit_accelerometer_get" style="height:35px;">
<p><strong>功能</strong></p>
<ul>
<li>返回(X/Y/Z)加速度值</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> mpbit <span class="token keyword">import</span> accelerometer</span>
<span class="line"></span>
<span class="line">accelerometer<span class="token punctuation">.</span>get_x<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


