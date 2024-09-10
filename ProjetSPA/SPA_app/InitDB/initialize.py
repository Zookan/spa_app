from InitDB.database import db
from Entities.Animal import Animal
from Entities.Race import Race
import csv

def initialize_db():
    db.connect()
    # Créer les tables si elles n'existent pas
    if not db.table_exists('races'):
        db.create_tables([Race])
        print("Tables créées.")
    else:
        print("Les tables existent déjà.")

    if not db.table_exists('animals'):
        db.create_tables([Animal])
        print("Tables créées.")
    else:
        print("Les tables existent déjà.")
    db.close()

def import_race_csv():
    data_list = []

    with open("RaceChienChat.csv", "r", encoding="windows-1252") as file:
        reader = csv.reader(file)
        for row in reader:
            # Pour chaque ligne, on divise par le séparateur ';'
            split_row = row[0].split(';')  # Assure-toi que row[0] contient toute la ligne
            data_list.append(split_row)

    for data in data_list:
        name = data[0]
        espece = data[1]
        description = data[2]
        picture = data[3]

        newRace = Race.create(name=name, espece=espece, description=description, picture=picture)
        Race.save(newRace)
        print(newRace)

def import_animal_csv():
    data_list = []

    with open("ListeAnimaux.csv", "r", encoding="windows-1252") as file:
        reader = csv.reader(file)
        for row in reader:
            # Pour chaque ligne, on divise par le séparateur ';'
            split_row = row[0].split(';')  # Assure-toi que row[0] contient toute la ligne
            data_list.append(split_row)
            print(split_row)

    for data in data_list:
        name = data[0]
        age = data[1]
        race = data[2]
        color = data[3]
        sex = data[4]
        vaccined = data[5]
        description = data[6]
        picture = data[7]

        newAnimal = Animal.create(name=name, age=age, race=race, color=color, sex=sex, vaccined=vaccined,
                                  description=description, picture=picture)
        Animal.save(newAnimal)
        print(newAnimal)

if __name__ == '__main__':
    initialize_db()
    import_race_csv()
    import_animal_csv()
