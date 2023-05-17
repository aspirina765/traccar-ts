# Calendars

Calendar management

```ts
const calendarsController = new CalendarsController(client);
```

## Class Name

`CalendarsController`

## Methods

* [Fetch a List of Calendars](../../doc/controllers/calendars.md#fetch-a-list-of-calendars)
* [Create a Calendar](../../doc/controllers/calendars.md#create-a-calendar)
* [Update a Calendar](../../doc/controllers/calendars.md#update-a-calendar)
* [Delete a Calendar](../../doc/controllers/calendars.md#delete-a-calendar)


# Fetch a List of Calendars

Without params, it returns a list of Calendars the user has access to

```ts
async fetchAListOfCalendars(
  all?: boolean,
  userId?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Calendar[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `all` | `boolean \| undefined` | Query, Optional | Can only be used by admins or managers to fetch all entities |
| `userId` | `number \| undefined` | Query, Optional | Standard users can use this only with their own _userId_ |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Calendar[]`](../../doc/models/calendar.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await calendarsController.fetchAListOfCalendars();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a Calendar

Create a Calendar

```ts
async createACalendar(
  body: Calendar,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Calendar>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Calendar`](../../doc/models/calendar.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Calendar`](../../doc/models/calendar.md)

## Example Usage

```ts
const contentType = null;
const body: Calendar = {};

try {
  const { result, ...httpResponse } = await calendarsController.createACalendar(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update a Calendar

Update a Calendar

```ts
async updateACalendar(
  id: number,
  body: Calendar,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Calendar>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `body` | [`Calendar`](../../doc/models/calendar.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Calendar`](../../doc/models/calendar.md)

## Example Usage

```ts
const id = 112;
const contentType = null;
const body: Calendar = {};

try {
  const { result, ...httpResponse } = await calendarsController.updateACalendar(id, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete a Calendar

Delete a Calendar

```ts
async deleteACalendar(
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
  const { result, ...httpResponse } = await calendarsController.deleteACalendar(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

