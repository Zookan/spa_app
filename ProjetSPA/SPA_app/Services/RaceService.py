from Entities.Race import Race
from InitDB.database import db

def create_race(name, espece, description, picture):
    try:
        db.connect()
        if not db.table_exists('races'):
            print("La table 'races' n'existe pas.")
            return

        race = Race(name=name, espece=espece, description=description, picture=picture)
        Race.save(race)
        return race

    except RecursionError as re:
        print(f"RecursionError détecté: {re}")
    except Exception as e:
        print(f"Une erreur est survenue: {e}")

    finally:
        db.close()

def find_race(id):
    try:
        db.connect()
        if not db.table_exists('races'):
            print("La table 'races' n'existe pas.")
            return

        race = Race.select().where(Race.id == id)
        if race.exists():
            return list(race)
        else:
            return ["Aucune race trouvée."]

    except RecursionError as re:
        print(f"RecursionError détecté: {re}")
    except Exception as e:
        print(f"Une erreur est survenue: {e}")

    finally:
        db.close()

def find_all_races():
    try:
        db.connect()
        if not db.table_exists('races'):
            print("La table 'races' n'existe pas.")
            return

        races = Race.select()
        if races.exists():
            return list(races)
        else:
            return ["Aucune race trouvée."]

    except RecursionError as re:
        print(f"RecursionError détecté: {re}")
    except Exception as e:
        print(f"Une erreur est survenue: {e}")

    finally:
        db.close()

def delete_race(id):
    try:
        db.connect()
        if not db.table_exists('races'):
            print("La table 'races' n'existe pas.")
            return

        Race.delete_by_id(id)

    except RecursionError as re:
        print(f"RecursionError détecté: {re}")
    except Exception as e:
        print(f"Une erreur est survenue: {e}")

    finally:
        db.close()

def update_race(id, name, espece, description, picture):
    try:
        db.connect()
        if not db.table_exists('races'):
            print("La table 'races' n'existe pas.")
            return

        race = Race(id=id, name=name, espece=espece, description=description, picture=picture)
        Race.save(race)
        return race

    except RecursionError as re:
        print(f"RecursionError détecté: {re}")
    except Exception as e:
        print(f"Une erreur est survenue: {e}")

    finally:
        db.close()