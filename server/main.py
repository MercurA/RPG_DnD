from flask import Flask
from flask_restful import Api
from resources.character import Character
from resources.account import Account

app = Flask(__name__)
api = Api(app)

api.add_resource(Character, '/characters')
api.add_resource(Account, '/account')

if __name__ == "__main__":
    app.run(debug=True)

