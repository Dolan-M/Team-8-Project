import pymysql
import pymysql.cursors as cursors
from db import openSSH

server = openSSH()
db = pymysql.connect(host='127.0.0.1', 
user='root', 
password='H1@l//C$rT', 
database='XibitDB', 
port=server.local_bind_port,
cursorclass=cursors.Cursor
)



cursor = db.cursor()
insertEntitySql = "INSERT INTO entity VALUES();"
cursor.execute(insertEntitySql)
db.commit()

sql = "SELECT LAST_INSERT_ID();"
cursor.execute(sql)
print(cursor.fetchone())

db.close()