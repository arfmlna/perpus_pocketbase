/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1596515552")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n    category.id AS id,\n    category.name AS name,\n    COUNT(books.id) AS total_books,\n    -- Tarik ID buku untuk keperluan URL gambar\n    (\n        SELECT b.id \n        FROM books b\n        WHERE EXISTS ( SELECT 1 FROM json_each(b.category) WHERE json_each.value = category.id )\n        ORDER BY b.created DESC LIMIT 1\n    ) AS latest_book_id,\n    -- Tarik nama file poster\n    (\n        SELECT b.poster \n        FROM books b\n        WHERE EXISTS ( SELECT 1 FROM json_each(b.category) WHERE json_each.value = category.id )\n        ORDER BY b.created DESC LIMIT 1\n    ) AS latest_poster\nFROM category\nLEFT JOIN books ON EXISTS (\n    SELECT 1 \n    FROM json_each(books.category) \n    WHERE json_each.value = category.id\n)\nGROUP BY category.id;\n"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_tXYX")

  // remove field
  collection.fields.removeById("json947416432")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_Ymiz",
    "max": 0,
    "min": 0,
    "name": "name",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1596515552")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n    category.id AS id,\n    category.name AS name,\n    COUNT(books.id) AS total_books,\n    -- Menggunakan string nama koleksi 'books' karena nama tabel di SQLite bersifat permanen\n    'books' AS latest_book_collection_name,\n    -- 1. Tarik ID Buku\n    (\n        SELECT b.id \n        FROM books b\n        WHERE EXISTS ( SELECT 1 FROM json_each(b.category) WHERE json_each.value = category.id )\n        ORDER BY b.created DESC LIMIT 1\n    ) AS latest_book_id,\n    -- 2. Tarik nama file poster\n    (\n        SELECT b.poster \n        FROM books b\n        WHERE EXISTS ( SELECT 1 FROM json_each(b.category) WHERE json_each.value = category.id )\n        ORDER BY b.created DESC LIMIT 1\n    ) AS latest_poster\nFROM category\nLEFT JOIN books ON EXISTS (\n    SELECT 1 \n    FROM json_each(books.category) \n    WHERE json_each.value = category.id\n)\nGROUP BY category.id;\n"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_tXYX",
    "max": 0,
    "min": 0,
    "name": "name",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "json947416432",
    "maxSize": 1,
    "name": "latest_book_collection_name",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // remove field
  collection.fields.removeById("_clone_Ymiz")

  return app.save(collection)
})
