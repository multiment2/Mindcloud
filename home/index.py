from flask import Blueprint

home=Blueprint('home', __name__)

@home.route('/')
def start_page():
    return "I am Start page"


@home.route('/index')
def index_page():
    return "I am Index page"