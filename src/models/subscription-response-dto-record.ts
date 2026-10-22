import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authDetailsSchema, type AuthDetails } from "./auth-details.js";

export type SubscriptionResponseDtoRecord = {
  /** Event type for which the subscription was created. */
  eventType?: string;
  /**
   * Unique identifier for the subscription. Use this ID to retrieve, update, or delete the
   * subscription.
   */
  subscriptionId?: string;
  /** Partner ID of the seller who created the subscription. */
  partnerId?: string;
  /** Version of the event type for which the subscription was created. */
  eventVersion?: string;
  /** Resource (functional category) that the event type is mapped to. */
  resourceName?: string;
  /** Subscription status. Allowed values: ACTIVE, INACTIVE. */
  status?: string;
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
};

export const subscriptionResponseDtoRecordSchema: Schema<SubscriptionResponseDtoRecord> =
  s.object<SubscriptionResponseDtoRecord>({
    eventType: s.optional(s.string()),
    subscriptionId: s.optional(s.string()),
    partnerId: s.optional(s.string()),
    eventVersion: s.optional(s.string()),
    resourceName: s.optional(s.string()),
    status: s.optional(s.string()),
    eventUrl: s.optional(s.string()),
    authDetails: s.optional(s.lazy(() => authDetailsSchema)),
    headers: s.optional(s.record(s.string(), s.string())),
  });
