'''
Файл для всего что связано с созданием и управлением базы данных.
'''
#from flask_app import app
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime


db = SQLAlchemy()

class Sticker(db.Model):  #Модель данных самих карточек
    __tablename__ = 'Sticker'
    id = db.Column(db.Integer, primary_key=True, unique=True, nullable=False, autoincrement=True) #ID первичный ключ, уникальный, не нулевой, сам записывает следующий номер
    date = db.Column(db.DateTime, default=datetime.utcnow)
    name = db.Column(db.String(120), nullable=False)
    body = db.Column(db.Text)


class Bridges(db.Model):
    __tabelname__ = 'Bridges'
    id = db.Column(db.Integer, primary_key=True, unique=True, nullable=False, autoincrement=True)
    parent_stick_id = db.Column(db.Integer, db.ForeignKey('Sticker.id'), nullable=False)
    child_stick_id = db.Column(db.Integer, db.ForeignKey('Sticker.id'), nullable=False)


def row2dict(row):

    '''
    Преобразует атрибуты эземпляра в словарь
    '''
    d = {}
    for column in row.__table__.columns:
        d[column.name] = str(getattr(row, column.name))

    return d
