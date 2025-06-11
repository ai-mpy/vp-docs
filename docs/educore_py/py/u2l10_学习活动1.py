#mPythonType:0
from educore import oled, mqttclient, wifi

wifi.connect(ssid='mywifi', psd='123456789', timeout=10000)

mqttclient.connect(server='iot.mpython.cn', port=1883, client_id='5b47fb0237', user='5b47fEH1Yl', psd='5b47ftsQnd')

def receive_5b47fVI4CX():
    global msg
    msg = mqttclient.message("5b47fVI4CX")
    oled.print(msg)
if mqttclient.connected():
    oled.print('已连接')
else:
    oled.print('未连接')
mqttclient.received(topic="5b47fVI4CX", callback=receive_5b47fVI4CX)
