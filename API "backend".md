em: package.json -> scripts
"backend": "json-server --watch db.json --port 5000",
-----------------------------------------------------

Arq. --> db.json
{
    "projects": [],
    "categories": [
        {
            "id": 1,
            "name": "Infra"
        },
        {
            "id": 2,
            "name": "Desenvolvimento"
        }
    ]
}

-----------------------------------------------------

npm run backend

(localhost:5000/____)
