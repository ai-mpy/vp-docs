#mPythonType:0
from educore import oled, mqttclient, wifi

wifi.connect(ssid='mywifi', psd='123456789', timeout=10000)

mqttclient.connect(server='iot.mpython.cn', port=1883, client_id='a73ac32c25', user='a73acV5ktf', psd='a73acNjTf7')

def receive_a73acOQbFR():
    global xb, bj, msg, m, f
    msg = (mqttclient.message("a73acOQbFR")).split(',')
    bj = msg[0]
    xb = msg[1]
    if xb == '男':
        f[bj] = (f[bj] + 1)
    else:
        m[bj] = (m[bj] + 1)
    oled.print('班级    男生    女生\n1           ' + str(f['1班']) + '           ' + str(m['1班']) + '\n2           ' + str(f['2班']) + '           ' + str(m['2班']) + '\n3           ' + str(f['3班']) + '           ' + str(m['3班']))
f = {"1班":0, "2班":0, "3班":0}
m = {"1班":0, "2班":0, "3班":0}
mqttclient.received(topic="a73acOQbFR", callback=receive_a73acOQbFR)
