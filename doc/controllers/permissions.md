# Permissions

User permissions and other object linking

```ts
const permissionsController = new PermissionsController(client);
```

## Class Name

`PermissionsController`

## Methods

* [Link an Object to Another Object](../../doc/controllers/permissions.md#link-an-object-to-another-object)
* [Unlink an Object From Another Object](../../doc/controllers/permissions.md#unlink-an-object-from-another-object)


# Link an Object to Another Object

Link an Object to another Object

```ts
async linkAnObjectToAnotherObject(
  body: Permission,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Permission`](../../doc/models/permission.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = null;
const body: Permission = {};

try {
  const { result, ...httpResponse } = await permissionsController.linkAnObjectToAnotherObject(body);
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
| 400 | No permission | `ApiError` |


# Unlink an Object From Another Object

Unlink an Object from another Object

```ts
async unlinkAnObjectFromAnotherObject(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await permissionsController.unlinkAnObjectFromAnotherObject();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

