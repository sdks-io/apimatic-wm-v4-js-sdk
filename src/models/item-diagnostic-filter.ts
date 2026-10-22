import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { field2Schema, type Field2 } from "./field2.js";

/**
 * Filter configuration to narrow down item diagnostic results.
 *
 * **Validation Rules**:
 * - Both `field` and `values` are required when a filter is provided
 * - Each filter field must be specified only once (no duplicate fields)
 * - Each filter field supports a maximum of 100 values
 * - Filter values are case-insensitive
 * - Multiple values within a filter act as an OR condition
 * - Multiple filters are combined with AND logic
 */
export type ItemDiagnosticFilter = {
  /**
   * Field by which the filtering is to be done.
   *
   * **Supported fields**:
   * - `issues`: Filter by specific issue types (For example, `ITEM_OUT_OF_STOCK`, `TITLE_TOO_LONG`)
   * - `issueCategory`: Filter by issue severity category (`LIMITED`, `BLOCKED`, `NO_ISSUES`)
   * - `itemId`: Filter by Walmart item IDs (numeric strings). Currently filters within items in
   *   active SEM campaigns. *In a future release, this will also support items not yet associated
   *   with any campaign.*
   */
  field: Field2;
  /**
   * List of values for the specified field. Multiple values act as an OR condition within the
   * filter.
   *
   * **Constraints**: At least 1 value required, maximum 100 values per filter.
   *
   * **Valid values by field**:
   * - `issues`: Any valid `issueType` enum value (Refer to the issue types endpoint)
   * - `issueCategory`: `LIMITED`, `BLOCKED`, `NO_ISSUES`
   * - `itemId`: Numeric string item IDs (currently scoped to items in active SEM campaigns)
   */
  values: string[];
};

export const itemDiagnosticFilterSchema: Schema<ItemDiagnosticFilter> = s.object<ItemDiagnosticFilter>({
  field: field2Schema,
  values: s.array(s.string()),
});
