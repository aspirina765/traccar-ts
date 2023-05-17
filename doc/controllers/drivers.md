# Drivers

Drivers management

```ts
const driversController = new DriversController(client);
```

## Class Name

`DriversController`

## Methods

* [Fetch a List of Drivers](../../doc/controllers/drivers.md#fetch-a-list-of-drivers)
* [Create a Driver](../../doc/controllers/drivers.md#create-a-driver)
* [Update a Driver](../../doc/controllers/drivers.md#update-a-driver)
* [Delete a Driver](../../doc/controllers/drivers.md#delete-a-driver)


# Fetch a List of Drivers

Without params, it returns a list of Drivers the user has access to

```ts
async fetchAListOfDrivers(
  all?: boolean,
  userId?: number,
  deviceId?: number,
  groupId?: number,
  refresh?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Driver[]>>
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

[`Driver[]`](../../doc/models/driver.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await driversController.fetchAListOfDrivers();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a Driver

Create a Driver

```ts
async createADriver(
  body: Driver,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Driver>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Driver`](../../doc/models/driver.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Driver`](../../doc/models/driver.md)

## Example Usage

```ts
const contentType = null;
const body: Driver = {};

try {
  const { result, ...httpResponse } = await driversController.createADriver(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update a Driver

Update a Driver

```ts
async updateADriver(
  id: number,
  body: Driver,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Driver>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `body` | [`Driver`](../../doc/models/driver.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Driver`](../../doc/models/driver.md)

## Example Usage

```ts
const id = 112;
const contentType = null;
const body: Driver = {};

try {
  const { result, ...httpResponse } = await driversController.updateADriver(id, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete a Driver

Delete a Driver

```ts
async deleteADriver(
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
  const { result, ...httpResponse } = await driversController.deleteADriver(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

