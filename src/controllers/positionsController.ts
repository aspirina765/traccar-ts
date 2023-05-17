/**
 * TraccarLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import { Position, positionSchema } from '../models/position';
import { array, number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class PositionsController extends BaseController {
  /**
   * We strongly recommend using [Traccar WebSocket API](https://www.traccar.org/traccar-api/) instead of
   * periodically polling positions endpoint. Without any params, it returns a list of last known
   * positions for all the user's Devices. _from_ and _to_ fields are not required with _id_.
   *
   * @param deviceId _deviceId_ is optional, but requires the _from_ and _to_ parameters when used
   * @param from     in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
   * @param to       in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
   * @param id       To fetch one or more positions. Multiple params can be passed like `id=31&id=42`
   * @return Response from the API call
   */
  async fetchesAListOfPositions(
    deviceId?: number,
    from?: string,
    to?: string,
    id?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Position[]>> {
    const req = this.createRequest('GET', '/positions');
    const mapped = req.prepareArgs({
      deviceId: [deviceId, optional(number())],
      from: [from, optional(string())],
      to: [to, optional(string())],
      id: [id, optional(number())],
    });
    req.query('deviceId', mapped.deviceId);
    req.query('from', mapped.from);
    req.query('to', mapped.to);
    req.query('id', mapped.id);
    return req.callAsJson(array(positionSchema), requestOptions);
  }

  /**
   * Deletes all the Positions of a device in the time span specified
   *
   * @param deviceId
   * @param from     in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
   * @param to       in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
   * @return Response from the API call
   */
  async deletesAllThePositionsOfADeviceInTheTimeSpanSpecified(
    deviceId: number,
    from: string,
    to: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE', '/positions');
    const mapped = req.prepareArgs({
      deviceId: [deviceId, number()],
      from: [from, string()],
      to: [to, string()],
    });
    req.query('deviceId', mapped.deviceId);
    req.query('from', mapped.from);
    req.query('to', mapped.to);
    req.throwOn(400, ApiError, 'Bad Request');
    return req.call(requestOptions);
  }
}
