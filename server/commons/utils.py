from commons.constants import TODOS
from flask_restful import abort
from flask import jsonify


def abort_if_todo_doesnt_exist(todo_id):

    if todo_id not in TODOS:
        abort(404, message="Todo {} doesn't exist".format(todo_id))


def format_book_list(cur):
    books = []
    for row in cur:
        books.append({
            'ISBN': row[0],
            'Title': row[1],
            'Author': row[2],
            'Description': row[3],
            'PublishDate': row[4],
            'Publisher': row[5],
            'NrOfCopies': row[6],
            'NrOfCopiesAvailable': row[7]
        })
    return jsonify(books)