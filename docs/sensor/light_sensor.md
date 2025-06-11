# 光线传感器

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

