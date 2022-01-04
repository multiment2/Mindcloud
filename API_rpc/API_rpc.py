from flask import Blueprint

rpc_bp = Blueprint('api', __name__, url_prefix='/api')

@rpc_bp.route('/')
def index():
    return "Hello, I am API"