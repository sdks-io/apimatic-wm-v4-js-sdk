import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Pagination configuration for controlling result set size and navigation.
 *
 * **Defaults when page is not provided**: offset=0, limit=100
 *
 * Both `offset` and `limit` are required when the `page` object is provided.
 */
export type DiagnosticPage = {
  /**
   * The starting position for fetching records (0-based).
   *
   * **Constraints**: Must be zero or a positive value **Default**: 0 (when page is not provided)
   *
   * @default 0
   */
  offset?: number;
  /**
   * Maximum number of records to fetch per page.
   *
   * **Constraints**: Must be between 1 and 100 **Default**: 100 (when page is not provided)
   *
   * @default 100
   */
  limit?: number;
};

export const diagnosticPageSchema: Schema<DiagnosticPage> = s.object<DiagnosticPage>({
  offset: s.defaulted(s.int(), 0),
  limit: s.defaulted(s.int(), 100),
});
