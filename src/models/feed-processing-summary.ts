import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FeedProcessingSummary = {
  /** Total number of records in the submitted feed */
  totalRecordCount?: number;
  /** Number of records processed so far */
  processedRecordCount?: number;
  /** Number of records processed successfully */
  successCount?: number;
  /** Number of records that failed processing */
  errorCount?: number;
  /** Number of records processed with warnings */
  warningCount?: number;
};

export const feedProcessingSummarySchema: Schema<FeedProcessingSummary> = s.object<FeedProcessingSummary>({
  totalRecordCount: s.optional(s.int()),
  processedRecordCount: s.optional(s.int()),
  successCount: s.optional(s.int()),
  errorCount: s.optional(s.int()),
  warningCount: s.optional(s.int()),
});
