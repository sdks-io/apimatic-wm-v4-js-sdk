import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Originating source of the rich media asset. Possible values: `MARKETPLACE_PARTNER`, `SELLER_API`
 */
export const Source = {
  MarketplacePartner: "MARKETPLACE_PARTNER",
  SellerApi: "SELLER_API",
} as const;
export type Source = (typeof Source)[keyof typeof Source] | (string & {});

export const sourceSchema: EnumSchema<Source> = s.enumOf<Source>(Source);
