import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { variantSchema, type Variant } from "./variant.js";

export type ItemImage = {
  variant?: Variant;
  link?: string;
  height?: number;
  width?: number;
};

export const itemImageSchema: Schema<ItemImage> = s.object<ItemImage>({
  variant: s.optional(s.lazy(() => variantSchema)),
  link: s.optional(s.string()),
  height: s.optional(s.int()),
  width: s.optional(s.int()),
});
