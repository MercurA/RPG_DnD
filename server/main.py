from flask import Flask
from flask_restful import Api
from resources.character import Character
from resources.account import Account

app = Flask(__name__)
api = Api(app)

api.add_resource(Character, '/getCharacters')
api.add_resource(Account, '/checkAccount')

if __name__ == "__main__":
    app.run(debug=True)

