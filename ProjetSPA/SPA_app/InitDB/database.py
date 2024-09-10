import os
from peewee import SqliteDatabase

base_dir = os.path.dirname(os.path.abspath(__file__))
print(base_dir)
db = SqliteDatabase(base_dir + '\\spa.db')
