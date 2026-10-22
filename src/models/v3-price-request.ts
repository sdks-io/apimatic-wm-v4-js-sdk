import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mpItemFeedHeader1Schema, type MpItemFeedHeader1 } from "./mp-item-feed-header1.js";
import { mpItemSchema, type MpItem } from "./mp-item.js";

export type V3PriceRequest = {
  /** <br><b style='color:green;'>Market availability: CA | MX | CL</b> */
  mpItemFeedHeader?: MpItemFeedHeader1;
  mpItem?: MpItem[];
};

export const v3PriceRequestSchema: Schema<V3PriceRequest> = s.object<V3PriceRequest>({
  mpItemFeedHeader: s.optional(s.lazy(() => mpItemFeedHeader1Schema)),
  mpItem: s.optional(s.array(s.lazy(() => mpItemSchema))),
  _keysMap: {
    mpItemFeedHeader: "MPItemFeedHeader",
    mpItem: "MPItem",
  },
});
