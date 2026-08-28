/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1596515552")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n    category.id AS id,\n    category.name AS name,\n    COUNT(books.id) AS total_books,\n    -- Mengambil ID Unik Koleksi langsung dari tabel sistem _collections\n    (\n        SELECT c.id \n        FROM _collections c \n        WHERE c.name = 'books' \n        LIMIT 1\n    ) AS latest_book_collection_id,\n    -- 1. Tarik ID Buku\n    (\n        SELECT b.id \n        FROM books b\n        WHERE EXISTS ( SELECT 1 FROM json_each(b.category) WHERE json_each.value = category.id )\n        ORDER BY b.created DESC LIMIT 1\n    ) AS latest_book_id,\n    -- 2. Tarik nama file poster\n    (\n        SELECT b.poster \n        FROM books b\n        WHERE EXISTS ( SELECT 1 FROM json_each(b.category) WHERE json_each.value = category.id )\n        ORDER BY b.created DESC LIMIT 1\n    ) AS latest_poster\nFROM category\nLEFT JOIN books ON EXISTS (\n    SELECT 1 \n    FROM json_each(books.category) \n    WHERE json_each.value = category.id\n)\nGROUP BY category.id;\n"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_Ymiz")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_T1hd",
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
    "id": "json4288593834",
    "maxSize": 1,
    "name": "latest_book_collection_id",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1596515552")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n    category.id AS id,\n    category.name AS name,\n    COUNT(books.id) AS total_books,\n    -- Tarik ID buku untuk keperluan URL gambar\n    (\n        SELECT b.id \n        FROM books b\n        WHERE EXISTS ( SELECT 1 FROM json_each(b.category) WHERE json_each.value = category.id )\n        ORDER BY b.created DESC LIMIT 1\n    ) AS latest_book_id,\n    -- Tarik nama file poster\n    (\n        SELECT b.poster \n        FROM books b\n        WHERE EXISTS ( SELECT 1 FROM json_each(b.category) WHERE json_each.value = category.id )\n        ORDER BY b.created DESC LIMIT 1\n    ) AS latest_poster\nFROM category\nLEFT JOIN books ON EXISTS (\n    SELECT 1 \n    FROM json_each(books.category) \n    WHERE json_each.value = category.id\n)\nGROUP BY category.id;\n"
  }, collection)

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

  // remove field
  collection.fields.removeById("_clone_T1hd")

  // remove field
  collection.fields.removeById("json4288593834")

  return app.save(collection)
})
