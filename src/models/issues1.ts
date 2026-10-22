import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Items status included in the response list. */
export type Issues1 = {
  /**
   * The unique Product ID assigned to the item.
   *
   * <strong style="color: green;">**Market availability: US only**</strong>
   */
  productId?: string;
  /**
   * The Product ID type of the item.
   *
   * <strong style="color: green;">**Market availability: US only**</strong>
   */
  productIdType?: string;
};

export const issues1Schema: Schema<Issues1> = s.object<Issues1>({
  productId: s.optional(s.string()),
  productIdType: s.optional(s.string()),
});
