/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1233449815")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id != \"\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1233449815")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.role = \"edmin\" || @request.auth.role = \"petugas\" "
  }, collection)

  return app.save(collection)
})
