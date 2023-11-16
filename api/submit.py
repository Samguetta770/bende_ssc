import json
import gspread
import os

credentials_info = {
    "type": "service_account",
    "project_id": "vivid-monitor-404510",
    "private_key_id": "ace6fc73722ca7904c3a43461ab9296a533cf509",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDlct4aInZpPBxk\nZ3hXYbZZj0bmCMas8UYc41eFpkoqz5QXYlgc+bjLSleBMhynuyo0LjXTiEgmjZnu\nHoEf0gtu1LgpkT/VBuHkh7ugjo3WHyV+ypVH03Dhc8SF1KuwZ+K/Tzt0MyFh3a3i\nw7eIs5OVrqUa8JE30Hbhk/xPVcPBtVT2yVBknqvkmW7++LSIxEXr/KyD7qcab1Fz\nXRwm+FqY3h52FuvbmkcwhZAnUQK+tUG+D3xOFqdaA5UgVCOW7a5CyzHrrTdKjBYF\nmtk7iJdMrqCKGs2GCv0/JbZkCW14lwVQtRwhUsME7zCH0FMxWSUF6w0IzuAin9QG\nGqcA0RZnAgMBAAECggEAKNxe7zqJ6c25pKvEg5M0HRjl4FtZvjytZsGZuYRWmu8i\niVOLK4XRQeq4UJqy/a/YITjFfyk66Bq5ee1Ww2rtfExHi6eBPZefLMp7QGmCmsor\nLDw5f3QJGy05pzerZ5vohnc+uD/OxxXqPILsMV0BgFt8raJ/yffG4/8tpJc6aElj\nQqfBxJlrMinWSNQ+ROcCjCFB3ZzRYWlIohrhIIa9r0OlVeH+Xob5eHOcD81KnZkW\nWCkMc77fYu27dMSpg6T31d+NoabBgVLnTUAkrjx9M2nT17WN6nlSA+m4booOKNms\nTU31lAbFJYJmqRi6SxSpklb32y5RnQGZz2blJH9MCQKBgQD4GVpEkJ3sIeiCPL/n\n8f9kOZGpVS1xANq3A4BQOGmT+j3c8UnwMDEix4MQ2JEjunc5XMhf6LUMNEf5fyiu\nnCdMGeHR0EKwc0F/1/ULYiVsV38rIwTBm+0njYN6M+otY15ND/4G5mYaN+ZRYFwb\nzPke+0tE1Cwt78OIVQHvzgnu/QKBgQDswXd1uJo1cwujELyPDxMoIFCw3VFupIAX\n5R08Vp5uv8MY1xev6ud22nnrp/NBSVfZ5RjFeSjFM1oIrY9t3bNr28I7mm54tpmE\nFCv1UsU01JyZoIZANMyOUC8BJ+4DdRoS1/igXMMW3PgcHyd1UWcM4pTasXvrh2Rn\nkhv40YKCMwKBgEQVqQkB6uS/VXBQPZXoel7F0ax3nJXTVzI8Or1JDeg3Fz0H1nOc\ntg9GUziPRh1Y8ZkDVlXDpdOokUvt0ntAjSQ8QhVzIqoLpyDvYeby0zRNOq/a11ZO\ndSGSm08w6gX0rA9X4S2BkumFB6azW/OhJ4iSC9DirREaKD3Enlhx4ZX9AoGAY5+R\nHfcc5KrRVb+AKI6GWBco/RNT5cPQpr1hDPfB2QZWGQjBTeQBm/CY5wGYCXvMPML7\nJnUyI7DVDNvDg86LZjJly+DS5XaoqHw4dxVqKC3i634xn6jX/nZdIRZlQA0xeIZq\nd0gxS1iWCndNij9DppddXZzbcSNaq34+yPeX/CMCgYBzzHL8TY//2JJQ2BterKAQ\nf+hx2gGjmhuPk3+lwJjO0L/H1dFA2kWJuks52O3rgv4HjjFMp08gM64jHABchspp\n+xwir4v7e/HPPUEM+KuPQzhG8NS0H+FOw3s59F1V1hjuRkbfML/s7tNbhwPsKcH7\nEdDw5lO4jUk9KQDo68ZP2A==\n-----END PRIVATE KEY-----\n",
    "client_email": "transfer-lead@vivid-monitor-404510.iam.gserviceaccount.com",
    "client_id": "103139949700720938464",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/transfer-lead%40vivid-monitor-404510.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
}


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

    gc = gspread.service_account_from_dict(credentials_info)
    sh = gc.open("Bende_SSC_Lead")
    worksheet = sh.sheet1  # Accès à la première feuille
    worksheet.append_row(data_list)

    # Renvoyer une réponse JSON
    return data


handler = submit_data
