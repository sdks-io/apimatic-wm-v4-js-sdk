import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { maxUnitValue9Schema, type MaxUnitValue9 } from "./max-unit-value9.js";
import { maxValue9Schema, type MaxValue9 } from "./max-value9.js";
import { minUnitValue9Schema, type MinUnitValue9 } from "./min-unit-value9.js";
import { minValue9Schema, type MinValue9 } from "./min-value9.js";
import { perUnitValue9Schema, type PerUnitValue9 } from "./per-unit-value9.js";
import { value9Schema, type Value9 } from "./value9.js";

/** <br><b style='color:green;'>Market availability: Global</b> */
export type CurrentPrice7 = {
  /** <br><b style='color:green;'>Market availability: Global</b> */
  value?: Value9;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  uomType?: string;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  minValue?: MinValue9;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  maxValue?: MaxValue9;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  perUnitValue?: PerUnitValue9;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  minUnitValue?: MinUnitValue9;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  maxUnitValue?: MaxUnitValue9;
};

export const currentPrice7Schema: Schema<CurrentPrice7> = s.object<CurrentPrice7>({
  value: s.optional(s.lazy(() => value9Schema)),
  uomType: s.optional(s.string()),
  minValue: s.optional(s.lazy(() => minValue9Schema)),
  maxValue: s.optional(s.lazy(() => maxValue9Schema)),
  perUnitValue: s.optional(s.lazy(() => perUnitValue9Schema)),
  minUnitValue: s.optional(s.lazy(() => minUnitValue9Schema)),
  maxUnitValue: s.optional(s.lazy(() => maxUnitValue9Schema)),
});
