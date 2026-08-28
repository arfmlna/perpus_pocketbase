/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1547860643")

  // remove field
  collection.fields.removeById("number3741661414")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1547860643")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number3741661414",
    "max": null,
    "min": 0,
    "name": "denda",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
