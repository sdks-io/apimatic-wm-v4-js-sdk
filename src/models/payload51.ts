import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemStatus10Schema, type ItemStatus10 } from "./item-status10.js";

/** Response payload. */
export type Payload51 = {
  /** IRP status of the items.<br><b style='color:green;'>Market availability: US only</b> */
  itemStatus?: ItemStatus10;
  /**
   * The Category of the items in requested item status.<br><b style='color:green;'>Market
   * availability: US only</b>
   */
  categories?: string[];
};

export const payload51Schema: Schema<Payload51> = s.object<Payload51>({
  itemStatus: s.optional(s.lazy(() => itemStatus10Schema)),
  categories: s.optional(s.array(s.string())),
});
