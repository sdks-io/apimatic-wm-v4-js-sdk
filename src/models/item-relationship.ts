import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { relatedItemSchema, type RelatedItem } from "./related-item.js";
import { typeSchema, type Type } from "./type.js";
import { variationThemeSchema, type VariationTheme } from "./variation-theme.js";

export type ItemRelationship = {
  type?: Type;
  childItems?: RelatedItem[];
  parentItems?: RelatedItem[];
  variationTheme?: VariationTheme;
};

export const itemRelationshipSchema: Schema<ItemRelationship> = s.object<ItemRelationship>({
  type: s.optional(s.lazy(() => typeSchema)),
  childItems: s.optional(s.array(s.lazy(() => relatedItemSchema))),
  parentItems: s.optional(s.array(s.lazy(() => relatedItemSchema))),
  variationTheme: s.optional(s.lazy(() => variationThemeSchema)),
});
