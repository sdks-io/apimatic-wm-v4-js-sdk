import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
export const Field2 = {
  Issues: "issues",
  IssueCategory: "issueCategory",
  ItemId: "itemId",
} as const;
export type Field2 = (typeof Field2)[keyof typeof Field2] | (string & {});

export const field2Schema: EnumSchema<Field2> = s.enumOf<Field2>(Field2);
