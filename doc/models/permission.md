
# Permission

This is a permission map that contain two object indexes. It is used to link/unlink objects. Order is important. Example: { deviceId:8, geofenceId: 16 }

## Structure

`Permission`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `number \| undefined` | Optional | User Id, can be only first parameter |
| `deviceId` | `number \| undefined` | Optional | Device Id, can be first parameter or second only in combination with userId |
| `groupId` | `number \| undefined` | Optional | Group Id, can be first parameter or second only in combination with userId |
| `geofenceId` | `number \| undefined` | Optional | Geofence Id, can be second parameter only |
| `notificationId` | `number \| undefined` | Optional | Notification Id, can be second parameter only |
| `calendarId` | `number \| undefined` | Optional | Calendar Id, can be second parameter only and only in combination with userId |
| `attributeId` | `number \| undefined` | Optional | Computed Attribute Id, can be second parameter only |
| `driverId` | `number \| undefined` | Optional | Driver Id, can be second parameter only |
| `managedUserId` | `number \| undefined` | Optional | User Id, can be second parameter only and only in combination with userId |

## Example (as JSON)

```json
{
  "userId": 28,
  "deviceId": 206,
  "groupId": 114,
  "geofenceId": 136,
  "notificationId": 236
}
```

