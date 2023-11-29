import os
import base64
import json
from flask import Flask, request, jsonify
from flask_cors import CORS
import gspread
from gspread import Spreadsheet

credentials_info = {
    "type": "service_account",
    "project_id": "modern-ellipse-405210",
    "private_key_id": "24c1bc03f18085e0dc1975bceb9d69be0730e687",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCCOcDMtyp0//3l\npUI3ECuw2Zq8SB9tsBy0gPzaPVgk2uC7kH4N4T6iC7F2+K5FQ+F/daDLgEUt6W4n\n+ZqhrMNVlcgR90t62ZivcH9DpR//iW2KEBItvsP1PIVap5Sc1Qw47CTlEmVkC5uv\nmuQYsr0JstusqmQEVZhtHDhMDzppV2lQIcg0YYjXqPm1sxR/MGYn+9pX+aBt0WzK\nmBbOqZiirqPbb0GCPmLLTAG+oXVJo4Fz+8NwYkZoKY4h3OSmYc1mNLM7814zQ3oq\nAsdXp77RieboItE8XWvnCX7HYlv3B58pfaKzvy0jSotzYACyo9k2VWmIDoGswi6m\nLQcg9lNdAgMBAAECggEAAVCUn2corj5jZtfQn6kHIpBKh/obxHS8ZXTOmLl5KVjD\nChcUXrmBHgu2LU2nchrprOrCxoCIskT4EBPsuWh6ybjAaLCxeg+2WJcZ1yn/Sl+D\nKUYDmPijFoJs6j8Pjgx3RMqFjivYYDaJyi/Ae8taLeiOCo6R10VcoPAMVXWV5mMF\nhQAPH/9jZ+IVvcYZbv77H01RB6fgwgfhjD0G3UXwz7ZM05aQoh5WL6vSrcXd86v9\nd1txlbbEGeSwBTDrpT1bok03NaFMngfkfriEFjCnxaQg9OmA7vzf2ZMjkS6g2bnb\nJNECs0cgoikauP3W5CIWlbpRr3D6aoODCUL4IefnlQKBgQC3BNr13JXmlC+W7vVK\nTCkEyJ8Ad9vkDepC1Xmp7DwN/KId5W2XPaLHoN/HOUJf6E7ukT06PHrz4kD5D0K9\nHOnOWIxlxUlwjbAXN7xhyTB+UI8n7JRMqapK16SVKbkwcwq7hgRSOv/hBI99fFY5\nURaGjEu+Yk/F2F4EweAM48yyPwKBgQC2J5Y3j3COTC7b7mVd9Xrjph/6pNOtcyE7\ntXHT0DCi5lxGS1w+UN8RKu9hwSFJJUEL2gJlKO9CyrrVFl15XoV1MKptHsTqbID/\nqYiAn9jlFI5wrwethgGaoaW6ayi0uoaMMk9UOqbT8KluZTd6hvXlPgAYFqg4OMFz\nv6wAvE9bYwKBgAb+IH+UVgXhU5AowSZ9knOkVq7l5XjpLzIuhd+ALys5o9gQlAdb\nS4TlGKe8AFU5wwpKclRvSyNWWbUqaBphqG1B5Ntelle+kiPQ9VmnHjs1SML1vxTO\nxrrlUlyAo5q+SoKvtCqQJoaqbfEVdxXpizrI0XwMtY+RnMYBwlW7vm5xAoGASC/g\nBBzASmQ+ncIYQegqz1Tij34KtU5O+U6q0XpMDAKmxuTOpZN/E1qki2TyP/6XjI7V\nLCnQx/N3n0LBwHuJACxNHfl3qD9fz/Hruq2eUwqWeGmk7UuSDynId9xHwXe6Io09\niu/DdXKGcs2B8vjRMgwkFWfFOqKjZ6+qBpCaEmkCgYEAtJasSYd/sSy24N1GSMOf\nTgudBQ+tpe5ICfUHi81MOQ6SCJ/EGCNXBwSyOlfQZWfNMrDMZxuLvlnZ6VQkh7Dl\nY/Hf8ks4Pn4x9fr7qklMKSpv+pi7clSuD+3NTmUJwCdsdWepFrtvh7dPYB6ti1qJ\nUI2gMMuWPZnh5KK8V60nQ8g=\n-----END PRIVATE KEY-----\n",
    "client_email": "samos115@modern-ellipse-405210.iam.gserviceaccount.com",
    "client_id": "109440418023974369157",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/samos115%40modern-ellipse-405210.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
}

app = Flask(__name__)
CORS(app)  # Activez CORS si nécessaire


@app.route('/api/submit', methods=['POST'])
def submit_data():
    data = request.json
    print(data)
    data_list = [
        data['chauffage'],
        data['departement'],
        data['mail'],
        data['phone'],
        data['surname'],
        data['lastname'],
        data['revenue']
    ]

    gc = gspread.service_account_from_dict(credentials_info)
    sh = gc.open("Bende_SSC_Lead")
    worksheet = sh.sheet1  # Accès à la première feuille
    worksheet.append_row(data_list)

    # Renvoyer une réponse JSON
    return data
