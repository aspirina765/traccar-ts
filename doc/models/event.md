
# Event

## Structure

`Event`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `type` | `string \| undefined` | Optional | - |
| `eventTime` | `string \| undefined` | Optional | in IS0 8601 format. eg. `1963-11-22T18:30:00Z` |
| `deviceId` | `number \| undefined` | Optional | - |
| `positionId` | `number \| undefined` | Optional | - |
| `geofenceId` | `number \| undefined` | Optional | - |
| `maintenanceId` | `number \| undefined` | Optional | - |
| `attributes` | `unknown \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": 112,
  "type": "type0",
  "eventTime": "2016-03-13T12:52:32.123Z",
  "deviceId": 206,
  "positionId": 188
}
```

