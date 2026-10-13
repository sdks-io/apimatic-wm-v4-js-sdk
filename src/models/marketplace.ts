import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Marketplace = {
  /** Marketplace tenant token (see docs/marketplace-ids.md). */
  id?: string;
  name?: string;
  countryCode?: string;
  currencyCode?: string;
  defaultLanguageCode?: string;
};

export const marketplaceSchema: Schema<Marketplace> = s.object<Marketplace>({
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  countryCode: s.optional(s.string()),
  currencyCode: s.optional(s.string()),
  defaultLanguageCode: s.optional(s.string()),
});
