/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3208210256",
        "max": 0,
        "min": 0,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "_clone_7ZYb",
        "max": 0,
        "min": 0,
        "name": "book_title",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_1174553048",
        "hidden": false,
        "id": "relation306617826",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "category_id",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "_clone_okQu",
        "max": 0,
        "min": 0,
        "name": "category_name",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      }
    ],
    "id": "pbc_1596515552",
    "indexes": [],
    "listRule": null,
    "name": "category_info",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT \n    books.id AS id,\n    books.title AS book_title,\n    category.id AS category_id,\n    category.name AS category_name\nFROM category\nINNER JOIN books ON books.category LIKE '%\"' || category.id || '\"%';\n",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1596515552");

  return app.delete(collection);
})
