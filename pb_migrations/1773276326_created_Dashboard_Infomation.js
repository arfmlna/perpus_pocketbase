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
        "hidden": false,
        "id": "json4135545099",
        "maxSize": 1,
        "name": "totalUsers",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json2833770096",
        "maxSize": 1,
        "name": "totalBooks",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      }
    ],
    "id": "pbc_3559739337",
    "indexes": [],
    "listRule": null,
    "name": "Dashboard_Infomation",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT \n    'counts' as id, \n    (SELECT COUNT(*) FROM users) as totalUsers, \n    (SELECT COUNT(*) FROM books) as totalBooks\n",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3559739337");

  return app.delete(collection);
})
