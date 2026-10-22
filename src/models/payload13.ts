import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemIdentifiersSchema, type ItemIdentifiers } from "./item-identifiers.js";

export type Payload13 = {
  itemIdentifier?: ItemIdentifiers;
  maxSalesRetailPrice?: string | null;
  minAdvtPrice?: string | null;
  rebate?: string | null;
};

export const payload13Schema: Schema<Payload13> = s.object<Payload13>({
  itemIdentifier: s.optional(s.lazy(() => itemIdentifiersSchema)),
  maxSalesRetailPrice: s.optionalNullable(s.string()),
  minAdvtPrice: s.optionalNullable(s.string()),
  rebate: s.optionalNullable(s.string()),
});
