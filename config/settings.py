import os
from dotenv import load_dotenv
from variables import DATABASE_NAME, SERVER_NAME

# Load environment variables from .env file
load_dotenv()

# Retrieve environment variables
DATABASE_URL = os.getenv('DATABASE_URL')
API_KEY = os.getenv('API_KEY')

# Project configuration
DATABASE = {
    'name': DATABASE_NAME,
    'url': DATABASE_URL,
}

SERVER = {
    'name': SERVER_NAME,
    'api_key': API_KEY,
}