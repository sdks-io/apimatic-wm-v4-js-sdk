import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inputQty13Schema, type InputQty13 } from "./input-qty13.js";

export type Node10 = {
  /**
   * Specifies the unique identifier of the ship node for which the inventory is requested.
   *
   * <strong style="color: green;">Market availability: Global</strong>
   */
  shipNode: string;
  /**
   * Indicates the quantity that has been ordered by the customers but not yet shipped.
   *
   * <strong style="color: green;">Market availability: Global</strong>
   */
  inputQty: InputQty13;
  /**
   * Specifies the date when the inventory will be available at a ship node. The date format is
   * YYYY-MM-DD.
   *
   * <strong style="color: green;">Market availability: US only</strong>
   */
  inventoryAvailableDate?: string;
};

export const node10Schema: Schema<Node10> = s.object<Node10>({
  shipNode: s.string(),
  inputQty: inputQty13Schema,
  inventoryAvailableDate: s.optional(s.string()),
});
