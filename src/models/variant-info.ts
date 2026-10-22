import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Variants information. */
export type VariantInfo = {
  /** Indicates the item attribute name for which variants are available. Example - color, size */
  name?: string;
  /**
   * Indicates the value of item attribute for which variants are available. Example - blue, small
   */
  value?: string;
};

export const variantInfoSchema: Schema<VariantInfo> = s.object<VariantInfo>({
  name: s.optional(s.string()),
  value: s.optional(s.string()),
});
