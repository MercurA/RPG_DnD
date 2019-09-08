from commons.constants import TODOS
from flask_restful import abort
from flask import jsonify


def abort_if_todo_doesnt_exist(todo_id):

    if todo_id not in TODOS:
        abort(404, message="Todo {} doesn't exist".format(todo_id))


def format_character_list(cur):
    char = []
    for row in cur:
        char.append({
            'charId': row[0],
            'charName': row[1],
            'charLife': row[2],
            'charPower': row[3],
            'charMoves': row[4],
        })
    return char


def response_wrapper(data):
    print(data)
    if type(data) is list or type(data) is dict:
        if len(data) <= 0:
            return {
                'success': False,
                'message': 'No data to send'
            }

        return {
            'success': True,
            'data': data
        }
    else:
        return {
            'success': False,
            'message': 'Something went wrong'
        }
