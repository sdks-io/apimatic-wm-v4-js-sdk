import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mpItemFeedHeaderSchema, type MpItemFeedHeader } from "./mp-item-feed-header.js";
import { mpItem111Schema, type MpItem111 } from "./unions/mp-item111.js";

export type V3FeedsFeedTypePriceAndPromotionRequest1 = {
  /** <br><b style='color:green;'>Market availability: Global</b> */
  mpItemFeedHeader?: MpItemFeedHeader;
  mpItem?: MpItem111;
};

export const v3FeedsFeedTypePriceAndPromotionRequest1Schema: Schema<V3FeedsFeedTypePriceAndPromotionRequest1> =
  s.object<V3FeedsFeedTypePriceAndPromotionRequest1>({
    mpItemFeedHeader: s.optional(s.lazy(() => mpItemFeedHeaderSchema)),
    mpItem: s.optional(s.lazy(() => mpItem111Schema)),
    _keysMap: {
      mpItemFeedHeader: "MPItemFeedHeader",
      mpItem: "MPItem",
    },
  });
