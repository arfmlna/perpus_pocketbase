/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2914401458")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.role = \"edmin\" || @request.auth.role = \"petugas\"",
    "deleteRule": "@request.auth.role = \"edmin\" || @request.auth.role = \"petugas\"",
    "updateRule": "@request.auth.role = \"edmin\" || @request.auth.role = \"petugas\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2914401458")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "updateRule": null
  }, collection)

  return app.save(collection)
})
