from flask_restful import Resource
from commons.utils import format_character_list, response_wrapper
from resources.sqlconn import conn


class Character(Resource):

    @staticmethod
    def get():
        cur = conn.cursor()
        cur.execute("SELECT * FROM `character`")
        return response_wrapper(format_character_list(cur))

    @staticmethod
    def post(props):
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
        return response_wrapper(cur)

    @staticmethod
    def delete(char_id):
        cur = conn.cursor()
        cur.execute("DELETE FROM `character` WHERE `charId`= %d" % char_id)
        response_wrapper(cur)