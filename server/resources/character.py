from flask_restful import Resource
import pymysql
from commons.utils import format_character_list
from commons.configs import db

conn = pymysql.connect(host=db['host'], port=db['port'], user=db['user'], passwd=db['passwd'], db=db['name'])


class Character(Resource):
    def get(self):
        cur = conn.cursor()
        cur.execute("SELECT * FROM `character`")
        return format_character_list(cur)

    def post(self, props):
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
        cur.execute("INSERT INTO `character` (`charName`, `charLife`, `charPower`, `charMoves`) "
                    "VALUES ( %s, %d, %d, %d)" % (props.charName, props.charLife, props.charPower, props.charMoves))

    def delete(self, char_id):
        cur = conn.cursor()
        cur.execute("DELETE FROM `character` WHERE `charId`= %d" % char_id)
