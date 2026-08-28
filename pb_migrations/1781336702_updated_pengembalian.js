/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2914401458")

  // remove field
  collection.fields.removeById("bool2063623452")

  // remove field
  collection.fields.removeById("number3741661414")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2914401458")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "bool2063623452",
    "name": "status",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(4, new Field({
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
