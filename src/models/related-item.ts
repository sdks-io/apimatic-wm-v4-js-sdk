import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RelatedItem = {
  walmartItemId?: string;
};

export const relatedItemSchema: Schema<RelatedItem> = s.object<RelatedItem>({
  walmartItemId: s.optional(s.string()),
});
