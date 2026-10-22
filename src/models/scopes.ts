import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contentSchema, type Content } from "./content.js";
import { feedsSchema, type Feeds } from "./feeds.js";
import { inventorySchema, type Inventory } from "./inventory.js";
import { itemSchema, type Item } from "./item.js";
import { lagtimeSchema, type Lagtime } from "./lagtime.js";
import { ordersSchema, type Orders } from "./orders.js";
import { priceSchema, type Price } from "./price.js";
import { reportsSchema, type Reports } from "./reports.js";
import { returnsSchema, type Returns } from "./returns.js";
import { rulesSchema, type Rules } from "./rules.js";
import { shippingSchema, type Shipping } from "./shipping.js";

/** The API categories with their corresponding access levels */
export type Scopes = {
  reports?: Reports;
  item?: Item;
  shipping?: Shipping;
  price?: Price;
  lagtime?: Lagtime;
  feeds?: Feeds;
  returns?: Returns;
  orders?: Orders;
  rules?: Rules;
  inventory?: Inventory;
  content?: Content;
};

export const scopesSchema: Schema<Scopes> = s.object<Scopes>({
  reports: s.optional(s.lazy(() => reportsSchema)),
  item: s.optional(s.lazy(() => itemSchema)),
  shipping: s.optional(s.lazy(() => shippingSchema)),
  price: s.optional(s.lazy(() => priceSchema)),
  lagtime: s.optional(s.lazy(() => lagtimeSchema)),
  feeds: s.optional(s.lazy(() => feedsSchema)),
  returns: s.optional(s.lazy(() => returnsSchema)),
  orders: s.optional(s.lazy(() => ordersSchema)),
  rules: s.optional(s.lazy(() => rulesSchema)),
  inventory: s.optional(s.lazy(() => inventorySchema)),
  content: s.optional(s.lazy(() => contentSchema)),
});
