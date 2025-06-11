<template><div><h1 id="信息科技八年级-第三单元-第12课-刷卡开锁易实现" tabindex="-1"><a class="header-anchor" href="#信息科技八年级-第三单元-第12课-刷卡开锁易实现"><span>信息科技八年级-第三单元-第12课-刷卡开锁易实现</span></a></h1>
<p>PYTHON代码:</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> educore <span class="token keyword">import</span> rfid<span class="token punctuation">,</span> servo</span>
<span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line">scan_rfid <span class="token operator">=</span> rfid<span class="token punctuation">(</span>sda<span class="token operator">=</span><span class="token number">14</span><span class="token punctuation">,</span> scl<span class="token operator">=</span><span class="token number">13</span><span class="token punctuation">)</span></span>
<span class="line">sn_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'36384575'</span><span class="token punctuation">,</span> <span class="token string">'1025599731'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">if</span> scan_rfid<span class="token punctuation">.</span>find_card<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        sn <span class="token operator">=</span> rf<span class="token punctuation">.</span>serial_number<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> sn <span class="token keyword">in</span> sn_list<span class="token punctuation">:</span></span>
<span class="line">            servo<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>angle<span class="token punctuation">(</span><span class="token number">180</span><span class="token punctuation">)</span></span>
<span class="line">            time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line">            servo<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>angle<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./py/u3l12_学习活动3.py" download>点击下载-u3l12_学习活动3.py</a></p>
</div></template>


