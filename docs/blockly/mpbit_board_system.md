---
title: 板载输入
author: bright
---

# 板载输入

## 读取触摸按键的值  
<br/>
<img src="./img/mpbit_touchpad_read.png" alt="mpbit_touchpad_read" style="height:40px;">

**功能**:

- 读取指定触摸按键的值,1为按下,0为松开
- 触摸键 P,Y,T,H,O,N

生成代码示例:

```python
from mpbit import touchpad_p

touchpad_p.read()
``` 

## 设置触摸键阀值
<br/>
<img src="./img/mpbit_touchpad_threshold.png" alt="mpbit_touchpad_threshold" style="height:45px;">

**功能**:

- 设置触摸键阀值来调整触摸灵敏度默认为400
- 触摸键 P,Y,T,H,O,N

生成代码示例:

```python
from mpbit import touchpad_p

touchpad_p.config(400)
```

## 返回声音值
<br/>
<img src="./img/mpbit_read_sound.png" alt="mpbit_read_sound" style="height:35px;">

**功能**:

- 返回板载声音传感器的模拟值(0-4095)

```python
from mpbit import sound

sound.read()
```

## 返回光线值
<br/>
<img src="./img/mpbit_read_light.png" alt="mpbit_read_light" style="height:35px;">

**功能**:

- 返回板载光线传感器的模拟值(0-4095)

```python
from mpbit import light

light.read()
```

## 返回(X/Y/Z)加速度值
<br/>
<img src="./img/mpbit_accelerometer_get.png" alt="mpbit_accelerometer_get" style="height:35px;">

**功能**:

- 返回(X/Y/Z)加速度值

```python
from mpbit import accelerometer

accelerometer.get_x()
```

## 返回X/Y/Z角速度值
<br/>
<img src="./img/mpbit_gyroscope_get.png" alt="mpbit_gyroscope_get" style="height:35px;">

```python
from mpbit import gyroscope

gyroscope.get_x()
```