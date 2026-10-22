import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type QueryParamsMx = {
  /**
   * Return order identifier of the return order object as part of an array. This is the same as RMA
   * number.<br><b style='color:green;'>Market availability: MX</b>
   */
  returnOrderId?: string;
  /**
   * A unique ID associated with the sales order for the specified customer.<br><b
   * style='color:green;'>Market availability: MX</b>
   */
  customerOrderId?: string;
  /**
   * Start Date for querying all return orders that were created after that date. Use one of the
   * following UTC, ISO 8601 formats: Date example: 2013-08-16, Timestamp example:
   * 2013-08-18T10:30:15Z For dates with timezone, use the format 2020-04-18T10:42:41.000+0000 and
   * encode '+' as %20.<br><b style='color:green;'>Market availability: MX</b>
   */
  returnCreationStartDate?: string;
  /**
   * Limits the query to the return orders that were created before this returnCreationEndDate. Use
   * one of the following UTC, ISO 8601 formats: Date example: 2013-08-16, Timestamp example:
   * 2013-08-18T10:30:15Z For dates with timezone, use the format 2020-04-18T10:42:41.000+0000 and
   * encode '+' as %20.<br><b style='color:green;'>Market availability: MX</b>
   */
  returnCreationEndDate?: string;
  /**
   * The status can be specified to query returns with a specific status. Valid values will be
   * Initiated, Completed and Cancelled.<br><b style='color:green;'>Market availability: MX</b>
   */
  status?: string[];
  /**
   * The number of orders to be returned. Cannot be larger than 200.<br><b
   * style='color:green;'>Market availability: MX</b>
   */
  limit?: number;
  /**
   * Flag to get WFS returns. Valid value is Y.<br><b style='color:green;'>Market availability:
   * MX</b>
   */
  isWfsEnabled?: string;
  /**
   * The cursor from which the next set of records will be retrieved.<br><b
   * style='color:green;'>Market availability: MX</b>
   */
  cursorMark?: string;
};

export const queryParamsMxSchema: Schema<QueryParamsMx> = s.object<QueryParamsMx>({
  returnOrderId: s.optional(s.string()),
  customerOrderId: s.optional(s.string()),
  returnCreationStartDate: s.optional(s.string()),
  returnCreationEndDate: s.optional(s.string()),
  status: s.optional(s.array(s.string())),
  limit: s.optional(s.int()),
  isWfsEnabled: s.optional(s.string()),
  cursorMark: s.optional(s.string()),
  _keysMap: {
    isWfsEnabled: "isWFSEnabled",
  },
});
