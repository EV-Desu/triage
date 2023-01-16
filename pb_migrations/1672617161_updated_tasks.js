migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fxbse8wyq5cl8vl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3gyvrsip",
    "name": "dependancy",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "fxbse8wyq5cl8vl",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fxbse8wyq5cl8vl")

  // remove
  collection.schema.removeField("3gyvrsip")

  return dao.saveCollection(collection)
})
