import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { feedProcessingSummarySchema, type FeedProcessingSummary } from "./feed-processing-summary.js";
import { processingStatus1Schema, type ProcessingStatus1 } from "./processing-status1.js";

export type Feed = {
  /** Unique identifier for this feed */
  feedId: string;
  /** The type of feed submitted (e.g. LISTINGS_FEED, INVENTORY_FEED) */
  feedType: string;
  /** Marketplace the feed was submitted to (e.g. WALMART_US) */
  marketplaceId?: string;
  /** Timestamp when the feed was received by the server */
  createdAt: Date;
  /** Timestamp when feed processing began; absent until processing starts */
  processingStartedAt?: Date;
  /** Timestamp when feed processing finished; absent until complete */
  processingCompletedAt?: Date;
  /** Current processing status of the feed */
  processingStatus: ProcessingStatus1;
  /**
   * ID of the result document; present only when processingStatus is DONE. Use with GET
   * /feeds/v4/feeds/{feedId}/document.
   */
  resultFeedDocumentId?: string;
  /** Record-level processing counts; present only when processingStatus is DONE */
  feedProcessingSummary?: FeedProcessingSummary;
};

export const feedSchema: Schema<Feed> = s.object<Feed>({
  feedId: s.string(),
  feedType: s.string(),
  marketplaceId: s.optional(s.string()),
  createdAt: s.dateTime(),
  processingStartedAt: s.optional(s.dateTime()),
  processingCompletedAt: s.optional(s.dateTime()),
  processingStatus: processingStatus1Schema,
  resultFeedDocumentId: s.optional(s.string()),
  feedProcessingSummary: s.optional(s.lazy(() => feedProcessingSummarySchema)),
});
