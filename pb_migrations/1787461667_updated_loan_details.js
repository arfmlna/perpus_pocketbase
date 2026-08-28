/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_200393208")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.role != \"\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_200393208")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.role = \"edmin\" || @request.auth.role = \"petugas\" "
  }, collection)

  return app.save(collection)
})
