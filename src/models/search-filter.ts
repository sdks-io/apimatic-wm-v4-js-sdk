import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { field7Schema, type Field7 } from "./field7.js";

export type SearchFilter = {
  fields?: Field7[];
  text?: string;
};

export const searchFilterSchema: Schema<SearchFilter> = s.object<SearchFilter>({
  fields: s.optional(s.array(s.lazy(() => field7Schema))),
  text: s.optional(s.string()),
});
