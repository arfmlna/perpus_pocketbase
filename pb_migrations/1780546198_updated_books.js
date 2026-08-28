/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2170393721")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "file4193945286",
    "maxSelect": 1,
    "maxSize": 26214400,
    "mimeTypes": [
      "application/pdf"
    ],
    "name": "pdfFile",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2170393721")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "file4193945286",
    "maxSelect": 1,
    "maxSize": 10485760,
    "mimeTypes": [
      "application/pdf"
    ],
    "name": "pdfFile",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
