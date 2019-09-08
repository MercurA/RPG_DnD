import pymysql
from commons.configs import db

conn = pymysql.connect(host=db['host'], port=db['port'], user=db['user'], passwd=db['passwd'], db=db['name'])
