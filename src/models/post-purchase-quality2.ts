import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Post Purchase Quality<br><b style='color:green;'>Market availability: US | CA | MX</b> */
export type PostPurchaseQuality2 = {
  /** Defect Ratio<br><b style='color:green;'>Market availability: US | CA | MX</b> */
  defectRatio?: number;
  /** Item Defect Count<br><b style='color:green;'>Market availability: US | CA | MX</b> */
  itemDefectCnt?: number;
};

export const postPurchaseQuality2Schema: Schema<PostPurchaseQuality2> = s.object<PostPurchaseQuality2>({
  defectRatio: s.optional(s.int()),
  itemDefectCnt: s.optional(s.int()),
});
