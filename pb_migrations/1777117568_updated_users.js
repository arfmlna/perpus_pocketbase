/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "createRule": "id = @request.auth.id || @request.auth.role = \"petugas\" || @request.auth.role = \"edmin\"",
    "deleteRule": "id = @request.auth.id || @request.auth.role = \"petugas\" || @request.auth.role = \"edmin\"",
    "updateRule": "id = @request.auth.id || @request.auth.role = \"petugas\" || @request.auth.role = \"edmin\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "createRule": "id = @request.auth.id",
    "deleteRule": "id = @request.auth.id",
    "updateRule": "id = @request.auth.id"
  }, collection)

  return app.save(collection)
})
