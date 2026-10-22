import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mpItemFeedHeaderSchema, type MpItemFeedHeader } from "./mp-item-feed-header.js";
import { mpItem11Schema, type MpItem11 } from "./unions/mp-item11.js";

export type V3FeedsFeedTypePriceAndPromotionRequest = {
  /** <br><b style='color:green;'>Market availability: Global</b> */
  mpItemFeedHeader?: MpItemFeedHeader;
  mpItem?: MpItem11;
};

export const v3FeedsFeedTypePriceAndPromotionRequestSchema: Schema<V3FeedsFeedTypePriceAndPromotionRequest> =
  s.object<V3FeedsFeedTypePriceAndPromotionRequest>({
    mpItemFeedHeader: s.optional(s.lazy(() => mpItemFeedHeaderSchema)),
    mpItem: s.optional(s.lazy(() => mpItem11Schema)),
    _keysMap: {
      mpItemFeedHeader: "MPItemFeedHeader",
      mpItem: "MPItem",
    },
  });
