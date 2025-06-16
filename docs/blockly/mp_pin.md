---
title: 输入/输出
author: bright
---

# 输入/输出

读取数字信号  

<img src="./img/mpbit_read_digital.png" alt="mpbit_read_digital" style="height:40px;">

**功能**:

- 读取指定引脚的数字电平状态(HIGH/LOW) 
- 适用引脚:P0,P1,P2,P3,P6-P9,P13-P16,P19-P20

生成代码示例:

```python
from mpbit import MPin,PinMode
# 初始化数字输入引脚
p0 = MPin(0, PinMode.IN)
# 读取当前电平状态
p0.read_digital()
```

## 输出数字信号

<img src="./img/mpbit_set_digital.png" alt="mpbit_set_digital" style="height:45px;">

**功能**:

- 设置指定引脚的输出电平
- 数字值
  - [X] - 不设置
  - [ ] HIGH 高电平
  - [ ] LOW 低电平
- 适用引脚:P0,P1,P2,P3,P6-P9,P13-P16,P19-P20

生成代码示例：

```python
from mpbit import MPin,PinMode
# 初始化数字输出引脚
p0 = MPin(0, PinMode.OUT)
# 设置高电平输出
p0.write_digital(1)
```

## 读取模拟信号

<img src="./img/mpbit_read_analog.png" alt="mpbit_read_analog" style="height:40px;">

**功能**:

- 读取指定引脚**ADC**的模拟值范围为(0-4095)
- 适用引脚:P0,P1,P2,P3

生成代码示例:

```python
from mpbit import MPin,PinMode
p0 = MPin(0, PinMode.ANALOG)
p0.read_analog()
```

## 设置模拟(PWM)值

<img src="./img/mpbit_set_analog.png" alt="mpbit_set_analog" style="height:45px;">

**功能**:

- 设置指定引脚(PWM)的模拟值范围为0-1023
- 适用引脚:P0,P1,P2,P3,P6,P7,P8,P9,P13,P14,P15,P16,P19,P20

生成代码示例:

```python
from mpbit import MPin,PinMode

p0 = MPin(0, PinMode.PWM)

p0.write_analog(1023)
```

## 设置16位精度(PWM)值

<img src="./img/mpbit_set_analog_16.png" alt="mpbit_set_analog_16" style="height:45px;">

**功能**:

- 设置指定引脚(PWM)16位精度模拟值(0-65535)
- 适用引脚:P0,P1,P2,P3,P6,P7,P8,P9,P13,P14,P15,P16,P19,P20

```python
from mpbit import MPin,PinMode

p0 = MPin(0, PinMode.PWM)

p0.write_analog_u16(65535)
```

## 设置引脚(PWM)占空比

<img src="./img/mpbit_set_duty_percent.png" alt="mpbit_set_duty_percent" style="height:45px;">

**功能**:

- 设置指定引脚(PWM)占空比(0-100%)
- 适用引脚:P0,P1,P2,P3,P6,P7,P8,P9,P13,P14,P15,P16,P19,P20

```python
from mpbit import MPin,PinMode

p0 = MPin(0, PinMode.PWM)

p0.set_duty_percent(100)
```

## 设置引脚

<img src="./img/mpbit_set_pin.png" alt="mpbit_set_pin" style="height:45px;">

**功能**:

- 模式
  - [X] 数字输入
  - [ ] 数字输出
  - [ ] 模拟输出
  - [ ] 开漏输出
- 上下拉设置
  - [X] 无上下拉
  - 下拉
  - 上拉
- 数字值
  - [X] - 不设置
  - [ ] HIGH 高电平
  - [ ] LOW 低电平

::: tip
开漏输出(PinMode.OUT_DRAIN)是一种特殊的输出模式，其中引脚只能拉低电平（接地）或处于高阻态（悬空），不能主动输出高电平。当需要输出高电平时，需要外接上拉电阻将引脚拉高。这种模式允许多个设备共享同一总线而不会产生冲突，常用于I2C、单线总线等通信协议中。
:::

```python
from mpbit import MPin,PinMode

p0 = MPin(0,PinMode.IN,None)
```

## 读取引脚电平持续时间

<img src="./img/mpbit_time_pulse_us.png" alt="mpbit_time_pulse_us" style="height:40px;">

**功能**:

- 获取引脚电平持续时间(微秒)
- 适用引脚:P0,P1,P2,P3,P6,P7,P8,P9,P13,P14,P15,P16,P19,P20

生成代码示例:

```python
from machine import time_pulse_us
# 高电平持续时间
time_pulse_us(Pin(Pin.P0),1,1000000)
```

## 当引脚电平上升下降或变化时

<img src="./img/mpbit_pin_irq.png" alt="mpbit_pin_irq" style="height:80px;">

**功能**:

- 电平模式
  - [X] ↗从低到高
  - [ ] ↘从高到低
  - [ ] ↗↘改变时
- **中断回调非阻塞**
- 可用于按钮传感器等按下,松开事件处理
- 适用引脚:P0,P1,P2,P3,P6,P7,P8,P9,P13,P14,P15,P16,P19,P20
- 默认防抖时间为50ms

::: tip
[数字震动传感器](../sensor/digital_vibration_sensor.md) 可使用下降沿(震动时)触发事件  
按钮传感器 可使用上升沿触发事件(当按下时)
:::

生成代码示例:

```python
from mpbit import MPin,PinMode

def on_p0_rising(_):
    pass

p0 = MPin(0, PinMode.IN)

p0.irq(Pin.IRQ_RISING,on_p0_rising)
```

## 当引脚电平模拟值改变时(中断回调非阻塞)
<br/>
<img src="./img/mpbit_pin_analog_irq.png" alt="mpbit_pin_analog_irq" style="height:90px;">

**功能**:

- **定时管理器回调(20ms)**
- 当引脚电平模拟值改变时,阈值40为防抖算法
- 可用于旋转电位传感器等的模拟值变化事件处理
- 适用引脚:P0,P1,P2,P3

生成代码示例:

```python
from mpbit import MPin,PinMode

def on_p0_analog_change(value):
    print(value)

p0 = MPin(0, PinMode.ANALOG)

p0.on_analog_change(on_p0_analog_change,threshold=40)
``` 