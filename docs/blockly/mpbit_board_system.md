---
title: 板载输入
author: bright
---

# 板载输入

## 读取触摸按键的值
<br>
<img src="./img/mpbit_touchpad_read.png" alt="mpbit_touchpad_read" style="height:40px;">

**功能**:

- 读取指定触摸按键的值,1为按下,0为松开
- 触摸键 P,Y,T,H,O,N

生成代码示例:

```python
from mpbit import touchpad_p

touchpad_p.read()
``` 