import requests

URL = "https://api.pokemonbattle.ru/v2"
TOKEN = "64c84bcf86005ece699888fd0085ecc1"
HEADER = {"Content-Type" : "application/json", "trainer_token":TOKEN}

body_create ={
    "name": "колли",
    "photo_id": 157
}
body_createt ={
    "pokemon_id": "362760"
}
body_name ={
    "pokemon_id": "377964",
    "name": "labubu",
    "photo_id": 157
}

"""response_create = requests.post(url = f"{URL}/pokemons", headers = HEADER, json = body_create)
print(response_create.text)"""

"""response_create = requests.post(url = f"{URL}/trainers/add_pokeball", headers = HEADER, json = body_createt)
print(response_create.text)"""

response_create = requests.put(url = f"{URL}/pokemons", headers = HEADER, json = body_name)
print(response_create.text)
