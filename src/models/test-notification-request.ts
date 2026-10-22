import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authDetailsSchema, type AuthDetails } from "./auth-details.js";

export type TestNotificationRequest = {
  /** Event type to test. Use the same identifier you would use to subscribe. */
  eventType: string;
  /** Version of the event type to test. */
  eventVersion: string;
  /** Resource (functional category) that the event type is mapped to. */
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
};

export const testNotificationRequestSchema: Schema<TestNotificationRequest> =
  s.object<TestNotificationRequest>({
    eventType: s.string(),
    eventVersion: s.string(),
    resourceName: s.string(),
    eventUrl: s.string(),
    authDetails: s.optional(s.lazy(() => authDetailsSchema)),
    headers: s.optional(s.record(s.string(), s.string())),
  });
