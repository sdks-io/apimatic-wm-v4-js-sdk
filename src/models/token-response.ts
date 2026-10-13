import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TokenResponse = {
  /** Opaque Bearer access token. Treat as a secret; never log. */
  accessToken: string;
  /** Always `Bearer` (RFC 6750). @default "Bearer" */
  tokenType?: "Bearer";
  /** Access-token lifetime in seconds (≈900 today). */
  expiresIn: number;
  /**
   * Rotated refresh token — replaces the one presented (OAuth 2.1 §4.3.1). Present only on
   * delegated grants when `offline_access` was granted. Treat as a secret; never log.
   */
  refreshToken?: string;
  /**
   * Space-delimited granted scopes; present on delegated grants when narrowed from the original
   * grant.
   */
  scope?: string;
};

export const tokenResponseSchema: Schema<TokenResponse> = s.object<TokenResponse>({
  accessToken: s.string(),
  tokenType: s.defaulted(s.literal("Bearer"), "Bearer"),
  expiresIn: s.int(),
  refreshToken: s.optional(s.string()),
  scope: s.optional(s.string()),
  _keysMap: {
    accessToken: "access_token",
    tokenType: "token_type",
    expiresIn: "expires_in",
    refreshToken: "refresh_token",
  },
});
