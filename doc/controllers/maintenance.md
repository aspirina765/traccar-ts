# Maintenance

Maintenance management

```ts
const maintenanceController = new MaintenanceController(client);
```

## Class Name

`MaintenanceController`

## Methods

* [Fetch a List of Maintenance](../../doc/controllers/maintenance.md#fetch-a-list-of-maintenance)
* [Create a Maintenance](../../doc/controllers/maintenance.md#create-a-maintenance)
* [Update a Maintenance](../../doc/controllers/maintenance.md#update-a-maintenance)
* [Delete a Maintenance](../../doc/controllers/maintenance.md#delete-a-maintenance)


# Fetch a List of Maintenance

Without params, it returns a list of Maintenance the user has access to

```ts
async fetchAListOfMaintenance(
  all?: boolean,
  userId?: number,
  deviceId?: number,
  groupId?: number,
  refresh?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Maintenance[]>>
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

[`Maintenance[]`](../../doc/models/maintenance.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await maintenanceController.fetchAListOfMaintenance();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a Maintenance

Create a Maintenance

```ts
async createAMaintenance(
  body: Maintenance,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Maintenance>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Maintenance`](../../doc/models/maintenance.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Maintenance`](../../doc/models/maintenance.md)

## Example Usage

```ts
const contentType = null;
const body: Maintenance = {};

try {
  const { result, ...httpResponse } = await maintenanceController.createAMaintenance(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update a Maintenance

Update a Maintenance

```ts
async updateAMaintenance(
  id: number,
  body: Maintenance,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Maintenance>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `body` | [`Maintenance`](../../doc/models/maintenance.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Maintenance`](../../doc/models/maintenance.md)

## Example Usage

```ts
const id = 112;
const contentType = null;
const body: Maintenance = {};

try {
  const { result, ...httpResponse } = await maintenanceController.updateAMaintenance(id, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete a Maintenance

Delete a Maintenance

```ts
async deleteAMaintenance(
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
  const { result, ...httpResponse } = await maintenanceController.deleteAMaintenance(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

