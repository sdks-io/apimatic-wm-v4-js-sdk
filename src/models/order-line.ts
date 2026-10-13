import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fulfillmentOptionSchema, type FulfillmentOption } from "./fulfillment-option.js";
import { lineStatusSchema, type LineStatus } from "./line-status.js";
import { moneySchema, type Money } from "./money.js";
import { quantityWithUnitSchema, type QuantityWithUnit } from "./quantity-with-unit.js";

export type OrderLine = {
  lineNumber: string;
  sellerSku: string;
  walmartItemId?: string;
  productName?: string;
  quantity: QuantityWithUnit;
  itemPrice: Money;
  lineStatus?: LineStatus;
  /** Walmart Ship Node identifier for WFS orders */
  shipNode?: string;
  fulfillmentOption?: FulfillmentOption;
};

export const orderLineSchema: Schema<OrderLine> = s.object<OrderLine>({
  lineNumber: s.string(),
  sellerSku: s.string(),
  walmartItemId: s.optional(s.string()),
  productName: s.optional(s.string()),
  quantity: quantityWithUnitSchema,
  itemPrice: moneySchema,
  lineStatus: s.optional(s.lazy(() => lineStatusSchema)),
  shipNode: s.optional(s.string()),
  fulfillmentOption: s.optional(s.lazy(() => fulfillmentOptionSchema)),
});
