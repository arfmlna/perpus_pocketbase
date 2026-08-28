/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3680777319")

  // update field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "number2996902007",
    "max": null,
    "min": null,
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

  // update field
  collection.fields.addAt(1, new Field({
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
})
