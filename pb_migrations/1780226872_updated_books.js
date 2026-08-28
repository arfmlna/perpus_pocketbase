/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2170393721")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "file762383602",
    "maxSelect": 1,
    "maxSize": 5,
    "mimeTypes": [
      "image/png",
      "image/vnd.mozilla.apng",
      "image/jpeg",
      "image/svg+xml"
    ],
    "name": "poster",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "file4193945286",
    "maxSelect": 1,
    "maxSize": 15,
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
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "file762383602",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "poster",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "file4193945286",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
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
