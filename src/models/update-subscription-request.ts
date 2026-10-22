import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authDetailsSchema, type AuthDetails } from "./auth-details.js";

export type UpdateSubscriptionRequest = {
  /** Event type that is subscribed for notifications. */
  eventType?: string;
  /** Version of the specific event type. */
  eventVersion?: string;
  /** Resource (functional category) that the event type is mapped to. */
  resourceName?: string;
  /** Destination URL where notifications are delivered. */
  eventUrl?: string;
  /** Authentication details for accessing the destination URL, if the URL is protected. */
  authDetails?: AuthDetails;
  /**
   * Additional HTTP headers to include when delivering notifications to the destination URL. Use
   * for custom authentication headers, tracking identifiers, or any other headers your endpoint
   * requires.<br><b style='color:green;'>Market availability: Global</b>
   */
  headers?: Record<string, string>;
  /** Status of the subscription. Allowed values are ACTIVE or INACTIVE. */
  status?: string;
};

export const updateSubscriptionRequestSchema: Schema<UpdateSubscriptionRequest> =
  s.object<UpdateSubscriptionRequest>({
    eventType: s.optional(s.string()),
    eventVersion: s.optional(s.string()),
    resourceName: s.optional(s.string()),
    eventUrl: s.optional(s.string()),
    authDetails: s.optional(s.lazy(() => authDetailsSchema)),
    headers: s.optional(s.record(s.string(), s.string())),
    status: s.optional(s.string()),
  });
