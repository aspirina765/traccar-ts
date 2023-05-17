# Attributes

Computed attributes management

```ts
const attributesController = new AttributesController(client);
```

## Class Name

`AttributesController`

## Methods

* [Fetch a List of Attributes](../../doc/controllers/attributes.md#fetch-a-list-of-attributes)
* [Create an Attribute](../../doc/controllers/attributes.md#create-an-attribute)
* [Update an Attribute](../../doc/controllers/attributes.md#update-an-attribute)
* [Delete an Attribute](../../doc/controllers/attributes.md#delete-an-attribute)


# Fetch a List of Attributes

Without params, it returns a list of Attributes the user has access to

```ts
async fetchAListOfAttributes(
  all?: boolean,
  userId?: number,
  deviceId?: number,
  groupId?: number,
  refresh?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Attribute[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `all` | `boolean \| undefined` | Query, Optional | Can only be used by admins or managers to fetch all entities |
| `userId` | `number \| undefined` | Query, Optional | Standard users can use this only with their own _userId_ |
| `deviceId` | `number \| undefined` | Query, Optional | Standard users can use this only with _deviceId_s, they have access to |
| `groupId` | `number \| undefined` | Query, Optional | Standard users can use this only with _groupId_s, they have access to |
| `refresh` | `boolean \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Attribute[]`](../../doc/models/attribute.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await attributesController.fetchAListOfAttributes();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create an Attribute

Create an Attribute

```ts
async createAnAttribute(
  body: Attribute,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Attribute>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Attribute`](../../doc/models/attribute.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Attribute`](../../doc/models/attribute.md)

## Example Usage

```ts
const contentType = null;
const body: Attribute = {};

try {
  const { result, ...httpResponse } = await attributesController.createAnAttribute(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update an Attribute

Update an Attribute

```ts
async updateAnAttribute(
  id: number,
  body: Attribute,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Attribute>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `body` | [`Attribute`](../../doc/models/attribute.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Attribute`](../../doc/models/attribute.md)

## Example Usage

```ts
const id = 112;
const contentType = null;
const body: Attribute = {};

try {
  const { result, ...httpResponse } = await attributesController.updateAnAttribute(id, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete an Attribute

Delete an Attribute

```ts
async deleteAnAttribute(
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
  const { result, ...httpResponse } = await attributesController.deleteAnAttribute(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

