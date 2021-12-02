import requests;
import os;
from dotenv import load_dotenv;

load_dotenv()

API_ENDPOINT = 'https://discord.com/api/v8'
CLIENT_ID = os.getenv('DISCORD_CLIENT_ID')
CLIENT_SECRET = os.getenv('DISCORD_SECRET') 
REDIRECT_URI = 'http://localhost:4200/'

def exchange_code(code):
    data = {
        'client_id' = CLIENT_ID,
        'client_Secret' = CLIENT_SECRET,
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': REDIRECT_URI
    }
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    r = requests.post('%s/oauth2/token' % API_ENDPOINT, data=data, header=headers)
    r.raise_for_status()
    return r.json*()