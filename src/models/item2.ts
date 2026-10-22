import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemWeightSchema, type ItemWeight } from "./item-weight.js";

/**
 * An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item.<br><b
 * style='color:green;'>Market availability: Global</b>
 */
export type Item2 = {
  /**
   * Information about the condition of the product.<br><b style='color:green;'>Market availability:
   * US</b>
   */
  condition?: string;
  /** The offerId associated.<br><b style='color:green;'>Market availability: MX | CA</b> */
  offerId?: string;
  /**
   * The name of the product associated with the line item.<br><b style='color:green;'>Market
   * availability: Global</b>
   */
  productName?: string;
  /**
   * An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. This
   * will be used by the seller in the XSD file to refer to each item. Special characters hyphen
   * (-), space ( ), and period (.) are not allowed.
   *
   * .<b style='color:green;'>Market availability: MX | CA</b>
   */
  sku?: string;
  /** itemWeight.<br><b style='color:green;'>Market availability: US</b> */
  itemWeight?: ItemWeight;
};

export const item2Schema: Schema<Item2> = s.object<Item2>({
  condition: s.optional(s.string()),
  offerId: s.optional(s.string()),
  productName: s.optional(s.string()),
  sku: s.optional(s.string()),
  itemWeight: s.optional(s.lazy(() => itemWeightSchema)),
});
