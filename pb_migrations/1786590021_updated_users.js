/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.role = \"admin\" || \n(@request.body.role = \"user\" && \n@request.body.id:isset = false)",
    "deleteRule": "id = @request.auth.id || @request.auth.role = \"edmin\"",
    "updateRule": "@request.auth.role = \"admin\" || \n(@request.auth.role = \"petugas\" && \n@request.body.role:isset = false) || \n(@request.auth.id = id && \n@request.body.id:isset = false && \n@request.body.role:isset = false && \n@request.body.username:isset = false)\n"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id = \"\" || @request.auth.role = \"petugas\" || @request.auth.role = \"edmin\"",
    "deleteRule": "id = @request.auth.id || @request.auth.role = \"petugas\" || @request.auth.role = \"edmin\"",
    "updateRule": "id = @request.auth.id || \n@request.auth.role = \"petugas\" || \n@request.auth.role = \"edmin\" && \n@request.body.role:changed = false"
  }, collection)

  return app.save(collection)
})
