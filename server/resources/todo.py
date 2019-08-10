from flask_restful import Resource, reqparse
from commons.constants import TODOS
from commons.utils import abort_if_todo_doesnt_exist

parser = reqparse.RequestParser()
parser.add_argument('task')


class Todo(Resource):

    def get(self, todo_id):
        abort_if_todo_doesnt_exist(todo_id)
        return TODOS[todo_id]

    def delete(self, todo_id):
        abort_if_todo_doesnt_exist(todo_id)
        del TODOS[todo_id]
        return '', 204

    def put(self, todo_id):
        abort_if_todo_doesnt_exist(todo_id)
        args = parser.parse_args()
        task = {'task': args['task']}
        TODOS[todo_id] = task
