import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locale1Schema, type Locale1 } from "./unions/locale1.js";

/** <br><b style='color:green;'>Market availability: CA | MX | CL</b> */
export type MpItemFeedHeader1 = {
  /**
   * The mart ID for the various markets are WALMART_CA for CA, WALMART_MEXICO for MX, and
   * WALMART_CHILE for CL..<br><b style='color:green;'>Market availability: CA | MX | CL</b>
   */
  mart: string;
  /**
   * The market specific locale. Allowed values by market include: es for MX and CL, and en and fr
   * for CA.<br><b style='color:green;'>Market availability: Global</b>
   */
  locale: Locale1;
  /**
   * The feed schema version. The values is 5.0.20250801-18_47_55-api for CA, MX and CL.<br><b
   * style='color:green;'>Market availability: CA | MX | CL</b>
   */
  version: string;
  /**
   * Business unit identifier matching the target market. For example WALMART_CA for CA,
   * WALMART_MEXICO for MX, WALMART_CHILE for CL.<br><b style='color:green;'>Market availability: CA
   * | MX | CL</b>
   */
  businessUnit: string;
  /**
   * The tenant identifier for the marketplace. For example, use WALMART_CA for CA, WALMART_MEXICO
   * for MX, WALMART_CHILE for CL.<br><b style='color:green;'>Market availability: CA | MX | CL</b>
   */
  tenant: string;
};

export const mpItemFeedHeader1Schema: Schema<MpItemFeedHeader1> = s.object<MpItemFeedHeader1>({
  mart: s.string(),
  locale: locale1Schema,
  version: s.string(),
  businessUnit: s.string(),
  tenant: s.string(),
});
