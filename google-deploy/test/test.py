import requests
import base64

with open('2.jpg', 'rb') as img_file:
    my_base64 = base64.b64encode(img_file.read())

resp = requests.post('http://127.0.0.1:5000', files={'file':my_base64})

print(resp.json())
