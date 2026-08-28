/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "updateRule": "id = @request.auth.id || \n@request.auth.role = \"petugas\" || \n@request.auth.role = \"edmin\" && \n@request.body.role:changed = false"
  }, collection)

  // update field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select1466534506",
    "maxSelect": 1,
    "name": "role",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "edmin",
      "petugas",
      "users"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "updateRule": "id = @request.auth.id || @request.auth.role = \"petugas\" || @request.auth.role = \"edmin\""
  }, collection)

  // update field
  collection.fields.addAt(8, new Field({
    "hidden": true,
    "id": "select1466534506",
    "maxSelect": 1,
    "name": "role",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "edmin",
      "petugas",
      "users"
    ]
  }))

  return app.save(collection)
})
