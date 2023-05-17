
# Report Stops

## Structure

`ReportStops`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `number \| undefined` | Optional | - |
| `deviceName` | `string \| undefined` | Optional | - |
| `duration` | `number \| undefined` | Optional | - |
| `startTime` | `string \| undefined` | Optional | in IS0 8601 format. eg. `1963-11-22T18:30:00Z` |
| `address` | `string \| undefined` | Optional | - |
| `lat` | `number \| undefined` | Optional | - |
| `lon` | `number \| undefined` | Optional | - |
| `endTime` | `string \| undefined` | Optional | in IS0 8601 format. eg. `1963-11-22T18:30:00Z` |
| `spentFuel` | `number \| undefined` | Optional | in liters |
| `engineHours` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "deviceId": 206,
  "deviceName": "deviceName0",
  "duration": 112,
  "startTime": "2016-03-13T12:52:32.123Z",
  "address": "address6"
}
```

