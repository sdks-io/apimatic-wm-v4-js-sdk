import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Sales rank information for the item, by category. */
export type SalesRankType = {
  /** Identifies the item category from which the sales rank is taken. */
  productCategoryId: string;
  /** The sales rank of the item within the item category. */
  rank: number;
};

export const salesRankTypeSchema: Schema<SalesRankType> = s.object<SalesRankType>({
  productCategoryId: s.string(),
  rank: s.int(),
  _keysMap: {
    productCategoryId: "ProductCategoryId",
    rank: "Rank",
  },
});
