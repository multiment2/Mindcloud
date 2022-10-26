from flask import Blueprint, render_template


home=Blueprint('home', __name__, static_folder='static_dir', template_folder='templates_dir')



@home.route('/')
@home.route('/home')
def start_page():
    return render_template("home_page.html")

@home.route('/help')
def help_page():
    return render_template("help_page.html")

@home.route('/notebook')
def notebook():
    return render_template("notebook.html")