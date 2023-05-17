# Geofences

Geofence management

```ts
const geofencesController = new GeofencesController(client);
```

## Class Name

`GeofencesController`

## Methods

* [Fetch a List of Geofences](../../doc/controllers/geofences.md#fetch-a-list-of-geofences)
* [Create a Geofence](../../doc/controllers/geofences.md#create-a-geofence)
* [Update a Geofence](../../doc/controllers/geofences.md#update-a-geofence)
* [Delete a Geofence](../../doc/controllers/geofences.md#delete-a-geofence)


# Fetch a List of Geofences

Without params, it returns a list of Geofences the user has access to

```ts
async fetchAListOfGeofences(
  all?: boolean,
  userId?: number,
  deviceId?: number,
  groupId?: number,
  refresh?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Geofence[]>>
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

[`Geofence[]`](../../doc/models/geofence.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await geofencesController.fetchAListOfGeofences();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a Geofence

Create a Geofence

```ts
async createAGeofence(
  body: Geofence,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Geofence>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Geofence`](../../doc/models/geofence.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Geofence`](../../doc/models/geofence.md)

## Example Usage

```ts
const contentType = null;
const body: Geofence = {};

try {
  const { result, ...httpResponse } = await geofencesController.createAGeofence(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update a Geofence

Update a Geofence

```ts
async updateAGeofence(
  id: number,
  body: Geofence,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Geofence>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `body` | [`Geofence`](../../doc/models/geofence.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Geofence`](../../doc/models/geofence.md)

## Example Usage

```ts
const id = 112;
const contentType = null;
const body: Geofence = {};

try {
  const { result, ...httpResponse } = await geofencesController.updateAGeofence(id, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete a Geofence

Delete a Geofence

```ts
async deleteAGeofence(
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
  const { result, ...httpResponse } = await geofencesController.deleteAGeofence(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

