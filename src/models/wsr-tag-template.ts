import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pageTypeSchema, type PageType } from "./page-type.js";

/** A tag template containing URL pattern with placeholders for affiliate tracking. */
export type WsrTagTemplate = {
  /**
   * The type of page this template is for (For example, `ITEM`, `BRANDSHOP`).
   *
   * <span style="color:green">**Market availability: Global**</span>
   */
  pageType: PageType;
  /**
   * The URL template with placeholders. Placeholders include `{insertCampaignId}`,
   * `{insertAdGroupId}`, `{insertCreativeId}`, `{insertItemId}`, and `{insertBrandshopId}` which
   * should be replaced with actual values when constructing the final referral URL.
   *
   * <span style="color:green">**Market availability: Global**</span>
   */
  template: string;
};

export const wsrTagTemplateSchema: Schema<WsrTagTemplate> = s.object<WsrTagTemplate>({
  pageType: pageTypeSchema,
  template: s.string(),
});
