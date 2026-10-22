import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * <br><b style='color:green;'>Market availability: US</b>, Item Identifier which needs to be
 * migrated., Item Identifier which needs to be migrated. <br><b style='color:green;'>Market
 * availability: US</span></b>
 */
export type ItemIdentifiers = {
  /** <br><b style='color:green;'>Market availability: US</b> */
  sku?: string;
};

export const itemIdentifiersSchema: Schema<ItemIdentifiers> = s.object<ItemIdentifiers>({
  sku: s.optional(s.string()),
});
