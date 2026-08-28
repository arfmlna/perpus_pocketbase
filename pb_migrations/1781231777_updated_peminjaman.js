/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1547860643")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.role = \"edmin\" || @request.auth.role = \"petugas\"",
    "viewRule": "@request.auth.role = \"edmin\" || @request.auth.role = \"petugas\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1547860643")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id != \"\" && @request.auth.role = \"edmin\" || @request.auth.role = \"petugas\"",
    "viewRule": null
  }, collection)

  return app.save(collection)
})
