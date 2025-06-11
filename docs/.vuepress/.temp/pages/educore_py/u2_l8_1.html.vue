<template><div><h1 id="信息科技八年级-第二单元-第8课-巧用蓝牙做工具" tabindex="-1"><a class="header-anchor" href="#信息科技八年级-第二单元-第8课-巧用蓝牙做工具"><span>信息科技八年级-第二单元-第8课-巧用蓝牙做工具</span></a></h1>
<p>PYTHON代码:</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> educore <span class="token keyword">import</span> hid<span class="token punctuation">,</span> keycode<span class="token punctuation">,</span> accelerometer<span class="token punctuation">,</span> oled</span>
<span class="line"></span>
<span class="line">ble_hid <span class="token operator">=</span> hid<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">'mpy_hid'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">acc <span class="token operator">=</span> accelerometer<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">if</span> ble_hid<span class="token punctuation">.</span>isconnected<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        oled<span class="token punctuation">.</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'蓝牙设备已连接'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> acc<span class="token punctuation">.</span>shake<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        ble_hid<span class="token punctuation">.</span>keyboard_send<span class="token punctuation">(</span>keycode<span class="token punctuation">.</span>SPACE<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./py/u2l8_学习活动2.py" download>点击下载-u2l8_学习活动2.py</a></p>
</div></template>


