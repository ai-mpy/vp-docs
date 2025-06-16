# SG90 舵机

## MicroPython 范例
```python
from machine import Pin
from servo import Servo

servo_p0 = Servo(Pin.P0)

servo_p0.set_180_angle(90)
```

::: tip
需固件LGBIT支持
:::

## Mixly LGBIT 范例