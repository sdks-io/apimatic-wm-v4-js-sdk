import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { parameter2Schema, type Parameter2 } from "./parameter2.js";

/**
 * Filter based on a range with RangeFilter. You must also pass a parameter along with any of the
 * beginning or the ending points or both. No parameter should be repeated.
 */
export type RangeFilter3 = {
  /**
   * To apply a range filter based on the predefined parameter.
   *
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | PRICE | To filter based on the price. | string |
   */
  parameter?: Parameter2;
  /** Filter range start <br><b style='color:green;'>Market availability: US | CA | MX</span></b> */
  from?: string;
  /** Filter range end <br><b style='color:green;'>Market availability: US | CA | MX</span></b> */
  to?: string;
};

export const rangeFilter3Schema: Schema<RangeFilter3> = s.object<RangeFilter3>({
  parameter: s.optional(s.lazy(() => parameter2Schema)),
  from: s.optional(s.string()),
  to: s.optional(s.string()),
});
