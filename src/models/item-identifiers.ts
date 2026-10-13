import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemIdentifierSchema, type ItemIdentifier } from "./item-identifier.js";

export type ItemIdentifiers = {
  marketplaceWalmartItemId?: ItemIdentifier[];
  skuIdentifiers?: ItemIdentifier[];
};

export const itemIdentifiersSchema: Schema<ItemIdentifiers> = s.object<ItemIdentifiers>({
  marketplaceWalmartItemId: s.optional(s.array(s.lazy(() => itemIdentifierSchema))),
  skuIdentifiers: s.optional(s.array(s.lazy(() => itemIdentifierSchema))),
});
