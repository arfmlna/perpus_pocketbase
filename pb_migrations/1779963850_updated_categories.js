/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1596515552")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n    category.id AS id,\n    category.name AS name,\n    COUNT(books.id) AS total_books,\n    -- Mengambil ID Unik Koleksi langsung dari tabel sistem _collections\n    (\n        SELECT c.id \n        FROM _collections c \n        WHERE c.name = 'books' \n        LIMIT 1\n    ) AS latest_book_collection_id,\n    -- 1. Tarik ID Buku\n    (\n        SELECT b.id \n        FROM books b\n        WHERE EXISTS ( SELECT 1 FROM json_each(b.category) WHERE json_each.value = category.id )\n        ORDER BY b.created DESC LIMIT 1\n    ) AS latest_book_id,\n    -- 2. Tarik nama file poster\n    (\n        SELECT b.poster \n        FROM books b\n        WHERE EXISTS ( SELECT 1 FROM json_each(b.category) WHERE json_each.value = category.id )\n        ORDER BY b.created DESC LIMIT 1\n    ) AS latest_poster,\n  category.created AS created,\n  category.updated AS updated\nFROM category\nLEFT JOIN books ON EXISTS (\n    SELECT 1 \n    FROM json_each(books.category) \n    WHERE json_each.value = category.id\n)\nGROUP BY category.id;\n"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_Vfod")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_BdJ9",
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
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "_clone_INGn",
    "name": "created",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "_clone_9TRu",
    "name": "updated",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1596515552")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n    category.id AS id,\n    category.name AS name,\n    COUNT(books.id) AS total_books,\n    -- Mengambil ID Unik Koleksi langsung dari tabel sistem _collections\n    (\n        SELECT c.id \n        FROM _collections c \n        WHERE c.name = 'books' \n        LIMIT 1\n    ) AS latest_book_collection_id,\n    -- 1. Tarik ID Buku\n    (\n        SELECT b.id \n        FROM books b\n        WHERE EXISTS ( SELECT 1 FROM json_each(b.category) WHERE json_each.value = category.id )\n        ORDER BY b.created DESC LIMIT 1\n    ) AS latest_book_id,\n    -- 2. Tarik nama file poster\n    (\n        SELECT b.poster \n        FROM books b\n        WHERE EXISTS ( SELECT 1 FROM json_each(b.category) WHERE json_each.value = category.id )\n        ORDER BY b.created DESC LIMIT 1\n    ) AS latest_poster\nFROM category\nLEFT JOIN books ON EXISTS (\n    SELECT 1 \n    FROM json_each(books.category) \n    WHERE json_each.value = category.id\n)\nGROUP BY category.id;\n"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_Vfod",
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
  collection.fields.removeById("_clone_BdJ9")

  // remove field
  collection.fields.removeById("_clone_INGn")

  // remove field
  collection.fields.removeById("_clone_9TRu")

  return app.save(collection)
})
