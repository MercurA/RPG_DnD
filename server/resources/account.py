from flask import request
from flask_restful import Resource
from resources.sqlconn import conn
from commons.utils import response_wrapper


class Account(Resource):

    @staticmethod
    def get():
        cur = conn.cursor()
        cur.execute("SELECT * FROM `account`")
        return response_wrapper(format_account_object(cur))

    @staticmethod
    def post():
        form = request.get_json(force=True)
        name = form['name']
        nick_name = form['nickName']
        stmt = "insert into `account` (`accountName`, `accountNickName`) values (%s, %s)"
        """
        :param form:
            {
                name: string,
                nickName: string
            }
        :return:
        """
        cur = conn.cursor()
        cur.execute(stmt, (name, nick_name))
        return response_wrapper(cur)


def format_account_object(cursor):
    account_obj = []
    for row in cursor:
        if len(row) > 0:
            account_obj.append({
                'id': row[0],
                'name': row[1],
                'nickName': row[2]
            })
    return account_obj
