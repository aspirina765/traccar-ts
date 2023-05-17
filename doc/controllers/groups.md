# Groups

Group management

```ts
const groupsController = new GroupsController(client);
```

## Class Name

`GroupsController`

## Methods

* [Fetch a List of Groups](../../doc/controllers/groups.md#fetch-a-list-of-groups)
* [Create a Group](../../doc/controllers/groups.md#create-a-group)
* [Update a Group](../../doc/controllers/groups.md#update-a-group)
* [Delete a Group](../../doc/controllers/groups.md#delete-a-group)


# Fetch a List of Groups

Without any params, returns a list of the Groups the user belongs to

```ts
async fetchAListOfGroups(
  all?: boolean,
  userId?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Group[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `all` | `boolean \| undefined` | Query, Optional | Can only be used by admins or managers to fetch all entities |
| `userId` | `number \| undefined` | Query, Optional | Standard users can use this only with their own _userId_ |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Group[]`](../../doc/models/group.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await groupsController.fetchAListOfGroups();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a Group

Create a Group

```ts
async createAGroup(
  body: Group,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Group>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Group`](../../doc/models/group.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Group`](../../doc/models/group.md)

## Example Usage

```ts
const contentType = null;
const body: Group = {};

try {
  const { result, ...httpResponse } = await groupsController.createAGroup(body);
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


# Update a Group

Update a Group

```ts
async updateAGroup(
  id: number,
  body: Group,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Group>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `body` | [`Group`](../../doc/models/group.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Group`](../../doc/models/group.md)

## Example Usage

```ts
const id = 112;
const contentType = null;
const body: Group = {};

try {
  const { result, ...httpResponse } = await groupsController.updateAGroup(id, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete a Group

Delete a Group

```ts
async deleteAGroup(
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
  const { result, ...httpResponse } = await groupsController.deleteAGroup(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

