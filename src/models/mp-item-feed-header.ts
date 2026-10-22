import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { localeSchema, type Locale } from "./unions/locale.js";

/** <br><b style='color:green;'>Market availability: Global</b> */
export type MpItemFeedHeader = {
  /**
   * Business unit identifier matching the target market. For example, use WALMART_US for the US
   * market.<br><b style='color:green;'>Market availability: US</b>
   */
  businessUnit: string;
  /**
   * ItemFeed subcategory for price update.<br><b style='color:green;'>Market availability: CA | MX
   * | CL</b>
   */
  subCategory: string;
  /**
   * The mart ID for the various markets are WALMART_CA for CA, WALMART_MEXICO for MX, and
   * WALMART_CHILE for CL..<br><b style='color:green;'>Market availability: CA | MX | CL</b>
   */
  mart: string;
  /**
   * The type of feed for this request.<br><b style='color:green;'>Market availability: CA | MX |
   * CL</b>
   */
  feedType: string;
  /**
   * The feed processing behavior. Use REPLACE to overwrite existing values.<br><b
   * style='color:green;'>Market availability: CA | MX | CL</b>
   */
  processMode?: string;
  /**
   * The market specific locale. Allowed values by market include: en for US, es for MX and CL, and
   * en and fr for CA.<br><b style='color:green;'>Market availability: Global</b>
   */
  locale: Locale;
  /**
   * The feed schema version. The values vary by region. 2.0.20240126-12_25_52-api for US,
   * 5.0.20250801-18_47_55 for CA, MX and CL.<br><b style='color:green;'>Market availability:
   * Global</b>
   */
  version: string;
  /**
   * Origin of the data. Use External for partner submitted feeds.<br><b style='color:green;'>Market
   * availability: CA | MX | CL</b>
   */
  subset: string;
  /**
   * The tenant identifier for the marketplace. For example, use WALMART_CA for CA, WALMART_MEXICO
   * for MX, and WALMART_CHILE for CL.<br><b style='color:green;'>Market availability: CA | MX |
   * CL</b>
   */
  tenant: string;
};

export const mpItemFeedHeaderSchema: Schema<MpItemFeedHeader> = s.object<MpItemFeedHeader>({
  businessUnit: s.string(),
  subCategory: s.string(),
  mart: s.string(),
  feedType: s.string(),
  processMode: s.optional(s.string()),
  locale: localeSchema,
  version: s.string(),
  subset: s.string(),
  tenant: s.string(),
});
