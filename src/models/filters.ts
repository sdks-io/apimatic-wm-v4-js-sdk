import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rowFilterSchema, type RowFilter } from "./row-filter.js";

export type Filters = {
  email?: string;
  rowFilters?: RowFilter[];
};

export const filtersSchema: Schema<Filters> = s.object<Filters>({
  email: s.optional(s.string()),
  rowFilters: s.optional(s.array(s.lazy(() => rowFilterSchema))),
});
