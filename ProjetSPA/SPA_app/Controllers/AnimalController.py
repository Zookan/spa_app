from fastapi import APIRouter
from Services import AnimalService

animal_router = APIRouter()

@animal_router.post("/animal/create")
def create_animal(name, age, race, color, sex, vaccined, description, picture):
    animal = AnimalService.create_animal(name, age, race, color, sex, vaccined, description, picture)
    return animal

@animal_router.get("/animal/{id}")
def find_animal(id):
    return AnimalService.find_animal(id)

@animal_router.get("/animals")
def find_all_animals():
    return AnimalService.find_all_animals()

@animal_router.delete("/animal/{id}")
def delete_animal(id):
    AnimalService.delete_animal(id)
    return {"message": "Animal deleted"}
    
@animal_router.put("/animal/update")
def update_animal(id, name, age, race, color, sex, vaccined, description, picture):
    animal = AnimalService.update_animal(id, name, age, race, color, sex, vaccined, description, picture)
    return animal