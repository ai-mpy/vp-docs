#mPythonType:0
import urequests

import ujson

from educore import SoilHumiditySensor, light, oled, wifi

wifi.connect(ssid='mywifi', psd='123456789', timeout=10000)
city_code = 'CH010100'
key = 'cws921gkkqpqsjcg'
_response = urequests.get('http://api.yytianqi.com/forecast7d?city=' + str(city_code) + '&key=' + key)
if _response.status_code == 200:
    data = ujson.loads(_response.text)
    tq1 = data['data']['list'][0]['tq1']
    tq2 = data['data']['list'][0]['tq2']
    tq = [tq1, tq2]
hum_max = 3000
hum_min = 2000
while True:
    hum = SoilHumiditySensor(0).read()
    lgt = light().read()
    if hum > hum_max:
        oled.print('不灌溉')
    elif hum > hum_min:
        if '雨' in tq[0] or '雨' in tq[1]:
            oled.print('不灌溉')
        else:
            oled.print('灌溉')
        if lgt > 1200:
            hum_min = 2500
        else:
            hum_min = 2000
    else:
        oled.print('灌溉')
