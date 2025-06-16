<template><div><h1 id="sg90-舵机" tabindex="-1"><a class="header-anchor" href="#sg90-舵机"><span>SG90 舵机</span></a></h1>
<h2 id="micropython-范例" tabindex="-1"><a class="header-anchor" href="#micropython-范例"><span>MicroPython 范例</span></a></h2>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> machine <span class="token keyword">import</span> Pin</span>
<span class="line"><span class="token keyword">from</span> servo <span class="token keyword">import</span> Servo</span>
<span class="line"></span>
<span class="line">servo_p0 <span class="token operator">=</span> Servo<span class="token punctuation">(</span>Pin<span class="token punctuation">.</span>P0<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">servo_p0<span class="token punctuation">.</span>set_180_angle<span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>需固件LGBIT支持</p>
</div>
<h2 id="mixly-lgbit-范例" tabindex="-1"><a class="header-anchor" href="#mixly-lgbit-范例"><span>Mixly LGBIT 范例</span></a></h2>
</div></template>


