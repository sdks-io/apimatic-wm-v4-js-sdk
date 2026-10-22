import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Array of return lines.<br><b style='color:green;'>Market availability: US</b> */
export type ReturnLine = {
  /** Identifier of the return label.<br><b style='color:green;'>Market availability: US</b> */
  returnOrderLineNumber?: number;
};

export const returnLineSchema: Schema<ReturnLine> = s.object<ReturnLine>({
  returnOrderLineNumber: s.optional(s.int()),
});
