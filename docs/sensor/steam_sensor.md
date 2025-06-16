# 水分传感器

<img src="./img/steam_sensor.jpg" alt="steam_sensor" style="height:200px;">

**功能**  
通过湿度触控传感器检测水分

<img src="./img/pin_analog_irq.png" alt="pin_analog_irq" style="height:100px;">


## 生成代码示例

```python
from mpbit import MPin,PinMode

def on_p0_analog_change(value):
    print(value)

p0 = MPin(0, PinMode.ANALOG)

p0.on_analog_change(on_p0_analog_change,threshold=40)
```
