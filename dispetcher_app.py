'''
Здесь подключаем все конечные точки и чертежи.
'''

from flask import Flask, redirect
from API_rpc.API_rpc import rpc_bp
from home.index import home

app=Flask(__name__)

app.register_blueprint(home)
app.register_blueprint(rpc_bp)

@app.route('/')
def index():
    return redirect('/home')