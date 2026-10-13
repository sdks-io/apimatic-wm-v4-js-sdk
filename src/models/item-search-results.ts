import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemSchema, type Item } from "./item.js";
import { paginationSchema, type Pagination } from "./pagination.js";
import { refinementsSchema, type Refinements } from "./refinements.js";

export type ItemSearchResults = {
  /** Total number of matching catalog items */
  numberOfResults?: number;
  pagination?: Pagination;
  refinements?: Refinements;
  items?: Item[];
};

export const itemSearchResultsSchema: Schema<ItemSearchResults> = s.object<ItemSearchResults>({
  numberOfResults: s.optional(s.int()),
  pagination: s.optional(s.lazy(() => paginationSchema)),
  refinements: s.optional(s.lazy(() => refinementsSchema)),
  items: s.optional(s.array(s.lazy(() => itemSchema))),
});
