import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the individual feed. */
export type FeedRecord = {
  /** A unique ID used for tracking the Feed File. */
  feedId?: string;
  /** The source of the feed. */
  feedSource?: string;
  /** Indicates the feed type. */
  feedType?: string;
  /** Indicates the seller ID. */
  partnerId?: string;
  /** The number of items received. */
  itemsReceived?: number;
  /**
   * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
   * during onboarding.
   */
  itemsSucceeded?: number;
  /** The number of items in the feed that failed due to a data or system error. */
  itemsFailed?: number;
  /** The number of items in the feed that are still in progress. */
  itemsProcessing?: number;
  /**
   * Can be one of the following: RECEIVED, INPROGRESS, PROCESSED, or ERROR. For details, see the
   * definitions listed under 'Feed Statuses' at the beginning of this section.
   */
  feedStatus?: string;
  /** The date and time the feed was submitted. Format: yyyymmddThh:mm:ss.xxxz */
  feedDate?: number;
  /** The batch ID for the feed, if provided. */
  batchId?: string;
  /** The most recent time the feed was modified. Format: yyyymmddThh:mm:ss.xxxz */
  modifiedDtm?: number;
};

export const feedRecordSchema: Schema<FeedRecord> = s.object<FeedRecord>({
  feedId: s.optional(s.string()),
  feedSource: s.optional(s.string()),
  feedType: s.optional(s.string()),
  partnerId: s.optional(s.string()),
  itemsReceived: s.optional(s.int()),
  itemsSucceeded: s.optional(s.int()),
  itemsFailed: s.optional(s.int()),
  itemsProcessing: s.optional(s.int()),
  feedStatus: s.optional(s.string()),
  feedDate: s.optional(s.int()),
  batchId: s.optional(s.string()),
  modifiedDtm: s.optional(s.int()),
});
