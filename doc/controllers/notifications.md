# Notifications

User notifications management

```ts
const notificationsController = new NotificationsController(client);
```

## Class Name

`NotificationsController`

## Methods

* [Fetch a List of Notifications](../../doc/controllers/notifications.md#fetch-a-list-of-notifications)
* [Create a Notification](../../doc/controllers/notifications.md#create-a-notification)
* [Update a Notification](../../doc/controllers/notifications.md#update-a-notification)
* [Delete a Notification](../../doc/controllers/notifications.md#delete-a-notification)
* [Fetch a List of Available Notification Types](../../doc/controllers/notifications.md#fetch-a-list-of-available-notification-types)
* [Send Test Notification to Current User Via Email and SMS](../../doc/controllers/notifications.md#send-test-notification-to-current-user-via-email-and-sms)


# Fetch a List of Notifications

Without params, it returns a list of Notifications the user has access to

```ts
async fetchAListOfNotifications(
  all?: boolean,
  userId?: number,
  deviceId?: number,
  groupId?: number,
  refresh?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Notification[]>>
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

[`Notification[]`](../../doc/models/notification.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await notificationsController.fetchAListOfNotifications();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a Notification

Create a Notification

```ts
async createANotification(
  body: Notification,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Notification>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Notification`](../../doc/models/notification.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Notification`](../../doc/models/notification.md)

## Example Usage

```ts
const contentType = null;
const body: Notification = {};

try {
  const { result, ...httpResponse } = await notificationsController.createANotification(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update a Notification

Update a Notification

```ts
async updateANotification(
  id: number,
  body: Notification,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Notification>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `body` | [`Notification`](../../doc/models/notification.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Notification`](../../doc/models/notification.md)

## Example Usage

```ts
const id = 112;
const contentType = null;
const body: Notification = {};

try {
  const { result, ...httpResponse } = await notificationsController.updateANotification(id, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete a Notification

Delete a Notification

```ts
async deleteANotification(
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
  const { result, ...httpResponse } = await notificationsController.deleteANotification(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Fetch a List of Available Notification Types

Fetch a list of available Notification types

```ts
async fetchAListOfAvailableNotificationTypes(
  requestOptions?: RequestOptions
): Promise<ApiResponse<NotificationType[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`NotificationType[]`](../../doc/models/notification-type.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await notificationsController.fetchAListOfAvailableNotificationTypes();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Send Test Notification to Current User Via Email and SMS

Send test notification to current user via Email and SMS

```ts
async sendTestNotificationToCurrentUserViaEmailAndSMS(
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
  const { result, ...httpResponse } = await notificationsController.sendTestNotificationToCurrentUserViaEmailAndSMS();
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
| 400 | Could happen if sending has failed | `ApiError` |

