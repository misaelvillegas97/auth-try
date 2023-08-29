import os

# Environment Variables
DATABASE_URL = os.getenv('DATABASE_URL')
API_KEY = os.getenv('API_KEY')
SERVER_HOST = os.getenv('SERVER_HOST')
SERVER_PORT = os.getenv('SERVER_PORT')

# Project Configuration
PROJECT_NAME = os.getenv('PROJECT_NAME')
DEBUG_MODE = os.getenv('DEBUG_MODE')

# Variable Names
DB_TABLE_NAME = os.getenv('DB_TABLE_NAME')
SERVER_SETTINGS = os.getenv('SERVER_SETTINGS')

# Function Names
def get_env_variable(var_name):
    return os.getenv(var_name)

# Data Schemas
USER_SCHEMA = os.getenv('USER_SCHEMA')
PRODUCT_SCHEMA = os.getenv('PRODUCT_SCHEMA')

# Message Names
ERROR_MESSAGE = os.getenv('ERROR_MESSAGE')
LOG_MESSAGE = os.getenv('LOG_MESSAGE')

# DOM Element IDs
FORM_ID = os.getenv('FORM_ID')
BUTTON_ID = os.getenv('BUTTON_ID')