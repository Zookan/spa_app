from fastapi import FastAPI
from Controllers.AnimalController import animal_router
from Controllers.RaceController import race_router
from fastapi.middleware.cors import CORSMiddleware

application = FastAPI(debug=True)

application.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5500"],  # Remplacez par l'URL de votre front-end
    allow_credentials=True,
    allow_methods=["*"],  # Autorise toutes les méthodes (GET, POST, etc.)
    allow_headers=["*"],  # Autorise tous les en-têtes
)

@application.get("/")
def root():
    return {"message": "Bienvenue sur l'API SPA"}

# Inclure les routes de l'autre module
application.include_router(animal_router)
application.include_router(race_router)

