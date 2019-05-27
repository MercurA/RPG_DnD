from flask import Flask
from flask_restful import Api
from resourses.todo import Todo
from resourses.todolist import ToDoList


app = Flask(__name__)
api = Api(app)

api.add_resource(ToDoList, '/todos')
api.add_resource(Todo, '/todos/<todo_id>')

if __name__ == "__main__":
    app.run()

