import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authDetailsSchema, type AuthDetails } from "./auth-details.js";

export type CreateSubscriptionRequestRecord = {
  /**
   * Event type to subscribe to. For allowed values, refer to the Event Payload section or use the
   * GET Event Types API.
   */
  eventType: string;
  /**
   * Version of the event type. For supported versions per eventType, refer to the Event Payload
   * section or use the GET Event Types API.
   */
  eventVersion: string;
  /**
   * Resource (functional category) that the event type is mapped to. For allowed values per
   * eventType, refer to the Event Payload section or use the GET Event Types API.
   */
  resourceName: string;
  /** Destination URL where notifications are delivered. */
  eventUrl: string;
  /** Authentication details for accessing the destination URL, if the URL is protected. */
  authDetails?: AuthDetails;
  /**
   * Additional HTTP headers to include when delivering notifications to the destination URL. Use
   * for custom authentication headers, tracking identifiers, or any other headers your endpoint
   * requires.<br><b style='color:green;'>Market availability: Global</b>
   */
  headers?: Record<string, string>;
  /**
   * Status of the subscription. Allowed values: ACTIVE, INACTIVE. To create a subscription, use
   * status = ACTIVE. Notifications are sent only when the subscription is ACTIVE.
   */
  status: string;
};

export const createSubscriptionRequestRecordSchema: Schema<CreateSubscriptionRequestRecord> =
  s.object<CreateSubscriptionRequestRecord>({
    eventType: s.string(),
    eventVersion: s.string(),
    resourceName: s.string(),
    eventUrl: s.string(),
    authDetails: s.optional(s.lazy(() => authDetailsSchema)),
    headers: s.optional(s.record(s.string(), s.string())),
    status: s.string(),
  });
