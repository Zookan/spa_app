from Entities.Animal import Animal
from InitDB.database import db

def create_animal(name, age, race, color, sex, vaccined, description, picture):
    try:
        db.connect()
        if not db.table_exists('animals'):
            print("La table 'animals' n'existe pas.")
            return

        animal = Animal(name=name, age=age, race=race, color=color, sex=sex, vaccined=vaccined,
                        description=description, picture=picture)
        Animal.save(animal)
        return animal

    except RecursionError as re:
        print(f"RecursionError détecté: {re}")
    except Exception as e:
        print(f"Une erreur est survenue: {e}")

    finally:
        db.close()

def find_animal(id):
    try:
        db.connect()
        if not db.table_exists('animals'):
            print("La table 'animals' n'existe pas.")
            return

        animal = Animal.select().where(Animal.id == id)
        if animal.exists():
            return list(animal)
        else:
            return ["Aucun animal trouvée."]

    except RecursionError as re:
        print(f"RecursionError détecté: {re}")
    except Exception as e:
        print(f"Une erreur est survenue: {e}")

    finally:
        db.close()

def find_all_animals():
    try:
        db.connect()
        if not db.table_exists('animals'):
            print("La table 'animals' n'existe pas.")
            return

        animals = Animal.select()
        if animals.exists():
            return list(animals)
        else:
            return ["Aucun animal trouvée."]

    except RecursionError as re:
        print(f"RecursionError détecté: {re}")
    except Exception as e:
        print(f"Une erreur est survenue: {e}")

    finally:
        db.close()

def delete_animal(id):
    try:
        db.connect()
        if not db.table_exists('animals'):
            print("La table 'animals' n'existe pas.")
            return

        Animal.delete_by_id(id)

    except RecursionError as re:
        print(f"RecursionError détecté: {re}")
    except Exception as e:
        print(f"Une erreur est survenue: {e}")

    finally:
        db.close()
    
def update_animal(id, name, age, race, color, sex, vaccined, description, picture):
    try:
        db.connect()
        if not db.table_exists('animals'):
            print("La table 'animals' n'existe pas.")
            return

        animal = Animal(id=id, name=name, age=age, race=race, color=color, sex=sex, vaccined=vaccined,
                        description=description, picture=picture)
        Animal.save(animal)
        return animal

    except RecursionError as re:
        print(f"RecursionError détecté: {re}")
    except Exception as e:
        print(f"Une erreur est survenue: {e}")

    finally:
        db.close()