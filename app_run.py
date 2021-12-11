'''
Стартовый файл. Его запуск запускает весь сервер приложения.
'''

from Flask_API_server.flask_app import app #Подключаем точку входа в сервис

if __name__ == "__main__":
    app.run()
