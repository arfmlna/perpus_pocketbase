/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1547860643")

  // remove field
  collection.fields.removeById("date3210780487")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1547860643")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "date3210780487",
    "max": "",
    "min": "",
    "name": "tglPengembalian",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
