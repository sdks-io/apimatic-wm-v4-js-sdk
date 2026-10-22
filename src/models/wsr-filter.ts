import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { field1Schema, type Field1 } from "./field1.js";

/**
 * Filter configuration to narrow down report results.
 *
 * **Validation**: Both field and values are required when a filter is provided.
 */
export type WsrFilter = {
  /**
   * Attribute on which filter needs to be applied.
   *
   * **Supported fields**:
   * - `campaignId`: Filter by campaign identifier(s)
   * - `adGroupId`: Filter by ad group identifier(s)
   * - `creativeId`: Filter by creative identifier(s)
   */
  field: Field1;
  /** List of attribute values to filter on. Multiple values act as an OR condition. */
  values: string[];
};

export const wsrFilterSchema: Schema<WsrFilter> = s.object<WsrFilter>({
  field: field1Schema,
  values: s.array(s.string()),
});
