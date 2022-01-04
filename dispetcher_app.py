'''
Здесь подключаем все конечные точки и чертежи.
'''

from flask import Flask 
from API_rpc.API_rpc import rpc_bp

app=Flask(__name__)

app.register_blueprint(rpc_bp)

@app.route('/')
def index():
    return "Hello, I am Index page"