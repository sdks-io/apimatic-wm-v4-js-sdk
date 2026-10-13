import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { item1Schema, type Item1 } from "./item1.js";
import { paginationSchema, type Pagination } from "./pagination.js";

export type ItemSearchResults1 = {
  /** Total number of matching listings items */
  numberOfResults: number;
  pagination?: Pagination;
  items: Item1[];
};

export const itemSearchResults1Schema: Schema<ItemSearchResults1> = s.object<ItemSearchResults1>({
  numberOfResults: s.int(),
  pagination: s.optional(s.lazy(() => paginationSchema)),
  items: s.array(s.lazy(() => item1Schema)),
});
