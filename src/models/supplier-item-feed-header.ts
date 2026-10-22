import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subCategorySchema, type SubCategory } from "./sub-category.js";

/** Metadata header for the rich media feed. */
export type SupplierItemFeedHeader = {
  /** Feed type identifier. Allowed value: `OMNI_RICH_MEDIA`. @default "OMNI_RICH_MEDIA" */
  feedType?: "OMNI_RICH_MEDIA";
  /** Locale code for the feed content. */
  locale: string;
  /** Schema version string for the feed. */
  version: string;
  /**
   * Rich media sub-category that determines the required Visible block. Allowed values: `video`,
   * `360_spin_image`.
   */
  subCategory: SubCategory;
  /**
   * Subset that identifies the feed source or audience. Allowed value: `EXTERNAL`.
   *
   * @default "EXTERNAL"
   */
  subset?: "EXTERNAL";
};

export const supplierItemFeedHeaderSchema: Schema<SupplierItemFeedHeader> = s.object<SupplierItemFeedHeader>({
  feedType: s.defaulted(s.literal("OMNI_RICH_MEDIA"), "OMNI_RICH_MEDIA"),
  locale: s.string(),
  version: s.string(),
  subCategory: subCategorySchema,
  subset: s.defaulted(s.literal("EXTERNAL"), "EXTERNAL"),
});
