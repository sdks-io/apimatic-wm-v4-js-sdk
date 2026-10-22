import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** item.<br><b style='color:green;'>Market availability: MX</b> */
export type Item12 = {
  /** productName.<br><b style='color:green;'>Market availability: MX</b> */
  productName?: string;
};

export const item12Schema: Schema<Item12> = s.object<Item12>({
  productName: s.optional(s.string()),
});
