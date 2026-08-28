/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3559739337")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT\n  CAST(row_number() OVER () AS TEXT) as id, \n  info, \n  jumlah \nFROM (\n  SELECT 'Jumlah Pengguna' as info, (SELECT COUNT(*) FROM users) as jumlah\n  UNION ALL\n  SELECT 'total_books' as info, (SELECT COUNT(*) FROM books) as jumlah\n  UNION ALL\n  SELECT 'new_books_month' as info, (SELECT COUNT(*) FROM books WHERE created  >= date('now', 'start of month')) as jumlah\n)\n"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3559739337")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT\n  CAST(row_number() OVER () AS TEXT) as id, \n  info, \n  jumlah \nFROM (\n  SELECT 'total_users' as info, (SELECT COUNT(*) FROM users) as jumlah\n  UNION ALL\n  SELECT 'total_books' as info, (SELECT COUNT(*) FROM books) as jumlah\n  UNION ALL\n  SELECT 'new_books_month' as info, (SELECT COUNT(*) FROM books WHERE created  >= date('now', 'start of month')) as jumlah\n)\n"
  }, collection)

  return app.save(collection)
})
