import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Pagination1 = {
  paginationToken?: string;
};

export const pagination1Schema: Schema<Pagination1> = s.object<Pagination1>({
  paginationToken: s.optional(s.string()),
});
