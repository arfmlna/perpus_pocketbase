/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1657329150")

  // update collection data
  unmarshal({
    "name": "borrows"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1657329150")

  // update collection data
  unmarshal({
    "name": "borrow"
  }, collection)

  return app.save(collection)
})
