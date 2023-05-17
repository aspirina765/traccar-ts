
# Report Trips

## Structure

`ReportTrips`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `number \| undefined` | Optional | - |
| `deviceName` | `string \| undefined` | Optional | - |
| `maxSpeed` | `number \| undefined` | Optional | in knots |
| `averageSpeed` | `number \| undefined` | Optional | in knots |
| `distance` | `number \| undefined` | Optional | in meters |
| `spentFuel` | `number \| undefined` | Optional | in liters |
| `duration` | `number \| undefined` | Optional | - |
| `startTime` | `string \| undefined` | Optional | in IS0 8601 format. eg. `1963-11-22T18:30:00Z` |
| `startAddress` | `string \| undefined` | Optional | - |
| `startLat` | `number \| undefined` | Optional | - |
| `startLon` | `number \| undefined` | Optional | - |
| `endTime` | `string \| undefined` | Optional | in IS0 8601 format. eg. `1963-11-22T18:30:00Z` |
| `endAddress` | `string \| undefined` | Optional | - |
| `endLat` | `number \| undefined` | Optional | - |
| `endLon` | `number \| undefined` | Optional | - |
| `driverUniqueId` | `number \| undefined` | Optional | - |
| `driverName` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "deviceId": 206,
  "deviceName": "deviceName0",
  "maxSpeed": 8.74,
  "averageSpeed": 126.38,
  "distance": 146.7
}
```

