/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
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
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_200393208")

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
