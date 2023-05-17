# Events

Retrieving event information

```ts
const eventsController = new EventsController(client);
```

## Class Name

`EventsController`


# Events by Id GET

```ts
async eventsByIdGET(
  id: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Event>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Event`](../../doc/models/event.md)

## Example Usage

```ts
const id = 112;
try {
  const { result, ...httpResponse } = await eventsController.eventsByIdGET(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

