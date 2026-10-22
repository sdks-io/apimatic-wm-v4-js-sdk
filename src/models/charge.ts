import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chargePerUnitSchema, type ChargePerUnit } from "./charge-per-unit.js";
import { taxSchema, type Tax } from "./tax.js";
import { variantInfoSchema, type VariantInfo } from "./variant-info.js";

export type Charge = {
  /**
   * The category type. (e.g., 'PRODUCT' or 'FEE').<br><b style='color:green;'>Market
   * availability:US</b>
   */
  chargeCategory?: string;
  /**
   * The category type. (e.g., 'PRODUCT' or 'FEE').<br><b style='color:green;'>Market availability:
   * MX | CA | CL</b>
   */
  chargeType?: string;
  /**
   * If chargeType is PRODUCT, chargeName is Item Price. If chargeType is SHIPPING, chargeName is
   * Shipping.<br><b style='color:green;'>Market availability: US | MX</b>
   */
  chargeName?: string;
  /**
   * Price of One unit of item, in this order line.<br><b style='color:green;'>Market
   * availability:US</b>
   */
  chargePerUnit?: ChargePerUnit;
  /**
   * Is this charge a discount, which then needs to be subtracted from the refund.<br><b
   * style='color:green;'>Market availability: US</b>
   */
  isDiscount?: boolean;
  /**
   * Should this charge be included in the refund computation.<br><b style='color:green;'>Market
   * availability: US</b>
   */
  isBillable?: boolean;
  /** Taxes for each charge.<br><b style='color:green;'>Market availability: US | MX</b> */
  tax?: Tax[];
  /** Used only for 1P.<br><b style='color:green;'>Market availability: US | MX</b> */
  references?: VariantInfo[];
};

export const chargeSchema: Schema<Charge> = s.object<Charge>({
  chargeCategory: s.optional(s.string()),
  chargeType: s.optional(s.string()),
  chargeName: s.optional(s.string()),
  chargePerUnit: s.optional(s.lazy(() => chargePerUnitSchema)),
  isDiscount: s.optional(s.boolean()),
  isBillable: s.optional(s.boolean()),
  tax: s.optional(s.array(s.lazy(() => taxSchema))),
  references: s.optional(s.array(s.lazy(() => variantInfoSchema))),
});
