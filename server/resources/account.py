from flask_restful import Resource
from resources.sqlconn import conn
from commons.utils import response_wrapper


class Account(Resource):

    @staticmethod
    def get():
        cur = conn.cursor()
        cur.execute("SELECT * FROM `account`")
        return response_wrapper(format_account_object(cur))


def format_account_object(cursor):
    account_obj = []
    for row in cursor:
        print(row)
        if len(row) > 0:
            account_obj.append({
                'id': row[0],
                'name': row[1]
            })
    return account_obj
