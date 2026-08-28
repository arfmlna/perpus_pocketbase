/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1596515552")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n    category.id AS id,\n    category.kode AS kode,\n    category.name AS name,\n    COUNT(books.id) AS total_books,\n    -- Mengambil ID Unik Koleksi langsung dari tabel sistem _collections\n    (\n        SELECT c.id \n        FROM _collections c \n        WHERE c.name = 'books' \n        LIMIT 1\n    ) AS latest_book_collection_id,\n    -- 1. Tarik ID Buku\n    (\n        SELECT b.id \n        FROM books b\n        WHERE EXISTS ( SELECT 1 FROM json_each(b.category) WHERE json_each.value = category.id )\n        ORDER BY b.created DESC LIMIT 1\n    ) AS latest_book_id,\n    -- 2. Tarik nama file poster\n    (\n        SELECT b.poster \n        FROM books b\n        WHERE EXISTS ( SELECT 1 FROM json_each(b.category) WHERE json_each.value = category.id )\n        ORDER BY b.created DESC LIMIT 1\n    ) AS latest_poster,\n    -- 3. Tarik nama file PDF terbaru (Tambahan Baru)\n    (\n        SELECT b.pdfFile -- Sesuai dengan penamaan kolom PDF di database Anda (misal: pdfFile atau pdf_file)\n        FROM books b\n        WHERE EXISTS ( SELECT 1 FROM json_each(b.category) WHERE json_each.value = category.id )\n        ORDER BY b.created DESC LIMIT 1\n    ) AS latest_pdf_file,\n  category.created AS created,\n  category.updated AS updated\nFROM category\nLEFT JOIN books ON EXISTS (\n    SELECT 1 \n    FROM json_each(books.category) \n    WHERE json_each.value = category.id\n)\nGROUP BY category.id;\n"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_qYZL")

  // remove field
  collection.fields.removeById("_clone_zmZc")

  // remove field
  collection.fields.removeById("_clone_DQm3")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_znMy",
    "max": 2,
    "min": 2,
    "name": "kode",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_fPt7",
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
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "_clone_Yngq",
    "name": "created",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "_clone_x4dY",
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
    "viewQuery": "SELECT \n    category.id AS id,\n    category.name AS name,\n    COUNT(books.id) AS total_books,\n    -- Mengambil ID Unik Koleksi langsung dari tabel sistem _collections\n    (\n        SELECT c.id \n        FROM _collections c \n        WHERE c.name = 'books' \n        LIMIT 1\n    ) AS latest_book_collection_id,\n    -- 1. Tarik ID Buku\n    (\n        SELECT b.id \n        FROM books b\n        WHERE EXISTS ( SELECT 1 FROM json_each(b.category) WHERE json_each.value = category.id )\n        ORDER BY b.created DESC LIMIT 1\n    ) AS latest_book_id,\n    -- 2. Tarik nama file poster\n    (\n        SELECT b.poster \n        FROM books b\n        WHERE EXISTS ( SELECT 1 FROM json_each(b.category) WHERE json_each.value = category.id )\n        ORDER BY b.created DESC LIMIT 1\n    ) AS latest_poster,\n    -- 3. Tarik nama file PDF terbaru (Tambahan Baru)\n    (\n        SELECT b.pdfFile -- Sesuai dengan penamaan kolom PDF di database Anda (misal: pdfFile atau pdf_file)\n        FROM books b\n        WHERE EXISTS ( SELECT 1 FROM json_each(b.category) WHERE json_each.value = category.id )\n        ORDER BY b.created DESC LIMIT 1\n    ) AS latest_pdf_file,\n  category.created AS created,\n  category.updated AS updated\nFROM category\nLEFT JOIN books ON EXISTS (\n    SELECT 1 \n    FROM json_each(books.category) \n    WHERE json_each.value = category.id\n)\nGROUP BY category.id;\n"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_qYZL",
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
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "_clone_zmZc",
    "name": "created",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "_clone_DQm3",
    "name": "updated",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // remove field
  collection.fields.removeById("_clone_znMy")

  // remove field
  collection.fields.removeById("_clone_fPt7")

  // remove field
  collection.fields.removeById("_clone_Yngq")

  // remove field
  collection.fields.removeById("_clone_x4dY")

  return app.save(collection)
})
