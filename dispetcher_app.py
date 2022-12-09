'''
Здесь подключаем все конечные точки и чертежи.
'''

from flask import Flask, redirect, current_app, render_template
from API_rpc.API_rpc import api, db #Объект базы данных надо
# импортировать оттуда, где он ипользуется.
from home.index import home
import config_app_global


app=Flask(__name__)


app.config.from_pyfile('config_app_global.py')

app.add_url_rule('/api', 'api', api.as_view(), methods = ['POST'])

app.register_blueprint(home)



db.init_app(app)   #Инициализируем базу данных

#with app.app_context():
#    db.create_all()

with app.app_context():
    db.create_all(bind = 'mindcloud_api')
