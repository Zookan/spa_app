from peewee import *
from InitDB.database import db
from Entities.Race import Race
import datetime

class BaseModel(Model):
    class Meta:
        database = db

class Animal(BaseModel):
    id = AutoField()
    name = CharField(max_length=50)
    age = SmallIntegerField()
    race = ForeignKeyField(Race)
    color = CharField(max_length=50)
    sex = CharField(max_length=10)
    vaccined = BooleanField()
    description = TextField()
    picture = TextField()
    date_added = DateTimeField(default=datetime.datetime.now)

    def __str__(self):
        return f"{self.name}, {self.age}, {self.race.name}, {self.color}, {self.sex}, {self.description}, {self.picture}"

    class Meta:
        table_name = "animals"
