from flask import Flask
from flask_restful import Api
from resources.todo import Todo
from resources.booksList import BookList


app = Flask(__name__)
api = Api(app)

api.add_resource(BookList, '/getBooks')
api.add_resource(Todo, '/todos/<todo_id>')

if __name__ == "__main__":
    app.run(debug=True)

