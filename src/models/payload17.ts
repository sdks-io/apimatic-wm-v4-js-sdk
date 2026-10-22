import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { postPurchaseQuality2Schema, type PostPurchaseQuality2 } from "./post-purchase-quality2.js";
import { score2Schema, type Score2 } from "./score2.js";

export type Payload17 = {
  /**
   * Indicates the Listing Quality Score of a product listing.<br><b style='color:green;'>Market
   * availability: US | CA | MX</b>
   */
  listingQuality?: number;
  /** Score<br><b style='color:green;'>Market availability: US | CA | MX</b> */
  score?: Score2;
  /** Post Purchase Quality<br><b style='color:green;'>Market availability: US | CA | MX</b> */
  postPurchaseQuality?: PostPurchaseQuality2;
};

export const payload17Schema: Schema<Payload17> = s.object<Payload17>({
  listingQuality: s.optional(s.float64()),
  score: s.optional(s.lazy(() => score2Schema)),
  postPurchaseQuality: s.optional(s.lazy(() => postPurchaseQuality2Schema)),
});
