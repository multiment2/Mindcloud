'''
Здесь подключаем все конечные точки и чертежи.
'''

from flask import Flask, redirect, current_app, render_template
from API_rpc.API_rpc import api, db #Объект базы данных надо
# импортировать оттуда, где он ипользуется.
from home.index import home
import config_app_global
from flask_cors import CORS, cross_origin

app=Flask(__name__)

CORS(app)

app.config.from_pyfile('config_app_global.py')

app.add_url_rule('/api', 'api', api.as_view(), methods = ['POST'])

app.register_blueprint(home)
#app.add_url_rule('/home', 'home')


db.init_app(app)   #Инициализируем базу данных

with app.app_context():
    db.create_all(bind = 'mindcloud_api')


@app.route('/')
def index():
    return "Start page"




