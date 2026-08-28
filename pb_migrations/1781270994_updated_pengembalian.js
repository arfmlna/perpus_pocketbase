/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2914401458")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.role = \"edmin\" || @request.auth.role = \"petugas\"",
    "viewRule": "@request.auth.role = \"edmin\" || @request.auth.role = \"petugas\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2914401458")

  // update collection data
  unmarshal({
    "listRule": null,
    "viewRule": null
  }, collection)

  return app.save(collection)
})
