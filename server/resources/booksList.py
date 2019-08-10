from flask_restful import Resource
import pymysql
from commons.utils import format_book_list
from configs.db import db

conn = pymysql.connect(host=db['host'], port=db['port'], user=db['user'], passwd=db['passwd'], db=db['name'])


class BookList(Resource):
    def get(self):
        cur = conn.cursor()
        cur.execute("SELECT * FROM books")
        return format_book_list(cur)
