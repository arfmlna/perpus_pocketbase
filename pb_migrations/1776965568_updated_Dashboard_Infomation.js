/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3559739337")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT\n  CAST(row_number() OVER () AS TEXT) as id, \n  info, \n  jumlah\nFROM (\n  SELECT 'Jumlah Account' as info, (SELECT COUNT(*) FROM users) as jumlah\n  UNION ALL\n  \n  SELECT 'Account Aktif' as info, (SELECT COUNT(DISTINCT user) FROM logs WHERE updated >= datetime('now', '-1 days')) as jumlah\n  UNION ALL\n\n  SELECT 'Jumlah Petugas' as info, (SELECT COUNT(*) FROM users WHERE role='petugas') as jumlah\n  UNION ALL\n\n   SELECT 'Jumlah Peserta Didik' as info, (SELECT COUNT(*) FROM users WHERE role='users') as jumlah\n  UNION ALL\n  \n  SELECT 'Jumlah Buku' as info, (SELECT COUNT(*) FROM books) as jumlah\n  UNION ALL\n  \n  SELECT 'Buku Baru' as info, (SELECT COUNT(*) FROM books WHERE created  >= date('now', 'start of month')) as jumlah\n  UNION ALL\n  \n  SELECT 'Buku Tersedia' as info, (SELECT COUNT(*) FROM books WHERE pdfFile != '' AND pdfFile IS NOT NULL) as jumlah\n  UNION ALL\n  \n  SELECT 'Buku Tidak Tersedia' as info, (SELECT COUNT(*) FROM books WHERE pdfFile = '' OR pdfFile IS NULL) as jumlah\n)\n"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3559739337")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT\n  CAST(row_number() OVER () AS TEXT) as id, \n  info, \n  jumlah\nFROM (\n  SELECT 'Jumlah Account' as info, (SELECT COUNT(*) FROM users) as jumlah\n  UNION ALL\n  \n  SELECT 'Account Aktif' as info, (SELECT COUNT(DISTINCT user) FROM logs WHERE updated >= datetime('now', '-1 days')) as jumlah\n  UNION ALL\n\n  SELECT 'Jumlah Petugas' as info, (SELECT COUNT(*) FROM users WHERE role='petugas') as jumlah\n  UNION ALL\n  \n  SELECT 'Jumlah Buku' as info, (SELECT COUNT(*) FROM books) as jumlah\n  UNION ALL\n  \n  SELECT 'Buku Baru' as info, (SELECT COUNT(*) FROM books WHERE created  >= date('now', 'start of month')) as jumlah\n  UNION ALL\n  \n  SELECT 'Buku Tersedia' as info, (SELECT COUNT(*) FROM books WHERE pdfFile != '' AND pdfFile IS NOT NULL) as jumlah\n  UNION ALL\n  \n  SELECT 'Buku Tidak Tersedia' as info, (SELECT COUNT(*) FROM books WHERE pdfFile = '' OR pdfFile IS NULL) as jumlah\n)\n"
  }, collection)

  return app.save(collection)
})
