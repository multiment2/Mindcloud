from dispetcher_app import app
import config_app_global


app.config.from_pyfile('config_app_global.py')

if __name__ == "__main__":
    app.run()
