/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1233449815")

  // update field
  collection.fields.addAt(0, new Field({
    "autogeneratePattern": "L[0-9]{6}",
    "hidden": false,
    "id": "text3208210256",
    "max": 7,
    "min": 7,
    "name": "id",
    "pattern": "^L[0-9]{6}$",
    "presentable": false,
    "primaryKey": true,
    "required": true,
    "system": true,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1233449815")

  // update field
  collection.fields.addAt(0, new Field({
    "autogeneratePattern": "L[0-9]{10}",
    "hidden": false,
    "id": "text3208210256",
    "max": 11,
    "min": 11,
    "name": "id",
    "pattern": "^L[0-9]{10}$",
    "presentable": false,
    "primaryKey": true,
    "required": true,
    "system": true,
    "type": "text"
  }))

  return app.save(collection)
})
