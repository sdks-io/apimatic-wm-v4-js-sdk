import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pickupDiscountAmt5Schema, type PickupDiscountAmt5 } from "./pickup-discount-amt5.js";

/** <br><b style='color:green;'>Market availability: Global</b> */
export type PickupDiscount1 = {
  /** <br><b style='color:green;'>Market availability: Global</b> */
  isPickUpDiscountEligible?: boolean;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  pickupDiscountAmt?: PickupDiscountAmt5;
};

export const pickupDiscount1Schema: Schema<PickupDiscount1> = s.object<PickupDiscount1>({
  isPickUpDiscountEligible: s.optional(s.boolean()),
  pickupDiscountAmt: s.optional(s.lazy(() => pickupDiscountAmt5Schema)),
});
