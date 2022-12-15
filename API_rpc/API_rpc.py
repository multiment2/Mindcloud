'''
Файл управления функциями через JSONRPC. Конечная точка для API.
'''

#from flask import Blueprint, current_app
#import config_app_global
from jsonrpc.backend.flask import api
from .rpc_api_data_base import db, row2dict, Sticker


#rpc_bp = Blueprint('api', __name__, url_prefix='/api')
#current_app.config([config_app_global])
#rpc_bp.add_url_rule('/', 'api', api.as_view(), method = ['POST'])


@api.dispatcher.add_method
def get_one_stick(id):
    '''
    Получить один стикер(карточку) из базы. Дополнительно выводятся все связанные стикеры
    в виде "Название", "Дата".
    '''
    stick = db.session.query(Sticker).get(id)
    return row2dict(stick)

@api.dispatcher.add_method
def get_all_stick():
    '''
    Получить все стикеры(карточки) в виде "Название", "Дата". 
    Выводятся в виде облака.
    '''
    stickers = db.session.query(Sticker).all()
    all_stickers = []
    for stick in stickers:
        a = row2dict(stick)
        all_stickers.append(a)

    return all_stickers



@api.dispatcher.add_method
def create_new_stick(name, body):
    '''
    Создать новую карточку. Поля для заполнения: Название, Текст. Дата создания создается
    автоматически.
    '''
    new_stick = Sticker(name=name, body=body)
    db.session.add(new_stick)
    db.session.commit()

@api.dispatcher.add_method
def update_stick(id, name, body):
    '''
    Обновить карточку. Дата создания не меняется. Есть дата обновления.
    '''
    update_stick = db.session.query(Sticker).get(id)
    update_stick.name, update_stick.body = name, body
    db.session.commit()
    return row2dict(update_stick)

@api.dispatcher.add_method
def delete_one_stick(id):
    '''
    Удалить карточку. Удаляется карточка и все связи.
    '''
    stick = db.session.query(Sticker).get(id)
    db.session.delete(stick)
    db.session.commit()

def get_bridge():
    '''
    Получить связную карточку.(?)
    '''
    pass

def create_new_bridge():
    '''
    Создать связь между карточками.
    '''
    pass

def update_bridge():
    '''
    Обновить связь между карточками.(?)
    '''
    pass

def delete_bridge():
    '''
    Удалить связь между карточками. Сами карточки не удаляются.
    '''
    pass

