import requests
import pytest

URL = "https://api.pokemonbattle.ru/v2"
TOKEN = "64c84bcf86005ece699888fd0085ecc1"
HEADER = {"Content-Type":"application/json", "trainer_token":TOKEN}
TRAINER_ID = "38344"

def test_status_code():
    response = requests.get(url = f"{URL}/pokemons", params = {"tainer_id" : TRAINER_ID})
    assert response.status_code == 200