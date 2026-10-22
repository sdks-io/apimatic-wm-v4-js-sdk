import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authDetails8Schema, type AuthDetails8 } from "./auth-details8.js";

export type Event4 = {
  /**
   * Event type for which the subscription was created.<br><b style='color:green;'>Market
   * availability: Global</b>
   */
  eventType?: string;
  /**
   * Unique identifier for the subscription. Use this ID to retrieve, update, or delete the
   * subscription.<br><b style='color:green;'>Market availability: Global</b>
   */
  subscriptionId?: string;
  /**
   * Partner ID of the seller who created the subscription.<br><b style='color:green;'>Market
   * availability: Global</b>
   */
  partnerId?: string;
  /**
   * Version of the event type for which the subscription was created.<br><b
   * style='color:green;'>Market availability: Global</b>
   */
  eventVersion?: string;
  /**
   * Resource (functional category) that the event type is mapped to (for example, ITEM, ORDER,
   * PRICE).<br><b style='color:green;'>Market availability: Global</b>
   */
  resourceName?: string;
  /**
   * Subscription status. Allowed values: ACTIVE, INACTIVE.<br><b style='color:green;'>Market
   * availability: Global</b>
   */
  status?: string;
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
};

export const event4Schema: Schema<Event4> = s.object<Event4>({
  eventType: s.optional(s.string()),
  subscriptionId: s.optional(s.string()),
  partnerId: s.optional(s.string()),
  eventVersion: s.optional(s.string()),
  resourceName: s.optional(s.string()),
  status: s.optional(s.string()),
  eventUrl: s.optional(s.string()),
  authDetails: s.optional(s.lazy(() => authDetails8Schema)),
  headers: s.optional(s.record(s.string(), s.string())),
});
