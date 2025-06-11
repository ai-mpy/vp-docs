<template><div><h1 id="信息科技八年级-第二单元-第7课-电子标签我揭秘" tabindex="-1"><a class="header-anchor" href="#信息科技八年级-第二单元-第7课-电子标签我揭秘"><span>信息科技八年级-第二单元-第7课-电子标签我揭秘</span></a></h1>
<p>PYTHON代码:</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> educore <span class="token keyword">import</span> oled<span class="token punctuation">,</span>rfid</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 初始化rfid模块</span></span>
<span class="line">scan_rfid <span class="token operator">=</span> rfid<span class="token punctuation">(</span>scl<span class="token operator">=</span><span class="token number">19</span><span class="token punctuation">,</span>sda<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">)</span></span>
<span class="line">oled<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 是否检测到卡</span></span>
<span class="line">    <span class="token keyword">if</span> scan_rfid<span class="token punctuation">.</span>find_card<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token comment"># 读取卡号</span></span>
<span class="line">        sn <span class="token operator">=</span> scan_rfid<span class="token punctuation">.</span>serial_number<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        oled<span class="token punctuation">.</span><span class="token keyword">print</span><span class="token punctuation">(</span>sn<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./py/u2l7_学习活动1.py" download>点击下载-u2l7_学习活动1.py</a></p>
</div></template>


