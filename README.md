
# Getting Started with Traccar

## Introduction

Traccar GPS tracking server API documentation. To use the API you need to have a server instance. For testing purposes you can use one of free [demo servers](https://www.traccar.org/demo-server/). For production use you can install your own server or get a [subscription service](https://www.traccar.org/product/tracking-server/).

## Building

### Requirements

The SDK relies on **Node.js** and **npm** (to resolve dependencies). It also requires **Typescript version 3.9+**. You can download and install Node.js and [npm](https://www.npmjs.com/) from [the official Node.js website](https://nodejs.org/en/download/).

> **NOTE:** npm is installed by default when Node.js is installed.

### Verify Successful Installation

Run the following commands in the command prompt or shell of your choice to check if Node.js and npm are successfully installed:

* Node.js: `node --version`

* npm: `npm --version`

![Version Check](https://apidocs.io/illustration/typescript?workspaceFolder=Traccar&step=versionCheck)

### Install Dependencies

- To resolve all dependencies, go to the **SDK root directory** and run the following command with npm:

```bash
npm install
```

- This will install all dependencies in the **node_modules** folder.

![Resolve Dependencies](https://apidocs.io/illustration/typescript?workspaceFolder=Traccar&workspaceName=traccarlib&step=resolveDependency)

## Installation

The following section explains how to use the generated library in a new project.

### 1. Initialize the Node Project

- Open an IDE/text editor for JavaScript like Visual Studio Code. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

- Click on **File** and select **Open Folder**. Select an empty folder of your project, the folder will become visible in the sidebar on the left.

![Open Folder](https://apidocs.io/illustration/typescript?step=openProject)

- To initialize the Node project, click on **Terminal** and select **New Terminal**. Execute the following command in the terminal:

```bash
npm init --y
```

![Initialize the Node Project](https://apidocs.io/illustration/typescript?step=initializeProject)

### 2. Add Dependencies to the Client Library

- The created project manages its dependencies using its `package.json` file. In order to add a dependency on the *TraccarLib* client library, double click on the `package.json` file in the bar on the left and add the dependency to the package in it.

![Add Traccarlib Dependency](https://apidocs.io/illustration/typescript?workspaceFolder=Traccar&workspaceName=traccarlib&step=importDependency)

- To install the package in the project, run the following command in the terminal:

```bash
npm install
```

![Install Traccarlib Dependency](https://apidocs.io/illustration/typescript?step=installDependency)

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `host` | `string` | *Default*: `'localhost'` |
| `port` | `PortEnum` | *Default*: `PortEnum.Enum8082` |
| `environment` | Environment | The API environment. <br> **Default: `Environment.Production`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `basicAuthUserName` | `string` | The username to use with basic authentication |
| `basicAuthPassword` | `string` | The password to use with basic authentication |

### HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

### RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
  environment: Environment.Production,
  basicAuthUserName: 'BasicAuthUserName',
  basicAuthPassword: 'BasicAuthPassword',
});
```

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| production | **Default** Demo Server 1 |
| environment2 | Demo Server 2 |
| environment3 | Demo Server 3 |
| environment4 | Demo Server 4 |
| environment5 | Subscription Server |
| environment6 | Other Server |

## Authorization

This API uses `Basic Authentication`.

## List of APIs

* [Server](doc/controllers/server.md)
* [Session](doc/controllers/session.md)
* [Devices](doc/controllers/devices.md)
* [Groups](doc/controllers/groups.md)
* [Users](doc/controllers/users.md)
* [Permissions](doc/controllers/permissions.md)
* [Positions](doc/controllers/positions.md)
* [Events](doc/controllers/events.md)
* [Reports](doc/controllers/reports.md)
* [Notifications](doc/controllers/notifications.md)
* [Geofences](doc/controllers/geofences.md)
* [Commands](doc/controllers/commands.md)
* [Attributes](doc/controllers/attributes.md)
* [Drivers](doc/controllers/drivers.md)
* [Maintenance](doc/controllers/maintenance.md)
* [Calendars](doc/controllers/calendars.md)
* [Statistics](doc/controllers/statistics.md)

## Classes Documentation

* [ApiResponse](doc/api-response.md)
* [ApiError](doc/api-error.md)

