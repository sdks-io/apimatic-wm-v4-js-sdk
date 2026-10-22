import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemFeedHeaderSchema, type ItemFeedHeader } from "./item-feed-header.js";
import { item11Schema, type Item11 } from "./item11.js";

export type V3RepricerFeedsRequest = {
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  itemFeedHeader?: ItemFeedHeader;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  item?: Item11[];
};

export const v3RepricerFeedsRequestSchema: Schema<V3RepricerFeedsRequest> = s.object<V3RepricerFeedsRequest>({
  itemFeedHeader: s.optional(s.lazy(() => itemFeedHeaderSchema)),
  item: s.optional(s.array(s.lazy(() => item11Schema))),
  _keysMap: {
    itemFeedHeader: "ItemFeedHeader",
    item: "Item",
  },
});
