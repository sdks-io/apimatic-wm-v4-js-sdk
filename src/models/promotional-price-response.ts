import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { headerSchema, type Header } from "./header.js";
import { itemPriceTypeSchema, type ItemPriceType } from "./item-price-type.js";

export type PromotionalPriceResponse = {
  payload?: ItemPriceType;
  header?: Header;
  status?: string;
};

export const promotionalPriceResponseSchema: Schema<PromotionalPriceResponse> =
  s.object<PromotionalPriceResponse>({
    payload: s.optional(s.lazy(() => itemPriceTypeSchema)),
    header: s.optional(s.lazy(() => headerSchema)),
    status: s.optional(s.string()),
  });
