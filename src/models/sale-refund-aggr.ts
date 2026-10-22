import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SaleRefundAggr = {
  productPrice?: number;
  shipping?: number;
  netTaxCollected?: number;
  productTaxCollected?: number;
  shippingTaxCollected?: number;
  netTaxWithheld?: number;
  productTaxWithheld?: number;
  shippingTaxWithheld?: number;
  netFeeCollected?: number;
  netFeeWithheld?: number;
  netComm?: number;
  netPayable?: number;
  aboveCap?: number;
  wfsShipping?: number;
  wfsShipppingTax?: number;
  totalBaseCommission?: number;
  commissionSavings?: number;
};

export const saleRefundAggrSchema: Schema<SaleRefundAggr> = s.object<SaleRefundAggr>({
  productPrice: s.optional(s.float64()),
  shipping: s.optional(s.float64()),
  netTaxCollected: s.optional(s.float64()),
  productTaxCollected: s.optional(s.float64()),
  shippingTaxCollected: s.optional(s.float64()),
  netTaxWithheld: s.optional(s.float64()),
  productTaxWithheld: s.optional(s.float64()),
  shippingTaxWithheld: s.optional(s.float64()),
  netFeeCollected: s.optional(s.float64()),
  netFeeWithheld: s.optional(s.float64()),
  netComm: s.optional(s.float64()),
  netPayable: s.optional(s.float64()),
  aboveCap: s.optional(s.float64()),
  wfsShipping: s.optional(s.float64()),
  wfsShipppingTax: s.optional(s.float64()),
  totalBaseCommission: s.optional(s.float64()),
  commissionSavings: s.optional(s.float64()),
});
