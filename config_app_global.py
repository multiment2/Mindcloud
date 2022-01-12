DEBUG=True
ENV='development'
SQLALCHEMY_DATABASE_URI = 'sqlite:///data_bases/global_database.db'
SQLALCHEMY_BINDS = {
    'mindcloud_api': 'sqlite:///data_bases/mindcloud_api_database.db'
}