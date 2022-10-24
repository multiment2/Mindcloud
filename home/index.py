from flask import Blueprint, render_template


home=Blueprint('home', __name__, static_folder='static_dir', template_folder='templates_dir')



@home.route('/')
def start_page():
    return render_template("base.html")
