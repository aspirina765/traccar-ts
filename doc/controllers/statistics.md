# Statistics

Retrieving server statistics

```ts
const statisticsController = new StatisticsController(client);
```

## Class Name

`StatisticsController`


# Fetch Server Statistics

Fetch server Statistics

```ts
async fetchServerStatistics(
  from: string,
  to: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Statistics[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `from` | `string` | Query, Required | in IS0 8601 format. eg. `1963-11-22T18:30:00Z` |
| `to` | `string` | Query, Required | in IS0 8601 format. eg. `1963-11-22T18:30:00Z` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Statistics[]`](../../doc/models/statistics.md)

## Example Usage

```ts
const from = '2016-03-13T12:52:32.123Z';
const to = '2016-03-13T12:52:32.123Z';
try {
  const { result, ...httpResponse } = await statisticsController.fetchServerStatistics(from, to);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

