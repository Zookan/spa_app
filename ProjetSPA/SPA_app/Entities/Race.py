from peewee import *
from InitDB.database import db

class BaseModel(Model):
    class Meta:
        database = db

class Race(BaseModel):
    id = AutoField()
    name = CharField(max_length=50)
    espece = CharField(max_length=50)
    description = TextField()
    picture = TextField()

    def __str__(self):
        return f"{self.name}, {self.espece}, {self.description}, {self.picture}"

    class Meta:
        table_name = "races"