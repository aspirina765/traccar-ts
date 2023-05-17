# Server

Server information

```ts
const serverController = new ServerController(client);
```

## Class Name

`ServerController`

## Methods

* [Fetch Server Information](../../doc/controllers/server.md#fetch-server-information)
* [Update Server Information](../../doc/controllers/server.md#update-server-information)


# Fetch Server Information

Fetch Server information

```ts
async fetchServerInformation(
  requestOptions?: RequestOptions
): Promise<ApiResponse<Server>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Server`](../../doc/models/server.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await serverController.fetchServerInformation();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Server Information

Update Server information

```ts
async updateServerInformation(
  body: Server,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Server>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Server`](../../doc/models/server.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Server`](../../doc/models/server.md)

## Example Usage

```ts
const contentType = null;
const body: Server = {};

try {
  const { result, ...httpResponse } = await serverController.updateServerInformation(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

