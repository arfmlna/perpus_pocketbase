/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_200393208")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.role = \"edmin\" || @request.auth.role = \"petugas\" ",
    "deleteRule": "@request.auth.role = \"edmin\"",
    "listRule": "@request.auth.role = \"edmin\" || @request.auth.role = \"petugas\" ",
    "updateRule": "@request.auth.role = \"edmin\"",
    "viewRule": "@request.auth.role = \"edmin\" || @request.auth.role = \"petugas\" "
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_200393208")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id = \"edmin\" || @request.auth.id = \"petugas\" ",
    "deleteRule": "@request.auth.id = \"edmin\"",
    "listRule": "@request.auth.id = \"edmin\" || @request.auth.id = \"petugas\" ",
    "updateRule": "@request.auth.id = \"edmin\"",
    "viewRule": "@request.auth.id = \"edmin\" || @request.auth.id = \"petugas\" "
  }, collection)

  return app.save(collection)
})
