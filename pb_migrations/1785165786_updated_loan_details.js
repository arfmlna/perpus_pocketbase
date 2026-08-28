/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_200393208")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select121569714",
    "maxSelect": 1,
    "name": "condition_on_return",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "good",
      "damaged",
      "lost"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_200393208")

  // remove field
  collection.fields.removeById("select121569714")

  return app.save(collection)
})
