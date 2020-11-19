# e-commerce-cms
Membuat Content Management System untuk e-commerce
E-Commerce-CMS with name Carrepmu . This app has:

&nbsp;

## Endpoints
````
- POST /login
- GET /products
- POST /products
- GET /products/:id
- PUT /products/:id
- DELETE /products/:id

- GET /carts
- POST /carts/:id
- DELETE /carts/:id
- POST /checkout
````

### RESTful endpoints

### POST /login

> Login to Carrepmu

_Request Header_
```
not needed
```

_Request Body_
```json
{
    "email": "<email to get insert into>",
    "password": "<password to get insert into>"
}
```

_Response (200)_
```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwiaWQiOjEsInJvbGUiOiJBZG1pbiIsImlhdCI6MTYwNTM0Mzc4OH0.DaSz2YPk98cO4IgSycgtTu53QaHB5dF4gs9ZtnKFoLo"
}
```
_Response (400 - Bad Request)_
```json
{
    "message": "Invalid email or password"
}
```

_Response (500 - Internal Server Error)_
```json
{
    "message": "Internal Server Error"
}
```

### GET /products

> Show all Carrepmu products

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
   "id": "<id_of_the_product>",
    "name": "<product_name>",
    "image_url": "<product_image_url>",
    "price": "<product_price>",
    "stock": "<product_stock>",
    "createdAt": "2020-11-14T08:49:31.615Z",
    "updatedAt": "2020-11-14T08:49:31.615Z"
}
```

_Response (401 - Not Authenticated)_
```json
{
  "message": "Doesnt recognize user.."
}
```

_Response (500 - Internal server error)_
```json
{
  "message": "Internal Server Error"
}
```

### POST /products

> Create new products

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Body_
```json
{
  "name": "<name to get insert into>",
  "image_url": "<image_url to get insert into>",
  "price": "<price to get insert into>",
  "stock": "<stock to get insert into>"
}
```

_Response (201 - Created)_
```json
{
  "id": "<given id by system>",
  "name": "<posted name>",
  "image_url": "<posted image_url>",
  "price": "<posted price>",
  "stock": "<posted stock>",
  "createdAt": "2020-03-20T07:15:12.149Z",
  "updatedAt": "2020-03-20T07:15:12.149Z",
}
```

_Response (401 - Not Authenticated)_
```json
{
  "message": "Doesnt recognize user.."
}
```

_Response (400 - Bad Request)_
```json

{
  "message": "Please fill the field!, Do not input value under 1!"
}
```

### GET /products/:id

> Find detail product by ID

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
   "id": 1,
    "name": "<product_name>",
    "image_url": "<product_image_url>",
    "price": "<product_price>",
    "stock": "<product_stock>",
    "createdAt": "2020-11-14T08:49:31.615Z",
    "updatedAt": "2020-11-14T08:49:31.615Z"
}
```

_Response (401 - Not Authenticated)_
```json
{
  "message": "Doesnt recognize user.."
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Not Found"
}
```

### PUT /products/:id

> Update product by ID

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Body_
```json
{
  "name": "<name to get insert into>",
  "image_url": "<image_url to get insert into>",
  "price": "<price to get insert into>",
  "stock": "<stock to get insert into>"
}
```

_Response (200)_
```json
{
  "id": "<selected id>",
  "name": "<updated name>",
  "image_url": "<updated image_url>",
  "price": "<updated price>",
  "stock": "<updated stock>",
  "createdAt": "2020-03-20T07:15:12.149Z",
  "updatedAt": "2020-03-20T07:15:12.149Z",
}
```

_Response (400 - Bad request)_
```json
{
  "message": "field cannot blank!, gaboleh minus dong!"
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Not Found"
}
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Internal Server Error"
}
```

### DELETE /products/:id

> Delete product data by ID

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
   "id": 1,
    "name": "<product_name>",
    "image_url": "<product_image_url>",
    "price": "<product_price>",
    "stock": "<product_stock>",
    "createdAt": "2020-11-14T08:49:31.615Z",
    "updatedAt": "2020-11-14T08:49:31.615Z"
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Not Found"
}
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Internal Server Error"
}
```

### GET /carts

> Show all Carrepmu Carts

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
[
        {
        "id": 7,
        "quantity": 5,
        "status": true,
        "createdAt": "2020-11-18T14:17:57.077Z",
        "updatedAt": "2020-11-18T14:23:04.296Z",
        "UserId": 6,
        "ProductId": 20,
        "Product": {
            "id": 20,
            "name": "Blender PHILIPS",
            "image_url": "https://ecs7.tokopedia.net/img/cache/700/product-1/2019/3/28/3371829/3371829_68921874-715e-426c-bd41-f7bf6ed6b295_480_480.jpg",
            "price": 975000,
            "stock": 15,
            "createdAt": "2020-11-18T14:12:17.786Z",
            "updatedAt": "2020-11-18T14:23:04.315Z"
        }
```

_Response (401 - Not Authenticated)_
```json
{
  "message": "Doesnt recognize user.."
}
```

_Response (500 - Internal server error)_
```json
{
  "message": "Internal Server Error"
}
```

### POST /carts/:id

> Add Cart by ProductId

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (201)_
```json
{
    "id": 13,
    "UserId": 6,
    "ProductId": 16,
    "quantity": 1,
    "updatedAt": "2020-11-19T02:29:59.367Z",
    "createdAt": "2020-11-19T02:29:59.367Z",
    "status": false
}
```

_Response (200)_
```json
{
    "id": 13,
    "quantity": 2,
    "status": false,
    "createdAt": "2020-11-19T02:29:59.367Z",
    "updatedAt": "2020-11-19T02:30:36.724Z",
    "UserId": 6,
    "ProductId": 16
}
```

_Response (401 - Not Authenticated)_
```json
{
  "message": "Doesnt recognize user.."
}
```

_Response (500 - Internal server error)_
```json
{
  "message": "Internal Server Error"
}
```

### DELETE /carts/:id

> Delete Cart by ProductId

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
[
{
    "message": "Deleted Succesfully",
    "data": 1
}
```
_Response (403 - Forbidden Access)_
```json
{
  "message": "Forbidden Access"
}
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Internal Server Error"
}
```

### POST /checkout

> Checkout all items in the cart

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
[
    {
        "id": 14,
        "quantity": 2,
        "status": false,
        "createdAt": "2020-11-19T02:33:02.700Z",
        "updatedAt": "2020-11-19T02:33:04.830Z",
        "UserId": 6,
        "ProductId": 18,
        "Product": {
            "id": 18,
            "name": "Setrika",
            "image_url": "https://ecs7.tokopedia.net/img/cache/700/product-1/2020/2/24/7679456/7679456_0b40a1e7-69d5-4f8d-9db9-c5179d97c22c_714_714.jpg",
            "price": 65000,
            "stock": 29,
            "createdAt": "2020-11-18T14:12:17.786Z",
            "updatedAt": "2020-11-18T14:32:41.736Z"
        }
    }
```

_Response (401 - Not Authenticated)_
```json
{
  "message": "Doesnt recognize user.."
}
```

_Response (500 - Internal server error)_
```json
{
  "message": "Internal Server Error"
}
```

