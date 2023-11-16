import os
import base64
import json
from flask import Flask, request, jsonify
from flask_cors import CORS
import gspread
from gspread import Spreadsheet


app = Flask(__name__)
CORS(app)  # Activez CORS si nécessaire

@app.route('/submit', methods=['POST'])
def submit_data():
    data = request.json
    print(data)
    data_list = [
        data['surfaceHabitable'],
        data['chauffage'],
        data['departement'],
        data['mail'],
        data['phone'],
        data['surname'],
        data['lastname'],
        data['revenue']
    ]

    creds_json = base64.b64decode(os.environ.get('GSPREAD_CREDENTIALS')).decode('utf-8')
    creds_dict = json.loads(creds_json)
    gc = gspread.service_account_from_dict(creds_dict)



    sh = gc.open("Bende_SSC_Lead")
    worksheet = sh.sheet1  # Accès à la première feuille
    worksheet.append_row(data_list)

    return data

if __name__ == '__main__':
    app.run(debug=True)
