import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SalesRank = {
  categoryId?: string;
  rank?: number;
  categoryName?: string;
  link?: string;
};

export const salesRankSchema: Schema<SalesRank> = s.object<SalesRank>({
  categoryId: s.optional(s.string()),
  rank: s.optional(s.int()),
  categoryName: s.optional(s.string()),
  link: s.optional(s.string()),
});
