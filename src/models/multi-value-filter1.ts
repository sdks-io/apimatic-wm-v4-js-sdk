import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type4Schema, type Type4 } from "./type4.js";

export type MultiValueFilter1 = {
  /**
   * MultiValue filter values which has to be included in report.
   *
   * <strong style="color: green;">Market availability: Global</strong>
   */
  values?: string[];
  /**
   * Specifies the column name to which the filter should be applied. Only certain columns in the
   * report support this filter. Refer to the guide section for more details.
   *
   * <strong style="color: green;">Market availability: Global</strong>
   */
  columnName: string;
  /**
   * The type of filter to apply.
   *
   * <strong style="color: green;">Market availability: Global</strong>
   */
  type: Type4;
};

export const multiValueFilter1Schema: Schema<MultiValueFilter1> = s.object<MultiValueFilter1>({
  values: s.optional(s.array(s.string())),
  columnName: s.string(),
  type: type4Schema,
});
