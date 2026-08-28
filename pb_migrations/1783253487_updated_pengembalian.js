/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2914401458")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_SjhCckEuaw` ON `pengembalian` (`peminjam`)"
    ]
  }, collection)

  // remove field
  collection.fields.removeById("bool2063623452")

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation2180784344",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "petugas",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number3741661414",
    "max": null,
    "min": null,
    "name": "denda",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor3997586853",
    "maxSize": 0,
    "name": "catatan",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  // update field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1547860643",
    "hidden": false,
    "id": "relation537285849",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "peminjam",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2914401458")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_SjhCckEuaw` ON `pengembalian` (`idPeminjaman`)"
    ]
  }, collection)

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

  // remove field
  collection.fields.removeById("relation2180784344")

  // remove field
  collection.fields.removeById("number3741661414")

  // remove field
  collection.fields.removeById("editor3997586853")

  // update field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1547860643",
    "hidden": false,
    "id": "relation537285849",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "idPeminjaman",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
