import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { labelSchema, type Label } from "./label.js";
import { returnLineSchema, type ReturnLine } from "./return-line.js";

export type ReturnLineGroup = {
  /**
   * Sequence of group numbers where each returnLineGroups will represent one or more return
   * lines.<br><b style='color:green;'>Market availability: US</b>
   */
  groupNo?: number;
  /** Array of return lines.<br><b style='color:green;'>Market availability: US</b> */
  returnLines?: ReturnLine[];
  /** Array of labels.<br><b style='color:green;'>Market availability: US</b> */
  labels?: Label[];
  /**
   * Is customer required to send this item back to return center.<br><b style='color:green;'>Market
   * availability: US</b>
   */
  returnExpectedFlag?: boolean;
};

export const returnLineGroupSchema: Schema<ReturnLineGroup> = s.object<ReturnLineGroup>({
  groupNo: s.optional(s.int()),
  returnLines: s.optional(s.array(s.lazy(() => returnLineSchema))),
  labels: s.optional(s.array(s.lazy(() => labelSchema))),
  returnExpectedFlag: s.optional(s.boolean()),
});
