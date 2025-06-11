#mPythonType:0
from educore import servo, oled, wifi, mqttclient

wifi.connect(ssid='mywifi', psd='123456789', timeout=10000)

mqttclient.connect(server='iot.mpython.cn', port=1883, client_id='5b47ff4827', user='5b47fp0Zu6', psd='5b47f2hYyX')

import time

def receive_5b47fTBHaZ():
    global s, cmd, psd, user, users, msg
    msg = mqttclient.message("5b47fTBHaZ")
    users = ['user1', 'psd1']
    msg = msg.split(',')
    if len(msg) == 3:
        user = msg[0]
        psd = msg[1]
        cmd = msg[2]
        if user == users[0] and psd == users[1]:
            if cmd == 'open':
                servo(0).angle(180)
                time.sleep(1.5)
                servo(0).angle(0)
        else:
            oled.print('用户名或密码错误！')
mqttclient.received(topic="5b47fTBHaZ", callback=receive_5b47fTBHaZ)
