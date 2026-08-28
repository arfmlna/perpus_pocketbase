/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_200393208")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date3412625299",
    "max": "",
    "min": "",
    "name": "return_date",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_200393208")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date3412625299",
    "max": "",
    "min": "",
    "name": "return_date",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
