/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3559739337")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n    CAST(row_number() OVER () AS TEXT) as id, \n    info, \n    jumlah \nFROM (\n    SELECT 'users' as info, (SELECT COUNT(*) FROM users) as jumlah\n    UNION ALL\n    SELECT 'books' as info, (SELECT COUNT(*) FROM books) as jumlah\n)\n"
  }, collection)

  // remove field
  collection.fields.removeById("json344172009")

  // remove field
  collection.fields.removeById("json1243294354")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "json3414765911",
    "maxSize": 1,
    "name": "info",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "json2660322358",
    "maxSize": 1,
    "name": "jumlah",
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
    "viewQuery": "-- Di PocketBase Admin (View Collection SQL)\nSELECT \n    '1' as id, -- ID statis agar mudah diprediksi\n    (SELECT COUNT(*) FROM users) as users, \n    (SELECT COUNT(*) FROM books) as books\n"
  }, collection)

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

  // remove field
  collection.fields.removeById("json3414765911")

  // remove field
  collection.fields.removeById("json2660322358")

  return app.save(collection)
})
