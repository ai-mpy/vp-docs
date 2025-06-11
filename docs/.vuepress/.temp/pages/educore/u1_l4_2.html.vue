<template><div><h1 id="信息科技八年级-第一单元-第4课-物物相连有价值" tabindex="-1"><a class="header-anchor" href="#信息科技八年级-第一单元-第4课-物物相连有价值"><span>信息科技八年级-第一单元-第4课-物物相连有价值</span></a></h1>
<br>
<img src="@source/educore/img/u1_l4_2.png" alt="u1_l4_2" style="width:700px;">
<p>生成代码:</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> educore <span class="token keyword">import</span> light<span class="token punctuation">,</span>rgb<span class="token punctuation">,</span>sound</span>
<span class="line"><span class="token keyword">import</span> time</span>
<span class="line"></span>
<span class="line">pxs <span class="token operator">=</span> rgb<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span></span>
<span class="line">    light_value <span class="token operator">=</span> light<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    sound_value <span class="token operator">=</span> sound<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> light_value <span class="token operator">&lt;</span> <span class="token number">180</span> <span class="token keyword">and</span> sound_value <span class="token operator">></span> <span class="token number">100</span><span class="token punctuation">:</span></span>
<span class="line">        pxs<span class="token punctuation">.</span>write<span class="token punctuation">(</span>index<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>r<span class="token operator">=</span><span class="token builtin">int</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">,</span>g<span class="token operator">=</span><span class="token builtin">int</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>b<span class="token operator">=</span><span class="token builtin">int</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">        pxs<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./mix/u1l4_拓展与提升.mix" download>点击下载-u1l4_拓展与提升.mix</a></p>
</div></template>


