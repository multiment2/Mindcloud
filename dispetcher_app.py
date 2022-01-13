'''
Здесь подключаем все конечные точки и чертежи.
'''

from flask import Flask, redirect, current_app
from API_rpc.API_rpc import api, db
#from API_rpc.rpc_api_data_base import db
from home.index import home
import config_app_global

app=Flask(__name__)

app.config.from_pyfile('config_app_global.py')

app.add_url_rule('/api', 'api', api.as_view(), methods = ['POST'])
#app.add_url_rule('/api', 'index')

#current_app.config([config_app_global])
#app.register_blueprint(home)
#app.register_blueprint(rpc_bp)

db.init_app(app)   #Инициализируем базу данных

with app.app_context():
    db.create_all(bind = 'mindcloud_api')


@app.route('/')
def index():
    return redirect('/home')