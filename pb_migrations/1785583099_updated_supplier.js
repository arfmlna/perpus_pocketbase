/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3680777319")

  // remove field
  collection.fields.removeById("text2996902007")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number2996902007",
    "max": 2,
    "min": 2,
    "name": "kode",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3680777319")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "[0-9]{2}",
    "hidden": false,
    "id": "text2996902007",
    "max": 2,
    "min": 2,
    "name": "kode",
    "pattern": "^[0-9]{2}$",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("number2996902007")

  return app.save(collection)
})
