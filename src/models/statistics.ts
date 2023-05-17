/**
 * TraccarLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface Statistics {
  /** in IS0 8601 format. eg. `1963-11-22T18:30:00Z` */
  captureTime?: string;
  activeUsers?: number;
  activeDevices?: number;
  requests?: number;
  messagesReceived?: number;
  messagesStored?: number;
}

export const statisticsSchema: Schema<Statistics> = object({
  captureTime: ['captureTime', optional(string())],
  activeUsers: ['activeUsers', optional(number())],
  activeDevices: ['activeDevices', optional(number())],
  requests: ['requests', optional(number())],
  messagesReceived: ['messagesReceived', optional(number())],
  messagesStored: ['messagesStored', optional(number())],
});
