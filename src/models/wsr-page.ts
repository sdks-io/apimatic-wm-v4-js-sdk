import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Pagination configuration for controlling result set size and navigation.
 *
 * The pagination uses offset-based navigation where:
 * - `offset` = starting record position (0-indexed)
 * - `limit` = number of records per page
 *
 * **Internal Conversion**: pageNumber = (offset / limit) + 1
 */
export type WsrPage = {
  /**
   * Maximum number of records to fetch per page.
   *
   * **Constraints**: Must be a positive value **Default**: 10
   *
   * @default 10
   */
  limit?: number;
  /**
   * The starting position for fetching records (0-indexed).
   *
   * **Important**: This is a record offset, NOT a page number.
   * - `offset=0` returns records 1-10 (with `limit=10`)
   * - `offset=10` returns records 11-20 (with `limit=10`)
   *
   * **Default**: 0
   *
   * @default 0
   */
  offset?: number;
};

export const wsrPageSchema: Schema<WsrPage> = s.object<WsrPage>({
  limit: s.defaulted(s.int(), 10),
  offset: s.defaulted(s.int(), 0),
});
