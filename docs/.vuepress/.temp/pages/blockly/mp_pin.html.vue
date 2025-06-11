<template><div><h1 id="输入-输出" tabindex="-1"><a class="header-anchor" href="#输入-输出"><span>输入/输出</span></a></h1>
<p>读取数字信号
<br>
<img src="@source/blockly/img/mpbit_read_digital.png" alt="mpbit_read_digital" style="height:40px;"></p>
<p><strong>功能</strong>:</p>
<ul>
<li>读取指定引脚的数字电平状态(HIGH/LOW)</li>
<li>适用引脚:P0,P1,P2,P3,P6-P9,P13-P16,P19-P20</li>
</ul>
<p>生成代码示例:</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> mpbit <span class="token keyword">import</span> MPin<span class="token punctuation">,</span>PinMode</span>
<span class="line"><span class="token comment"># 初始化数字输入引脚</span></span>
<span class="line">p0 <span class="token operator">=</span> MPin<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> PinMode<span class="token punctuation">.</span>IN<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 读取当前电平状态</span></span>
<span class="line">p0<span class="token punctuation">.</span>read_digital<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="输出数字信号" tabindex="-1"><a class="header-anchor" href="#输出数字信号"><span>输出数字信号</span></a></h2>
<br>
<img src="@source/blockly/img/mpbit_set_digital.png" alt="mpbit_set_digital" style="height:45px;">
<p><strong>功能</strong>:</p>
<ul>
<li>设置指定引脚的输出电平</li>
<li>数字值 为 - 不设置,HIGH-高电平,LOW-低电平</li>
<li>适用引脚:P0,P1,P2,P3,P6-P9,P13-P16,P19-P20</li>
</ul>
<p>生成代码示例：</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> mpbit <span class="token keyword">import</span> MPin<span class="token punctuation">,</span>PinMode</span>
<span class="line"><span class="token comment"># 初始化数字输出引脚</span></span>
<span class="line">p0 <span class="token operator">=</span> MPin<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> PinMode<span class="token punctuation">.</span>OUT<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 设置高电平输出</span></span>
<span class="line">p0<span class="token punctuation">.</span>write_digital<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="读取模拟信号" tabindex="-1"><a class="header-anchor" href="#读取模拟信号"><span>读取模拟信号</span></a></h2>
<br>
<img src="@source/blockly/img/mpbit_read_analog.png" alt="mpbit_read_analog" style="height:40px;">
<p><strong>功能</strong>:</p>
<ul>
<li>读取指定引脚<strong>ADC</strong>的模拟值范围为(0-4095)</li>
<li>适用引脚:P0,P1,P2,P3</li>
</ul>
<p>生成代码示例:</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> mpbit <span class="token keyword">import</span> MPin<span class="token punctuation">,</span>PinMode</span>
<span class="line">p0 <span class="token operator">=</span> MPin<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> PinMode<span class="token punctuation">.</span>ANALOG<span class="token punctuation">)</span></span>
<span class="line">p0<span class="token punctuation">.</span>read_analog<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置模拟-pwm-值" tabindex="-1"><a class="header-anchor" href="#设置模拟-pwm-值"><span>设置模拟(PWM)值</span></a></h2>
<br>
<img src="@source/blockly/img/mpbit_set_analog.png" alt="mpbit_set_analog" style="height:45px;">
<p><strong>功能</strong>:</p>
<ul>
<li>设置指定引脚(PWM)的模拟值范围为0-1023</li>
<li>适用引脚:P0,P1,P2,P3,P6,P7,P8,P9,P13,P14,P15,P16,P19,P20</li>
</ul>
<p>生成代码示例:</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> mpbit <span class="token keyword">import</span> MPin<span class="token punctuation">,</span>PinMode</span>
<span class="line"></span>
<span class="line">p0 <span class="token operator">=</span> MPin<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> PinMode<span class="token punctuation">.</span>PWM<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">p0<span class="token punctuation">.</span>write_analog<span class="token punctuation">(</span><span class="token number">1023</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置16位精度-pwm-值" tabindex="-1"><a class="header-anchor" href="#设置16位精度-pwm-值"><span>设置16位精度(PWM)值</span></a></h2>
<br>
<img src="@source/blockly/img/mpbit_set_analog_16.png" alt="mpbit_set_analog_16" style="height:45px;">
<p><strong>功能</strong></p>
<ul>
<li>设置指定引脚(PWM)16位精度模拟值(0-65535)</li>
<li>适用引脚:P0,P1,P2,P3,P6,P7,P8,P9,P13,P14,P15,P16,P19,P20</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> mpbit <span class="token keyword">import</span> MPin<span class="token punctuation">,</span>PinMode</span>
<span class="line"></span>
<span class="line">p0 <span class="token operator">=</span> MPin<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> PinMode<span class="token punctuation">.</span>PWM<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">p0<span class="token punctuation">.</span>write_analog_u16<span class="token punctuation">(</span><span class="token number">65535</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置引脚-pwm-占空比" tabindex="-1"><a class="header-anchor" href="#设置引脚-pwm-占空比"><span>设置引脚(PWM)占空比</span></a></h2>
<br>
<img src="@source/blockly/img/mpbit_set_duty_percent.png" alt="mpbit_set_duty_percent" style="height:45px;">
<p><strong>功能</strong></p>
<ul>
<li>设置指定引脚(PWM)占空比(0-100%)</li>
<li>适用引脚:P0,P1,P2,P3,P6,P7,P8,P9,P13,P14,P15,P16,P19,P20</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> mpbit <span class="token keyword">import</span> MPin<span class="token punctuation">,</span>PinMode</span>
<span class="line"></span>
<span class="line">p0 <span class="token operator">=</span> MPin<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> PinMode<span class="token punctuation">.</span>PWM<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">p0<span class="token punctuation">.</span>set_duty_percent<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置引脚" tabindex="-1"><a class="header-anchor" href="#设置引脚"><span>设置引脚</span></a></h2>
<br>
<img src="@source/blockly/img/mpbit_set_pin.png" alt="mpbit_set_pin" style="height:45px;">
<p><strong>功能</strong></p>
<ul>
<li>模式可选(数字输入,数字输出,模拟输入,模拟输出,开漏输出)默认为数字输入</li>
<li>上下拉设置(无上下拉,下拉,上拉),默认为无上下拉</li>
<li>设置值(- 无,HIGH-高电平,LOW-低电平)默认为无</li>
</ul>
<blockquote>
<p>开漏输出(PinMode.OUT_DRAIN)是一种特殊的输出模式，其中引脚只能拉低电平（接地）或处于高阻态（悬空），不能主动输出高电平。当需要输出高电平时，需要外接上拉电阻将引脚拉高。这种模式允许多个设备共享同一总线而不会产生冲突，常用于I2C、单线总线等通信协议中。</p>
</blockquote>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> mpbit <span class="token keyword">import</span> MPin<span class="token punctuation">,</span>PinMode</span>
<span class="line"></span>
<span class="line">p0 <span class="token operator">=</span> MPin<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>PinMode<span class="token punctuation">.</span>IN<span class="token punctuation">,</span><span class="token boolean">None</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="读取引脚电平持续时间" tabindex="-1"><a class="header-anchor" href="#读取引脚电平持续时间"><span>读取引脚电平持续时间</span></a></h2>
<br>
<img src="@source/blockly/img/mpbit_time_pulse_us.png" alt="mpbit_time_pulse_us" style="height:40px;">
<p><strong>功能</strong>:</p>
<ul>
<li>获取引脚电平持续时间(微秒)</li>
<li>适用引脚:P0,P1,P2,P3,P6,P7,P8,P9,P13,P14,P15,P16,P19,P20</li>
</ul>
<p>生成代码示例:</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> machine <span class="token keyword">import</span> time_pulse_us</span>
<span class="line"><span class="token comment"># 高电平持续时间</span></span>
<span class="line">time_pulse_us<span class="token punctuation">(</span>Pin<span class="token punctuation">(</span>Pin<span class="token punctuation">.</span>P0<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1000000</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="当引脚电平上升下降或变化时" tabindex="-1"><a class="header-anchor" href="#当引脚电平上升下降或变化时"><span>当引脚电平上升下降或变化时</span></a></h2>
<br>
<img src="@source/blockly/img/mpbit_pin_irq.png" alt="mpbit_pin_irq" style="height:80px;">
<p><strong>功能</strong>:</p>
<ul>
<li>当引脚电平上升,下降或变化时(已加防抖算法处理)</li>
<li>可用于按钮传感器等按下,松开事件处理</li>
<li>适用引脚:P0,P1,P2,P3,P6,P7,P8,P9,P13,P14,P15,P16,P19,P20</li>
<li>默认防抖时间为50ms</li>
</ul>
<blockquote>
<p><RouteLink to="/sensor/digital_vibration_sensor.html">数字震动传感器</RouteLink>下降沿触发事件<br>
按钮传感器上升沿触发事件<br>
...</p>
</blockquote>
<p>生成代码示例:</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">from</span> mpbit <span class="token keyword">import</span> MPin<span class="token punctuation">,</span>PinMode</span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">on_p0_rising</span><span class="token punctuation">(</span>_<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">pass</span></span>
<span class="line"></span>
<span class="line">p0 <span class="token operator">=</span> MPin<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> PinMode<span class="token punctuation">.</span>IN<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">p0<span class="token punctuation">.</span>irq<span class="token punctuation">(</span>Pin<span class="token punctuation">.</span>IRQ_RISING<span class="token punctuation">,</span>on_p0_rising<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="当引脚电平模拟值改变时" tabindex="-1"><a class="header-anchor" href="#当引脚电平模拟值改变时"><span>当引脚电平模拟值改变时</span></a></h2>
<br>
<img src="@source/blockly/img/mpbit_analog_pin_event.png" alt="mpbit_analog_pin_event" style="height:80px;">
<p><strong>功能</strong>:</p>
<ul>
<li>当引脚电平模拟值改变时,阈值40为防抖算法</li>
<li>可用于旋转电位传感器等的模拟值变化事件处理</li>
<li>适用引脚:P0,P1,P2,P3</li>
</ul>
<p>生成代码示例:</p>
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


