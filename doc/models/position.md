
# Position

## Structure

`Position`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `deviceId` | `number \| undefined` | Optional | - |
| `protocol` | `string \| undefined` | Optional | - |
| `deviceTime` | `string \| undefined` | Optional | in IS0 8601 format. eg. `1963-11-22T18:30:00Z` |
| `fixTime` | `string \| undefined` | Optional | in IS0 8601 format. eg. `1963-11-22T18:30:00Z` |
| `serverTime` | `string \| undefined` | Optional | in IS0 8601 format. eg. `1963-11-22T18:30:00Z` |
| `outdated` | `boolean \| undefined` | Optional | - |
| `valid` | `boolean \| undefined` | Optional | - |
| `latitude` | `number \| undefined` | Optional | - |
| `longitude` | `number \| undefined` | Optional | - |
| `altitude` | `number \| undefined` | Optional | - |
| `speed` | `number \| undefined` | Optional | in knots |
| `course` | `number \| undefined` | Optional | - |
| `address` | `string \| undefined` | Optional | - |
| `accuracy` | `number \| undefined` | Optional | - |
| `network` | `unknown \| undefined` | Optional | - |
| `geofenceIds` | `number[] \| undefined` | Optional | - |
| `attributes` | `unknown \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": 112,
  "deviceId": 206,
  "protocol": "protocol8",
  "deviceTime": "2016-03-13T12:52:32.123Z",
  "fixTime": "2016-03-13T12:52:32.123Z"
}
```

