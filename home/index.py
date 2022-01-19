from flask import Blueprint, render_template

home=Blueprint('home', __name__, static_folder='static', template_folder='templates')

@home.route('/')
def start_page():
    return "I am Start page"


@home.route('/index')
def index_page():
    return "I am Index page"


@home.route('/game')
def start_game():
    return render_template('Platformer 3D.html')