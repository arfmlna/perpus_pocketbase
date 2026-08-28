/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3559739337")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT\n  CAST(row_number() OVER () AS TEXT) as id, \n  info, \n  jumlah \nFROM (\n  SELECT 'Jumlah Pengguna' as info, (SELECT COUNT(*) FROM users) as jumlah\n  UNION ALL\n  SELECT 'Jumlah Buku' as info, (SELECT COUNT(*) FROM books) as jumlah\n  UNION ALL\n  SELECT 'Buku Baru' as info, (SELECT COUNT(*) FROM books WHERE created  >= date('now', 'start of month')) as jumlah\n  UNION ALL\n  SELECT 'Buku Tersedia' as info, (SELECT COUNT(*) FROM books WHERE pdfFile != '' AND pdfFile IS NOT NULL) as jumlah\n  UNION ALL\n  SELECT 'Buku Tidak Tersedia' as info, (SELECT COUNT(*) FROM books WHERE pdfFile = '' OR pdfFile IS NULL) as jumlah\n)\n"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3559739337")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT\n  CAST(row_number() OVER () AS TEXT) as id, \n  info, \n  jumlah \nFROM (\n  SELECT 'Jumlah Pengguna' as info, (SELECT COUNT(*) FROM users) as jumlah\n  UNION ALL\n  SELECT 'Jumlah Buku' as info, (SELECT COUNT(*) FROM books) as jumlah\n  UNION ALL\n  SELECT 'Buku Baru' as info, (SELECT COUNT(*) FROM books WHERE created  >= date('now', 'start of month')) as jumlah\n  UNION ALL\n  SELECT 'Buku Tersedia' as info, (SELECT COUNT(*) FROM books WHERE pdfFile != '' AND pdfFile IS NOT NULL) as jumlah\n  UNION ALL\n  SELECT 'Buku Tidak Tersedia' as info, (SELECT COUNT(*) FROM books WHERE pdfFile = '' OR pdfFile IS NOT NULL) as jumlah\n)\n"
  }, collection)

  return app.save(collection)
})
