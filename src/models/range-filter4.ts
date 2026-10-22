import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { parameter21Schema, type Parameter21 } from "./parameter21.js";

/**
 * Filter based on a range with RangeFilter. You must also pass a parameter along with any of the
 * beginning or the ending points or both. No parameter should be repeated. <br><b
 * style='color:green;'>Market availability: US | CA | MX</span></b>
 */
export type RangeFilter4 = {
  /**
   * To apply a range filter based on the predefined parameter. <br><b style='color:green;'>Market
   * availability: US | CA | MX</span></b>
   *
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | PRICE | To filter based on the price. | string |
   */
  parameter?: Parameter21;
  /** Filter range start <br><b style='color:green;'>Market availability: US | CA | MX</span></b> */
  from?: string;
  /** Filter range end <br><b style='color:green;'>Market availability: US | CA | MX</span></b> */
  to?: string;
};

export const rangeFilter4Schema: Schema<RangeFilter4> = s.object<RangeFilter4>({
  parameter: s.optional(s.lazy(() => parameter21Schema)),
  from: s.optional(s.string()),
  to: s.optional(s.string()),
});
