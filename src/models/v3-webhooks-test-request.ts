import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authDetails8Schema, type AuthDetails8 } from "./auth-details8.js";

export type V3WebhooksTestRequest = {
  /**
   * Event type to test. Use the same identifier you would use to subscribe.<br><b
   * style='color:green;'>Market availability: Global</b>
   */
  eventType: string;
  /**
   * Version of the event type to test.<br><b style='color:green;'>Market availability: Global</b>
   */
  eventVersion: string;
  /**
   * Resource (functional category) that the event type is mapped to.<br><b
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
};

export const v3WebhooksTestRequestSchema: Schema<V3WebhooksTestRequest> = s.object<V3WebhooksTestRequest>({
  eventType: s.string(),
  eventVersion: s.string(),
  resourceName: s.string(),
  eventUrl: s.string(),
  authDetails: s.optional(s.lazy(() => authDetails8Schema)),
  headers: s.optional(s.record(s.string(), s.string())),
});
