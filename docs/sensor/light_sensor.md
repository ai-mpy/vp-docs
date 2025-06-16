---
title: 光线传感器
---

# 光线传感器

<img src="./img/light_sensor.png" alt="light_sensor" style="height:120px;">

**功能**  
光线传感器是一种能够检测环境光线强度的传感器。它通常由光敏电阻或光电二极管构成，可以将光信号转换为电信号。

<img src="./img/pin_analog_irq.png" alt="pin_analog_irq" style="height:100px;">


## 生成代码示例

```python
from mpbit import MPin,PinMode

def on_p0_analog_change(value):
    print(value)

p0 = MPin(0, PinMode.ANALOG)

p0.on_analog_change(on_p0_analog_change,threshold=40)
```