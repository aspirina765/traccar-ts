# Session

User session management

```ts
const sessionController = new SessionController(client);
```

## Class Name

`SessionController`

## Methods

* [Fetch Session Information](../../doc/controllers/session.md#fetch-session-information)
* [Create a New Session](../../doc/controllers/session.md#create-a-new-session)
* [Close the Session](../../doc/controllers/session.md#close-the-session)
* [Fetch Session Information 1](../../doc/controllers/session.md#fetch-session-information-1)
* [Open ID Callback](../../doc/controllers/session.md#open-id-callback)


# Fetch Session Information

Fetch Session information

```ts
async fetchSessionInformation(
  token?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<User>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`User`](../../doc/models/user.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await sessionController.fetchSessionInformation();
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
| 404 | Not Found | `ApiError` |


# Create a New Session

Create a new Session

```ts
async createANewSession(
  email: string,
  password: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<User>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Form, Required | - |
| `password` | `string` | Form, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`User`](../../doc/models/user.md)

## Example Usage

```ts
const contentType = null;
const email = 'email6';
const password = 'password4';
try {
  const { result, ...httpResponse } = await sessionController.createANewSession(email, password);
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
| 401 | Unauthorized | `ApiError` |


# Close the Session

Close the Session

```ts
async closeTheSession(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await sessionController.closeTheSession();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Fetch Session Information 1

Fetch Session information

```ts
async fetchSessionInformation1(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await sessionController.fetchSessionInformation1();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Open ID Callback

OpenID Callback

```ts
async openIDCallback(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await sessionController.openIDCallback();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

