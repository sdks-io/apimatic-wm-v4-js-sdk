import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of page this template is for (For example, `ITEM`, `BRANDSHOP`).
 *
 * <span style="color:green">**Market availability: Global**</span>
 */
export const PageType = {
  Item: "ITEM",
  Brandshop: "BRANDSHOP",
} as const;
export type PageType = (typeof PageType)[keyof typeof PageType] | (string & {});

export const pageTypeSchema: EnumSchema<PageType> = s.enumOf<PageType>(PageType);
