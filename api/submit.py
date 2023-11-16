import json
import gspread
import os
def submit_data(request):
    # Extraction des données de la requête
    data = request.get_json()
    print(data)

    # Construction de la liste de données à partir de la requête
    data_list = [
        data.get('surfaceHabitable', ''),
        data.get('chauffage', ''),
        data.get('departement', ''),
        data.get('mail', ''),
        data.get('phone', ''),
        data.get('surname', ''),
        data.get('lastname', ''),
        data.get('revenue', '')
    ]

    # Utilisation des variables d'environnement pour les informations sensibles
    # Assurez-vous de configurer ces variables dans Vercel
    creds_json = os.environ.get('GSPREAD_CREDENTIALS')
    gc = gspread.service_account_from_dict(json.loads(creds_json))
    sh = gc.open("Bende_SSC_Lead")
    worksheet = sh.sheet1  # Accès à la première feuille
    worksheet.append_row(data_list)

    # Renvoyer une réponse JSON
    return json.dumps(data)