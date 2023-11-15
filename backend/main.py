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

    gc = gspread.service_account(filename="C:/Users/samos/Downloads/Bende_ssc/modern-ellipse-405210-24c1bc03f180.json")
    sh = gc.open("Bende_SSC_Lead")
    worksheet = sh.sheet1  # Accès à la première feuille
    worksheet.append_row(data_list)

    return data

if __name__ == '__main__':
    app.run(debug=True)
