from fastapi import APIRouter
from Services import RaceService

race_router = APIRouter()

@race_router.post("/race/create")
def create_race(name, espece, description, picture):
    race = RaceService.create_race(name, espece, description, picture)
    return race

@race_router.get("/race/{id}")
def find_race(id):
    return RaceService.find_race(id)

@race_router.get("/races")
def find_all_races():
    return RaceService.find_all_races()

@race_router.delete("/race/{id}")
def delete_race(id):
    RaceService.delete_race(id)
    return {"message": "Race deleted"}

@race_router.put("/race/update")
def update_race(id, name, espece, description, picture):
    race = RaceService.update_race(id, name, espece, description, picture)
    return race