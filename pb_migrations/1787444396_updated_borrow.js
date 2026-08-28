/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1657329150")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.role = \"users\"",
    "deleteRule": "@request.auth.role = \"edmin\"",
    "listRule": "@request.auth.id != \"\"",
    "updateRule": "@request.auth.role = \"edmin\" || @request.auth.role = \"petugas\" ",
    "viewRule": "@request.auth.id != \"\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1657329150")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "listRule": null,
    "updateRule": null,
    "viewRule": null
  }, collection)

  return app.save(collection)
})
