import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rebateAmt3Schema, type RebateAmt3 } from "./rebate-amt3.js";
import { rebateType3Schema, type RebateType3 } from "./rebate-type3.js";

/** <br><b style='color:green;'>Market availability: Global</b> */
export type Rebate2 = {
  /** <br><b style='color:green;'>Market availability: Global</b> */
  rebateAmt: RebateAmt3;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  infoUrl?: string;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  rebateType?: RebateType3;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  startDate?: Date;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  endDate?: Date;
};

export const rebate2Schema: Schema<Rebate2> = s.object<Rebate2>({
  rebateAmt: rebateAmt3Schema,
  infoUrl: s.optional(s.string()),
  rebateType: s.optional(s.lazy(() => rebateType3Schema)),
  startDate: s.optional(s.dateTime()),
  endDate: s.optional(s.dateTime()),
});
