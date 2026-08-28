/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3559739337")

  // update collection data
  unmarshal({
    "viewQuery": "-- Di PocketBase Admin (View Collection SQL)\nSELECT \n    '1' as id, -- ID statis agar mudah diprediksi\n    (SELECT COUNT(*) FROM users) as users, \n    (SELECT COUNT(*) FROM books) as books\n"
  }, collection)

  // remove field
  collection.fields.removeById("json4135545099")

  // remove field
  collection.fields.removeById("json2833770096")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "json344172009",
    "maxSize": 1,
    "name": "users",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "json1243294354",
    "maxSize": 1,
    "name": "books",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3559739337")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n    'counts' as id, \n    (SELECT COUNT(*) FROM users) as totalUsers, \n    (SELECT COUNT(*) FROM books) as totalBooks\n"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "json4135545099",
    "maxSize": 1,
    "name": "totalUsers",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "json2833770096",
    "maxSize": 1,
    "name": "totalBooks",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // remove field
  collection.fields.removeById("json344172009")

  // remove field
  collection.fields.removeById("json1243294354")

  return app.save(collection)
})
