import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type QueryParams = {
  /**
   * Return order identifier of the return order object.<br><b style='color:green;'>Market
   * availability: Global</b>
   */
  returnOrderId?: string;
  /**
   * A unique ID associated with the sales order for specified customer.<br><b
   * style='color:green;'>Market availability: Global</b>
   */
  customerOrderId?: string;
  /**
   * The status can be specified to query returns with a specific status. Valid values will be
   * Initiated, Completed and Cancelled.<br><b style='color:green;'>Market availability: Global</b>
   */
  status?: string[];
  /**
   * Provides additional attributes related to replacement return orders in the response, if
   * available. These attributes include replacementCustomerOrderID, returnType, rechargeReason, and
   * returnCancellationReason. Allowed values are true or false.<br><b style='color:green;'>Market
   * availability: US</b>
   */
  replacementInfo?: string;
  /**
   * Filters the results to return orders with the specified return type. Possible values are
   * PREORDER, REPLACEMENT, or REFUND.<br><b style='color:green;'>Market availability: US</b>
   */
  returnType?: string[];
  /**
   * Start date for querying all return orders created after that date. Use one of the following
   * UTC, ISO 8601 formats. Date example: '2013-08-16' Timestamp example:
   * '2013-08-16T10:30:15Z'<br><b style='color:green;'>Market availability: Global</b>
   */
  returnCreationStartDate?: string;
  /**
   * Limits the query to return orders created before this returnCreationEndDate. Use one of the
   * following ISO 8601 formats: UTC date or timestamp. Examples: '2016-08-16T10:30:30.155Z' or
   * '2016-08-16'<br><b style='color:green;'>Market availability: Global</b>
   */
  returnCreationEndDate?: string;
  /**
   * Start Date for querying all return orders that were modified after that date. Use one of the
   * following UTC, ISO 8601 formats: Date example: 2013-08-16, Timestamp example:
   * 2013-08-16T10:30:15Z For dates with timezone, use the format 2020-04-17T10:42:41.000+0000 and
   * encode '+' as %20.<br><b style='color:green;'>Market availability: US</b>
   */
  returnLastModifiedStartDate?: string;
  /**
   * Limits the query to the return orders that were modified before this date. Use one of the
   * following UTC, ISO 8601 formats: Date example: 2013-08-16, Timestamp example:
   * 2013-08-18T10:30:15Z For dates with timezone, use the format 2020-04-18T10:42:41.000+0000 and
   * encode '+' as %20.<br><b style='color:green;'>Market availability: US</b>
   */
  returnLastModifiedEndDate?: string;
  /**
   * The number of orders to be returned. Cannot be larger than 200.<br><b
   * style='color:green;'>Market availability: Global</b>
   */
  limit?: number;
  /**
   * Flag to get WFS returns. Valid value is Y.<br><b style='color:green;'>Market availability: MX |
   * CA | CL</b>
   */
  isWfsEnabled?: string;
  /**
   * The starting offset of the first order required in the response. Cannot be greater than
   * 1000.<br><b style='color:green;'>Market availability: MX | CA | CL</b>
   */
  offset?: number;
  /** Unique ID of the Seller.<br><b style='color:green;'>Market availability: US</b> */
  sellerId?: string;
};

export const queryParamsSchema: Schema<QueryParams> = s.object<QueryParams>({
  returnOrderId: s.optional(s.string()),
  customerOrderId: s.optional(s.string()),
  status: s.optional(s.array(s.string())),
  replacementInfo: s.optional(s.string()),
  returnType: s.optional(s.array(s.string())),
  returnCreationStartDate: s.optional(s.string()),
  returnCreationEndDate: s.optional(s.string()),
  returnLastModifiedStartDate: s.optional(s.string()),
  returnLastModifiedEndDate: s.optional(s.string()),
  limit: s.optional(s.int()),
  isWfsEnabled: s.optional(s.string()),
  offset: s.optional(s.int()),
  sellerId: s.optional(s.string()),
  _keysMap: {
    isWfsEnabled: "isWFSEnabled",
  },
});
