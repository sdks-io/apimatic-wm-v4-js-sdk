import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locale2Schema, type Locale2 } from "./unions/locale2.js";

/** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
export type ItemFeedHeader = {
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  processMode?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  subset?: string;
  /**
   * mart for different markets is WALMART_US(for US), WALMART_CA(for CA), WALMART_MEXICO(for
   * mx).<br><b style='color:green;'>Market availability: US | CA | MX</b>
   */
  mart?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  sellingChannel?: string;
  /**
   * version for different markets is 1.1(for US), 1.01(for CA), 1.05(for MX).<br><b
   * style='color:green;'>Market availability: US | CA | MX</b>
   */
  version?: string;
  /**
   * Locale for different markets is: 'en' (for US), 'es' (for MX), ['en','fr'] (for CA).<br><b
   * style='color:green;'>Market availability: US | CA | MX</b>
   */
  locale?: Locale2;
  /** <br><b style='color:green;'>Market availability: MX</b> */
  subCategory?: string;
};

export const itemFeedHeaderSchema: Schema<ItemFeedHeader> = s.object<ItemFeedHeader>({
  processMode: s.optional(s.string()),
  subset: s.optional(s.string()),
  mart: s.optional(s.string()),
  sellingChannel: s.optional(s.string()),
  version: s.optional(s.string()),
  locale: s.optional(s.lazy(() => locale2Schema)),
  subCategory: s.optional(s.string()),
});
