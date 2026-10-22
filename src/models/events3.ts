import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authDetails8Schema, type AuthDetails8 } from "./auth-details8.js";

export type Events3 = {
  /**
   * Event type to subscribe to. For allowed values, refer to the Event Payload section or use the
   * GET Event Types API.<br><b style='color:green;'>Market availability: Global</b>
   */
  eventType: string;
  /**
   * Version of the event type. For supported versions per eventType, refer to the Event Payload
   * section or use the GET Event Types API.<br><b style='color:green;'>Market availability:
   * Global</b>
   */
  eventVersion: string;
  /**
   * Resource (functional category) that the event type is mapped to. For allowed values per
   * eventType, refer to the Event Payload section or use the GET Event Types API.<br><b
   * style='color:green;'>Market availability: Global</b>
   */
  resourceName: string;
  /**
   * Destination URL where notifications are delivered.<br><b style='color:green;'>Market
   * availability: Global</b>
   */
  eventUrl: string;
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
   * Status of the subscription. Allowed values: ACTIVE, INACTIVE. To create a subscription, use
   * status = ACTIVE. Notifications are sent only when the subscription is ACTIVE.<br><b
   * style='color:green;'>Market availability: Global</b>
   */
  status: string;
};

export const events3Schema: Schema<Events3> = s.object<Events3>({
  eventType: s.string(),
  eventVersion: s.string(),
  resourceName: s.string(),
  eventUrl: s.string(),
  authDetails: s.optional(s.lazy(() => authDetails8Schema)),
  headers: s.optional(s.record(s.string(), s.string())),
  status: s.string(),
});
