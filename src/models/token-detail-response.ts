import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scopesSchema, type Scopes } from "./scopes.js";

export type TokenDetailResponse = {
  /** The API categories with their corresponding access levels */
  scopes: Scopes;
  /** The timestamp when the token expires @default "1560973098000" */
  expireAt?: string;
  /** The timestamp when the token is issued @default "1560973098000" */
  issuedAt?: string;
  /** Whether the token is valid; boolean value of true or false @default true */
  isValid?: boolean;
  /** Whether the keys Seller used are correctly associated @default true */
  isChannelMatch?: boolean;
};

export const tokenDetailResponseSchema: Schema<TokenDetailResponse> = s.object<TokenDetailResponse>({
  scopes: scopesSchema,
  expireAt: s.defaulted(s.string(), "1560973098000"),
  issuedAt: s.defaulted(s.string(), "1560973098000"),
  isValid: s.defaulted(s.boolean(), true),
  isChannelMatch: s.defaulted(s.boolean(), true),
  _keysMap: {
    expireAt: "expire_at",
    issuedAt: "issued_at",
    isValid: "is_valid",
    isChannelMatch: "is_channel_match",
  },
});
