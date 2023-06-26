import json

import requests
import base64

with open('../2.jpg', 'rb') as img_file:
    my_base64 = base64.b64encode(img_file.read())

resp = requests.post('https://getprediction-teevzk6cia-ts.a.run.app', files={'file':my_base64})

# data = json.loads(resp.text)
print(resp.json())

# print(my_base64.decode("utf-8"))