'''
Стартовый файл. Его запуск запускает весь сервер приложения.
'''

#from Flask_API_server.flask_app import api_app #Подключаем точку входа в сервис
from flask import Flask, url_for


app=Flask(__name__)
app.config.from_pyfile('config.py')

@app.route('/')
#@app.route('/index')
def index():
    return url_for('/Flask_main_fontend/index/.index')

if __name__ == "__main__":
    app.run()
