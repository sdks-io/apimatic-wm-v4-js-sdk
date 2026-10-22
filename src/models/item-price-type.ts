import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionalAttributes1Schema, type AdditionalAttributes1 } from "./additional-attributes1.js";
import { itemIdentifierTypeSchema, type ItemIdentifierType } from "./item-identifier-type.js";
import { moneyTypeSchema, type MoneyType } from "./money-type.js";
import { pricingListTypeSchema, type PricingListType } from "./pricing-list-type.js";
import { rebateSchema, type Rebate } from "./rebate.js";

export type ItemPriceType = {
  itemIdentifier: ItemIdentifierType;
  pricingList: PricingListType;
  maxSalesRetailPrice?: MoneyType;
  minAdvtPrice?: MoneyType;
  rebate?: Rebate;
  additionalAttributes?: AdditionalAttributes1;
};

export const itemPriceTypeSchema: Schema<ItemPriceType> = s.object<ItemPriceType>({
  itemIdentifier: itemIdentifierTypeSchema,
  pricingList: pricingListTypeSchema,
  maxSalesRetailPrice: s.optional(s.lazy(() => moneyTypeSchema)),
  minAdvtPrice: s.optional(s.lazy(() => moneyTypeSchema)),
  rebate: s.optional(s.lazy(() => rebateSchema)),
  additionalAttributes: s.optional(s.lazy(() => additionalAttributes1Schema)),
});
