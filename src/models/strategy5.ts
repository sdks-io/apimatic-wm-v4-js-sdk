import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
export type Strategy5 = {
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  sku?: string;
  /**
   * Specifies the name of the strategy collection. This value is used to group and manage related
   * repricing strategies.<br><b style='color:green;'>Market availability: US | CA | MX</b>
   */
  repricerStrategy?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  minimumSellerAllowedPrice?: number;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  maximumSellerAllowedPrice?: number;
};

export const strategy5Schema: Schema<Strategy5> = s.object<Strategy5>({
  sku: s.optional(s.string()),
  repricerStrategy: s.optional(s.string()),
  minimumSellerAllowedPrice: s.optional(s.float64()),
  maximumSellerAllowedPrice: s.optional(s.float64()),
});
