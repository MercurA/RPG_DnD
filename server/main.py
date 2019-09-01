from flask import Flask
from flask_restful import Api
from resources.character import Character


app = Flask(__name__)
api = Api(app)

api.add_resource(Character, '/getCharacters')

if __name__ == "__main__":
    app.run(debug=True)

