import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Sorting criteria */
export type SemSort = {
  /** Field to sort by. */
  field: string;
  /** Sort direction. Allowed values: ASC, DESC. */
  order: string;
};

export const semSortSchema: Schema<SemSort> = s.object<SemSort>({
  field: s.string(),
  order: s.string(),
});
