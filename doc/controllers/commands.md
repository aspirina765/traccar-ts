# Commands

Sending commands to devices and stored command management

```ts
const commandsController = new CommandsController(client);
```

## Class Name

`CommandsController`

## Methods

* [Fetch a List of Saved Commands](../../doc/controllers/commands.md#fetch-a-list-of-saved-commands)
* [Create a Saved Command](../../doc/controllers/commands.md#create-a-saved-command)
* [Update a Saved Command](../../doc/controllers/commands.md#update-a-saved-command)
* [Delete a Saved Command](../../doc/controllers/commands.md#delete-a-saved-command)
* [Fetch a List of Saved Commands Supported by Device at the Moment](../../doc/controllers/commands.md#fetch-a-list-of-saved-commands-supported-by-device-at-the-moment)
* [Dispatch Commands to Device](../../doc/controllers/commands.md#dispatch-commands-to-device)
* [Fetch a List of Available Commands for the Device or All Possible Commands If Device Ommited](../../doc/controllers/commands.md#fetch-a-list-of-available-commands-for-the-device-or-all-possible-commands-if-device-ommited)


# Fetch a List of Saved Commands

Without params, it returns a list of Saved Commands the user has access to

```ts
async fetchAListOfSavedCommands(
  all?: boolean,
  userId?: number,
  deviceId?: number,
  groupId?: number,
  refresh?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Command[]>>
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

[`Command[]`](../../doc/models/command.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await commandsController.fetchAListOfSavedCommands();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a Saved Command

Create a Saved Command

```ts
async createASavedCommand(
  body: Command,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Command>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Command`](../../doc/models/command.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Command`](../../doc/models/command.md)

## Example Usage

```ts
const contentType = null;
const body: Command = {};

try {
  const { result, ...httpResponse } = await commandsController.createASavedCommand(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update a Saved Command

Update a Saved Command

```ts
async updateASavedCommand(
  id: number,
  body: Command,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Command>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `body` | [`Command`](../../doc/models/command.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Command`](../../doc/models/command.md)

## Example Usage

```ts
const id = 112;
const contentType = null;
const body: Command = {};

try {
  const { result, ...httpResponse } = await commandsController.updateASavedCommand(id, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete a Saved Command

Delete a Saved Command

```ts
async deleteASavedCommand(
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
  const { result, ...httpResponse } = await commandsController.deleteASavedCommand(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Fetch a List of Saved Commands Supported by Device at the Moment

Return a list of saved commands linked to Device and its groups, filtered by current Device protocol support

```ts
async fetchAListOfSavedCommandsSupportedByDeviceAtTheMoment(
  deviceId?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Command[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `number \| undefined` | Query, Optional | Standard users can use this only with _deviceId_s, they have access to |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Command[]`](../../doc/models/command.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await commandsController.fetchAListOfSavedCommandsSupportedByDeviceAtTheMoment();
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
| 400 | Could happen when the user doesn't have permission for the device | `ApiError` |


# Dispatch Commands to Device

Dispatch a new command or Saved Command if _body.id_ set

```ts
async dispatchCommandsToDevice(
  body: Command,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Command>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Command`](../../doc/models/command.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Command`](../../doc/models/command.md)

## Example Usage

```ts
const contentType = null;
const body: Command = {};

try {
  const { result, ...httpResponse } = await commandsController.dispatchCommandsToDevice(body);
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
| 400 | Could happen when the user doesn't have permission or an incorrect command _type_ for the device | `ApiError` |


# Fetch a List of Available Commands for the Device or All Possible Commands If Device Ommited

Fetch a list of available Commands for the Device or all possible Commands if Device ommited

```ts
async fetchAListOfAvailableCommandsForTheDeviceOrAllPossibleCommandsIfDeviceOmmited(
  deviceId?: number,
  protocol?: string,
  textChannel?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CommandType[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `number \| undefined` | Query, Optional | Internal device identifier. Only works if device has already reported some locations |
| `protocol` | `string \| undefined` | Query, Optional | Protocol name. Can be used instead of device id |
| `textChannel` | `boolean \| undefined` | Query, Optional | When `true` return SMS commands. If not specified or `false` return data commands |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CommandType[]`](../../doc/models/command-type.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await commandsController.fetchAListOfAvailableCommandsForTheDeviceOrAllPossibleCommandsIfDeviceOmmited();
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
| 400 | Could happen when trying to fetch from a device the user does not have permission | `ApiError` |

