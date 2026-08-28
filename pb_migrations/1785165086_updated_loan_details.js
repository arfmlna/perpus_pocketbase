/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_200393208")

  // remove field
  collection.fields.removeById("number406879867")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_200393208")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number406879867",
    "max": null,
    "min": 0,
    "name": "fine_amount",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
