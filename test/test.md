# User API

User management API

## Users [/user]

### Create an User [POST]
+ Request (application/json; charset=utf-8)

        {"name": "test"}

+ Response 201 (application/json; charset=utf-8)

        {"name": "test", "createdAt": "2015-08-03T18:27:44.603Z", "updatedAt": "2015-08-03T18:27:44.603Z", "id": 1}

### Get all Users [GET]
+ Response 200 (application/json; charset=utf-8)

        [{"name": "test"}]

### Get an User [/user/{id}]
+ Parameters
  + id: 1 (required, number) - The UserID

### Update an User [PATCH]
+ Parameters
  + id: 1 (required, number) - The UserID
+ Request (application/json; charset=utf-8)

        {"name": "tested"}

+ Response 200 (application/json; charset=utf-8)

        {"name": "tested", "createdAt": "2015-08-03T18:27:44.603Z", "updatedAt": "2015-08-03T18:27:44.603Z", "id": 1}


### Delete an User [DELETE]
+ Parameters
  + id: 1 (required, number) - The UserID

+ Response 204
