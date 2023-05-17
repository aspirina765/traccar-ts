# Reports

Reports generation

```ts
const reportsController = new ReportsController(client);
```

## Class Name

`ReportsController`

## Methods

* [Fetch a List of Positions Within the Time Period for the Devices or Groups](../../doc/controllers/reports.md#fetch-a-list-of-positions-within-the-time-period-for-the-devices-or-groups)
* [Fetch a List of Events Within the Time Period for the Devices or Groups](../../doc/controllers/reports.md#fetch-a-list-of-events-within-the-time-period-for-the-devices-or-groups)
* [Fetch a List of Report Summary Within the Time Period for the Devices or Groups](../../doc/controllers/reports.md#fetch-a-list-of-report-summary-within-the-time-period-for-the-devices-or-groups)
* [Fetch a List of Report Trips Within the Time Period for the Devices or Groups](../../doc/controllers/reports.md#fetch-a-list-of-report-trips-within-the-time-period-for-the-devices-or-groups)
* [Fetch a List of Report Stops Within the Time Period for the Devices or Groups](../../doc/controllers/reports.md#fetch-a-list-of-report-stops-within-the-time-period-for-the-devices-or-groups)


# Fetch a List of Positions Within the Time Period for the Devices or Groups

At least one _deviceId_ or one _groupId_ must be passed

```ts
async fetchAListOfPositionsWithinTheTimePeriodForTheDevicesOrGroups(
  from: string,
  to: string,
  deviceId?: number[],
  groupId?: number[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<Position[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `from` | `string` | Query, Required | in IS0 8601 format. eg. `1963-11-22T18:30:00Z` |
| `to` | `string` | Query, Required | in IS0 8601 format. eg. `1963-11-22T18:30:00Z` |
| `deviceId` | `number[] \| undefined` | Query, Optional | - |
| `groupId` | `number[] \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Position[]`](../../doc/models/position.md)

## Example Usage

```ts
const from = '2016-03-13T12:52:32.123Z';
const to = '2016-03-13T12:52:32.123Z';
try {
  const { result, ...httpResponse } = await reportsController.fetchAListOfPositionsWithinTheTimePeriodForTheDevicesOrGroups(from, to);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Fetch a List of Events Within the Time Period for the Devices or Groups

At least one _deviceId_ or one _groupId_ must be passed

```ts
async fetchAListOfEventsWithinTheTimePeriodForTheDevicesOrGroups(
  from: string,
  to: string,
  deviceId?: number[],
  groupId?: number[],
  type?: string[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<Event[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `from` | `string` | Query, Required | in IS0 8601 format. eg. `1963-11-22T18:30:00Z` |
| `to` | `string` | Query, Required | in IS0 8601 format. eg. `1963-11-22T18:30:00Z` |
| `deviceId` | `number[] \| undefined` | Query, Optional | - |
| `groupId` | `number[] \| undefined` | Query, Optional | - |
| `type` | `string[] \| undefined` | Query, Optional | % can be used to return events of all types |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Event[]`](../../doc/models/event.md)

## Example Usage

```ts
const from = '2016-03-13T12:52:32.123Z';
const to = '2016-03-13T12:52:32.123Z';
try {
  const { result, ...httpResponse } = await reportsController.fetchAListOfEventsWithinTheTimePeriodForTheDevicesOrGroups(from, to);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Fetch a List of Report Summary Within the Time Period for the Devices or Groups

At least one _deviceId_ or one _groupId_ must be passed

```ts
async fetchAListOfReportSummaryWithinTheTimePeriodForTheDevicesOrGroups(
  from: string,
  to: string,
  deviceId?: number[],
  groupId?: number[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReportSummary[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `from` | `string` | Query, Required | in IS0 8601 format. eg. `1963-11-22T18:30:00Z` |
| `to` | `string` | Query, Required | in IS0 8601 format. eg. `1963-11-22T18:30:00Z` |
| `deviceId` | `number[] \| undefined` | Query, Optional | - |
| `groupId` | `number[] \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReportSummary[]`](../../doc/models/report-summary.md)

## Example Usage

```ts
const from = '2016-03-13T12:52:32.123Z';
const to = '2016-03-13T12:52:32.123Z';
try {
  const { result, ...httpResponse } = await reportsController.fetchAListOfReportSummaryWithinTheTimePeriodForTheDevicesOrGroups(from, to);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Fetch a List of Report Trips Within the Time Period for the Devices or Groups

At least one _deviceId_ or one _groupId_ must be passed

```ts
async fetchAListOfReportTripsWithinTheTimePeriodForTheDevicesOrGroups(
  from: string,
  to: string,
  deviceId?: number[],
  groupId?: number[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReportTrips[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `from` | `string` | Query, Required | in IS0 8601 format. eg. `1963-11-22T18:30:00Z` |
| `to` | `string` | Query, Required | in IS0 8601 format. eg. `1963-11-22T18:30:00Z` |
| `deviceId` | `number[] \| undefined` | Query, Optional | - |
| `groupId` | `number[] \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReportTrips[]`](../../doc/models/report-trips.md)

## Example Usage

```ts
const from = '2016-03-13T12:52:32.123Z';
const to = '2016-03-13T12:52:32.123Z';
try {
  const { result, ...httpResponse } = await reportsController.fetchAListOfReportTripsWithinTheTimePeriodForTheDevicesOrGroups(from, to);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Fetch a List of Report Stops Within the Time Period for the Devices or Groups

At least one _deviceId_ or one _groupId_ must be passed

```ts
async fetchAListOfReportStopsWithinTheTimePeriodForTheDevicesOrGroups(
  from: string,
  to: string,
  deviceId?: number[],
  groupId?: number[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReportStops[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `from` | `string` | Query, Required | in IS0 8601 format. eg. `1963-11-22T18:30:00Z` |
| `to` | `string` | Query, Required | in IS0 8601 format. eg. `1963-11-22T18:30:00Z` |
| `deviceId` | `number[] \| undefined` | Query, Optional | - |
| `groupId` | `number[] \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReportStops[]`](../../doc/models/report-stops.md)

## Example Usage

```ts
const from = '2016-03-13T12:52:32.123Z';
const to = '2016-03-13T12:52:32.123Z';
try {
  const { result, ...httpResponse } = await reportsController.fetchAListOfReportStopsWithinTheTimePeriodForTheDevicesOrGroups(from, to);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

