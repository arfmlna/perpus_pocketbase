/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1547860643")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.role = \"edmin\" || @request.auth.role = \"petugas\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1547860643")

  // update collection data
  unmarshal({
    "createRule": null
  }, collection)

  return app.save(collection)
})
