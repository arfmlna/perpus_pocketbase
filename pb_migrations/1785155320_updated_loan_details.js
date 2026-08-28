/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_200393208")

  // update field
  collection.fields.addAt(0, new Field({
    "autogeneratePattern": "LD[0-9]{6}",
    "hidden": false,
    "id": "text3208210256",
    "max": 8,
    "min": 8,
    "name": "id",
    "pattern": "^LD[0-9]{6}$",
    "presentable": false,
    "primaryKey": true,
    "required": true,
    "system": true,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_200393208")

  // update field
  collection.fields.addAt(0, new Field({
    "autogeneratePattern": "[a-z0-9]{15}",
    "hidden": false,
    "id": "text3208210256",
    "max": 15,
    "min": 8,
    "name": "id",
    "pattern": "^[A-Za-z0-9]+$",
    "presentable": false,
    "primaryKey": true,
    "required": true,
    "system": true,
    "type": "text"
  }))

  return app.save(collection)
})
