/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3559739337")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT\n  CAST(row_number() OVER () AS TEXT) as id, \n  info, \n  jumlah,\n  icon\nFROM (\n  SELECT 'Jumlah Pengguna' as info, (SELECT COUNT(*) FROM users) as jumlah, 'Users' as icon\n  UNION ALL\n  \n  SELECT 'Pengguna Aktif' as info, (SELECT COUNT(*) FROM users WHERE updated >= datetime('now', '-1 days')) as jumlah, 'UserCheck' as icon\n  UNION ALL\n  \n  SELECT 'Jumlah Buku' as info, (SELECT COUNT(*) FROM books) as jumlah, 'Book' as icon\n  UNION ALL\n  \n  SELECT 'Buku Baru' as info, (SELECT COUNT(*) FROM books WHERE created  >= date('now', 'start of month')) as jumlah, 'Users' as icon\n  UNION ALL\n  \n  SELECT 'Buku Tersedia' as info, (SELECT COUNT(*) FROM books WHERE pdfFile != '' AND pdfFile IS NOT NULL) as jumlah, 'Users' as icon\n  UNION ALL\n  \n  SELECT 'Buku Tidak Tersedia' as info, (SELECT COUNT(*) FROM books WHERE pdfFile = '' OR pdfFile IS NULL) as jumlah, 'Users' as icon\n)\n"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3559739337")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT\n  CAST(row_number() OVER () AS TEXT) as id, \n  info, \n  jumlah,\n  icon\nFROM (\n  SELECT 'Jumlah Pengguna' as info, (SELECT COUNT(*) FROM users) as jumlah, 'Users' as icon\n  UNION ALL\n  SELECT 'Pengguna Aktif' as info, (SELECT COUNT(*) FROM users WHERE updated >= date('now', '-1 days')) as jumlah, 'UserCheck' as icon\n  UNION ALL\n  SELECT 'Jumlah Buku' as info, (SELECT COUNT(*) FROM books) as jumlah, 'Book' as icon\n  UNION ALL\n  SELECT 'Buku Baru' as info, (SELECT COUNT(*) FROM books WHERE created  >= date('now', 'start of month')) as jumlah, 'Users' as icon\n  UNION ALL\n  SELECT 'Buku Tersedia' as info, (SELECT COUNT(*) FROM books WHERE pdfFile != '' AND pdfFile IS NOT NULL) as jumlah, 'Users' as icon\n  UNION ALL\n  SELECT 'Buku Tidak Tersedia' as info, (SELECT COUNT(*) FROM books WHERE pdfFile = '' OR pdfFile IS NULL) as jumlah, 'Users' as icon\n)\n"
  }, collection)

  return app.save(collection)
})
