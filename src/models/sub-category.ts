import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Rich media sub-category that determines the required Visible block. Allowed values: `video`,
 * `360_spin_image`.
 */
export const SubCategory = {
  Video: "video",
  _360SpinImage: "360_spin_image",
} as const;
export type SubCategory = (typeof SubCategory)[keyof typeof SubCategory] | (string & {});

export const subCategorySchema: EnumSchema<SubCategory> = s.enumOf<SubCategory>(SubCategory);
