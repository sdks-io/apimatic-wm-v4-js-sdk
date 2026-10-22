import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RowFilter = {
  type: string;
  values: string[];
  columnName: string;
};

export const rowFilterSchema: Schema<RowFilter> = s.object<RowFilter>({
  type: s.string(),
  values: s.array(s.string()),
  columnName: s.string(),
});
