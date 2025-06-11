---
title: 光线传感器
author: bright
---

<!-- 由bright更新 -->

# 光线传感器

光线传感器是一种能够检测环境光线强度的传感器。它通常由光敏电阻或光电二极管构成，可以将光信号转换为电信号。

## 接线方式

将光线传感器连接到开发板上：

- VCC 连接到 3.3V
- GND 连接到 GND
- OUT 连接到 GPIO 引脚（例如 D2）

## 代码示例

```python
from machine import Pin, ADC
import time

# 初始化ADC，连接到GPIO34（ADC1_CH6）
light_sensor = ADC(Pin(34))
light_sensor.atten(ADC.ATTN_11DB)  # 设置衰减，满量程为3.3V

while True:
    # 读取ADC值，范围0-4095
    value = light_sensor.read()
    
    # 转换为电压值
    voltage = value / 4095 * 3.3
    
    # 打印结果
    print("ADC值: {}, 电压: {:.2f}V".format(value, voltage))
    
    # 根据光线强度判断
    if value < 1000:
        print("环境光线较暗")
    elif value < 2000:
        print("环境光线适中")
    else:
        print("环境光线明亮")
    
    time.sleep(1)
```

## 注意事项

1. 不同的光线传感器可能有不同的接口和特性，请参考具体型号的数据手册。
2. 光线传感器的输出可能会受到环境因素的影响，如温度变化。
3. 在室外使用时，应注意避免阳光直射造成的测量饱和。

<img src="./img/DFR0026.png" alt="SKU:DFR0026" style="height:120px;">

###### MicroPython标准库范例

``` python
from machine import ADC
import time

adc0 = ADC(0)

while True:
    print("adc0=", adc0.read())
    time.sleep(0.1)
```

###### LGBIT-Mixly高级用法
<br>
<img src="./img/光线传感器2.png" alt="光线传感器2" height="80">

``` python

from mpbit import MPin,PinMode

def on_p0_analog_change(value):
    print(value)

p0 = MPin(0, PinMode.ANALOG)

p0.on_analog_change(on_p0_analog_change,threshold=40)
```

