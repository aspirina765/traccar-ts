# Positions

Retrieving raw location information

```ts
const positionsController = new PositionsController(client);
```

## Class Name

`PositionsController`

## Methods

* [Fetches a List of Positions](../../doc/controllers/positions.md#fetches-a-list-of-positions)
* [Deletes All the Positions of a Device in the Time Span Specified](../../doc/controllers/positions.md#deletes-all-the-positions-of-a-device-in-the-time-span-specified)


# Fetches a List of Positions

We strongly recommend using [Traccar WebSocket API](https://www.traccar.org/traccar-api/) instead of periodically polling positions endpoint. Without any params, it returns a list of last known positions for all the user's Devices. _from_ and _to_ fields are not required with _id_.

```ts
async fetchesAListOfPositions(
  deviceId?: number,
  from?: string,
  to?: string,
  id?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Position[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `number \| undefined` | Query, Optional | _deviceId_ is optional, but requires the _from_ and _to_ parameters when used |
| `from` | `string \| undefined` | Query, Optional | in IS0 8601 format. eg. `1963-11-22T18:30:00Z` |
| `to` | `string \| undefined` | Query, Optional | in IS0 8601 format. eg. `1963-11-22T18:30:00Z` |
| `id` | `number \| undefined` | Query, Optional | To fetch one or more positions. Multiple params can be passed like `id=31&id=42` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Position[]`](../../doc/models/position.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await positionsController.fetchesAListOfPositions();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Deletes All the Positions of a Device in the Time Span Specified

Deletes all the Positions of a device in the time span specified

```ts
async deletesAllThePositionsOfADeviceInTheTimeSpanSpecified(
  deviceId: number,
  from: string,
  to: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `number` | Query, Required | - |
| `from` | `string` | Query, Required | in IS0 8601 format. eg. `1963-11-22T18:30:00Z` |
| `to` | `string` | Query, Required | in IS0 8601 format. eg. `1963-11-22T18:30:00Z` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const deviceId = 206;
const from = '2016-03-13T12:52:32.123Z';
const to = '2016-03-13T12:52:32.123Z';
try {
  const { result, ...httpResponse } = await positionsController.deletesAllThePositionsOfADeviceInTheTimeSpanSpecified(deviceId, from, to);
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
| 400 | Bad Request | `ApiError` |

