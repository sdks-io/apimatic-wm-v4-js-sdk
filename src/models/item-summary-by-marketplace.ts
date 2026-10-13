import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conditionTypeSchema, type ConditionType } from "./condition-type.js";
import { itemImage1Schema, type ItemImage1 } from "./item-image1.js";
import { statusSchema, type Status } from "./status.js";

export type ItemSummaryByMarketplace = {
  marketplaceId?: string;
  walmartItemId?: string;
  productType?: string;
  conditionType?: ConditionType;
  status?: Status;
  itemName?: string;
  createdDate?: Date;
  lastUpdatedDate?: Date;
  mainImage?: ItemImage1;
};

export const itemSummaryByMarketplaceSchema: Schema<ItemSummaryByMarketplace> =
  s.object<ItemSummaryByMarketplace>({
    marketplaceId: s.optional(s.string()),
    walmartItemId: s.optional(s.string()),
    productType: s.optional(s.string()),
    conditionType: s.optional(s.lazy(() => conditionTypeSchema)),
    status: s.optional(s.lazy(() => statusSchema)),
    itemName: s.optional(s.string()),
    createdDate: s.optional(s.dateTime()),
    lastUpdatedDate: s.optional(s.dateTime()),
    mainImage: s.optional(s.lazy(() => itemImage1Schema)),
  });
