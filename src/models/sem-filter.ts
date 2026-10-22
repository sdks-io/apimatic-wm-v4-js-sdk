import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Filtering criteria */
export type SemFilter = {
  /** Field by which the filtering is to be done. */
  field: string;
  /** List of values for the specified field. */
  values: string[];
};

export const semFilterSchema: Schema<SemFilter> = s.object<SemFilter>({
  field: s.string(),
  values: s.array(s.string()),
});
