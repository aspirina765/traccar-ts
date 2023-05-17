# Devices

Device management

```ts
const devicesController = new DevicesController(client);
```

## Class Name

`DevicesController`

## Methods

* [Fetch a List of Devices](../../doc/controllers/devices.md#fetch-a-list-of-devices)
* [Create a Device](../../doc/controllers/devices.md#create-a-device)
* [Update a Device](../../doc/controllers/devices.md#update-a-device)
* [Delete a Device](../../doc/controllers/devices.md#delete-a-device)
* [Update Total Distance and Hours of the Device](../../doc/controllers/devices.md#update-total-distance-and-hours-of-the-device)


# Fetch a List of Devices

Without any params, returns a list of the user's devices

```ts
async fetchAListOfDevices(
  all?: boolean,
  userId?: number,
  id?: number,
  uniqueId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Device[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `all` | `boolean \| undefined` | Query, Optional | Can only be used by admins or managers to fetch all entities |
| `userId` | `number \| undefined` | Query, Optional | Standard users can use this only with their own _userId_ |
| `id` | `number \| undefined` | Query, Optional | To fetch one or more devices. Multiple params can be passed like `id=31&id=42` |
| `uniqueId` | `string \| undefined` | Query, Optional | To fetch one or more devices. Multiple params can be passed like `uniqueId=333331&uniqieId=44442` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Device[]`](../../doc/models/device.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await devicesController.fetchAListOfDevices();
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


# Create a Device

Create a Device

```ts
async createADevice(
  body: Device,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Device>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Device`](../../doc/models/device.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Device`](../../doc/models/device.md)

## Example Usage

```ts
const contentType = null;
const body: Device = {};

try {
  const { result, ...httpResponse } = await devicesController.createADevice(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update a Device

Update a Device

```ts
async updateADevice(
  id: number,
  body: Device,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Device>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `body` | [`Device`](../../doc/models/device.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Device`](../../doc/models/device.md)

## Example Usage

```ts
const id = 112;
const contentType = null;
const body: Device = {};

try {
  const { result, ...httpResponse } = await devicesController.updateADevice(id, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete a Device

Delete a Device

```ts
async deleteADevice(
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
  const { result, ...httpResponse } = await devicesController.deleteADevice(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Total Distance and Hours of the Device

Update total distance and hours of the Device

```ts
async updateTotalDistanceAndHoursOfTheDevice(
  id: number,
  body: DeviceAccumulators,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `body` | [`DeviceAccumulators`](../../doc/models/device-accumulators.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const id = 112;
const contentType = null;
const body: DeviceAccumulators = {};

try {
  const { result, ...httpResponse } = await devicesController.updateTotalDistanceAndHoursOfTheDevice(id, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

