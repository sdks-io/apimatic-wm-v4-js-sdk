import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Post Purchase Quality */
export type PostPurchaseQuality = {
  /** Defect Ratio */
  defectRatio?: number;
  /** Item Defect Count */
  itemDefectCnt?: number;
};

export const postPurchaseQualitySchema: Schema<PostPurchaseQuality> = s.object<PostPurchaseQuality>({
  defectRatio: s.optional(s.int()),
  itemDefectCnt: s.optional(s.int()),
});
