from flask_restful import Resource
from flask import request
from commons.utils import format_character_list, response_wrapper
from resources.sqlconn import conn


class Character(Resource):

    @staticmethod
    def get():
        cur = conn.cursor()
        cur.execute("SELECT * FROM `character`")
        return response_wrapper(format_character_list(cur))

    @staticmethod
    def post():
        json_data = request.get_json(force=True)
        char_name = json_data['charName']
        char_life = json_data['charLife']
        char_power = json_data['charPower']
        char_moves = json_data['charMoves']
        stmt = 'insert into character (`charName`, `charLife`, `charPower`, `charMoves`) values ( %s, %d, %d, %d)'
        """

        Will recieve:

        :param props: an object with:
        {
            charName: string,
            charLife: integer,
            charPower: integer,
            charMoves: integer
        }
        :return: the object created
        """
        cur = conn.cursor()
        cur.execute(stmt, (char_name, char_life, char_power, char_moves))
        return response_wrapper(cur)

    @staticmethod
    def delete(char_id):
        cur = conn.cursor()
        cur.execute("DELETE FROM `character` WHERE `charId`= %d" % char_id)
        response_wrapper(cur)