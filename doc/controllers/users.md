# Users

User management

```ts
const usersController = new UsersController(client);
```

## Class Name

`UsersController`

## Methods

* [Fetch a List of Users](../../doc/controllers/users.md#fetch-a-list-of-users)
* [Create a User](../../doc/controllers/users.md#create-a-user)
* [Update a User](../../doc/controllers/users.md#update-a-user)
* [Delete a User](../../doc/controllers/users.md#delete-a-user)


# Fetch a List of Users

Fetch a list of Users

```ts
async fetchAListOfUsers(
  userId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<User[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string \| undefined` | Query, Optional | Can only be used by admin or manager users |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`User[]`](../../doc/models/user.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await usersController.fetchAListOfUsers();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | No Permission | `ApiError` |


# Create a User

Create a User

```ts
async createAUser(
  body: User,
  requestOptions?: RequestOptions
): Promise<ApiResponse<User>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`User`](../../doc/models/user.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`User`](../../doc/models/user.md)

## Example Usage

```ts
const contentType = null;
const body: User = {};

try {
  const { result, ...httpResponse } = await usersController.createAUser(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update a User

Update a User

```ts
async updateAUser(
  id: number,
  body: User,
  requestOptions?: RequestOptions
): Promise<ApiResponse<User>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `body` | [`User`](../../doc/models/user.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`User`](../../doc/models/user.md)

## Example Usage

```ts
const id = 112;
const contentType = null;
const body: User = {};

try {
  const { result, ...httpResponse } = await usersController.updateAUser(id, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete a User

Delete a User

```ts
async deleteAUser(
  id: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const id = 112;
try {
  const { result, ...httpResponse } = await usersController.deleteAUser(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

