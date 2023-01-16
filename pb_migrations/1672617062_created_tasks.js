migrate((db) => {
  const collection = new Collection({
    "id": "fxbse8wyq5cl8vl",
    "created": "2023-01-01 23:51:02.165Z",
    "updated": "2023-01-01 23:51:02.165Z",
    "name": "tasks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "w9healnv",
        "name": "start",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "axct7inh",
        "name": "end",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "gumc7qcj",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 45,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "waexes5p",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 350,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dxwwghis",
        "name": "completed",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("fxbse8wyq5cl8vl");

  return dao.deleteCollection(collection);
})
