import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Authentication details for accessing the destination URL, if the URL is protected. */
export type AuthDetails = {
  /** Authentication method for the destination URL. Allowed values: BASIC_AUTH, OAUTH, HMAC. */
  authMethod?: string;
  /** Username used to access the destination URL (required for BASIC_AUTH). */
  userName?: string;
  /** Password used to access the destination URL (required for BASIC_AUTH). */
  password?: string;
  /**
   * Header name used to pass the authorization value to the destination URL (for example,
   * Authorization).
   */
  authHeaderName?: string;
  /** OAuth server or token URL used when the authentication method is OAUTH. */
  authUrl?: string;
  /** Client secret used with the OAuth server (OAUTH) or as key material for HMAC. */
  clientSecret?: string;
  /** Client ID used with the OAuth server when the authentication method is OAUTH. */
  clientId?: string;
};

export const authDetailsSchema: Schema<AuthDetails> = s.object<AuthDetails>({
  authMethod: s.optional(s.string()),
  userName: s.optional(s.string()),
  password: s.optional(s.string()),
  authHeaderName: s.optional(s.string()),
  authUrl: s.optional(s.string()),
  clientSecret: s.optional(s.string()),
  clientId: s.optional(s.string()),
});
