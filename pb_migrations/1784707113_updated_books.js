/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2170393721")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select2432342139",
    "maxSelect": 1,
    "name": "bookType",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "digital",
      "academic",
      "nonAcademic"
    ]
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "number1261852256",
    "max": null,
    "min": null,
    "name": "stock",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2170393721")

  // remove field
  collection.fields.removeById("select2432342139")

  // remove field
  collection.fields.removeById("number1261852256")

  return app.save(collection)
})
