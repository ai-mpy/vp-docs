---
title: 数字震动传感器
author: bright
---

<!-- 由bright更新 -->

# 数字震动传感器

数字震动传感器是一种能够检测物体震动或倾斜的传感器。当传感器检测到震动时，会输出数字信号。

## 接线方式

将数字震动传感器连接到开发板上：

- VCC 连接到 3.3V 或 5V（根据传感器型号）
- GND 连接到 GND
- DO 连接到数字引脚（例如 D2）

## 代码示例

```python
from machine import Pin
import time

# 初始化数字震动传感器，连接到GPIO2
vibration_sensor = Pin(2, Pin.IN)

# 初始化LED指示灯
led = Pin(13, Pin.OUT)

def handle_vibration(pin):
    # 检测到震动，点亮LED
    led.value(1)
    print("检测到震动！")
    time.sleep(1)
    led.value(0)

# 设置中断处理函数
vibration_sensor.irq(trigger=Pin.IRQ_FALLING, handler=handle_vibration)

# 主循环
while True:
    # 可以在这里添加其他任务
    time.sleep(0.1)
```

## 注意事项

1. 数字震动传感器通常有一个可调节的灵敏度旋钮，可以根据需要调整触发阈值。
2. 在高振动环境中使用时，可能需要添加去抖动代码，避免频繁触发。
3. 有些数字震动传感器还提供模拟输出，可以获取更详细的震动强度信息。