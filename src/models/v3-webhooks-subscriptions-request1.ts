import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authDetails8Schema, type AuthDetails8 } from "./auth-details8.js";

export type V3WebhooksSubscriptionsRequest1 = {
  /**
   * Event type that is subscribed for notifications.<br><b style='color:green;'>Market
   * availability: Global</b>
   */
  eventType?: string;
  /** Version of the event type.<br><b style='color:green;'>Market availability: Global</b> */
  eventVersion?: string;
  /**
   * Resource (functional category) that the event type is mapped to.<br><b
   * style='color:green;'>Market availability: Global</b>
   */
  resourceName?: string;
  /**
   * Destination URL where notifications are delivered.<br><b style='color:green;'>Market
   * availability: Global</b>
   */
  eventUrl?: string;
  /**
   * Authentication details for accessing the destination URL, if the URL is protected.<br><b
   * style='color:green;'>Market availability: Global</b>
   */
  authDetails?: AuthDetails8;
  /**
   * Additional HTTP headers to include when delivering notifications to the destination URL. Use
   * for custom authentication headers, tracking identifiers, or any other headers your endpoint
   * requires.<br><b style='color:green;'>Market availability: Global</b>
   */
  headers?: Record<string, string>;
  /**
   * Status of the subscription. Allowed values are ACTIVE or INACTIVE.<br><b
   * style='color:green;'>Market availability: Global</b>
   */
  status?: string;
};

export const v3WebhooksSubscriptionsRequest1Schema: Schema<V3WebhooksSubscriptionsRequest1> =
  s.object<V3WebhooksSubscriptionsRequest1>({
    eventType: s.optional(s.string()),
    eventVersion: s.optional(s.string()),
    resourceName: s.optional(s.string()),
    eventUrl: s.optional(s.string()),
    authDetails: s.optional(s.lazy(() => authDetails8Schema)),
    headers: s.optional(s.record(s.string(), s.string())),
    status: s.optional(s.string()),
  });
