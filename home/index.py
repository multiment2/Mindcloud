from flask import Blueprint, render_template


home=Blueprint('home', __name__, static_folder='static',url_prefix='/home', template_folder='templates_dir')



@home.route('/')
def start_page():
    return "I am Start page"


@home.route('/game')
def start_game():
    return render_template('Game_Godot.html')


