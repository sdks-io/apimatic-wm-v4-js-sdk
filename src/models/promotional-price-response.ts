import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { header1Schema, type Header1 } from "./header1.js";
import { itemPriceTypeSchema, type ItemPriceType } from "./item-price-type.js";

export type PromotionalPriceResponse = {
  payload?: ItemPriceType;
  header?: Header1;
  status?: string;
};

export const promotionalPriceResponseSchema: Schema<PromotionalPriceResponse> =
  s.object<PromotionalPriceResponse>({
    payload: s.optional(s.lazy(() => itemPriceTypeSchema)),
    header: s.optional(s.lazy(() => header1Schema)),
    status: s.optional(s.string()),
  });
