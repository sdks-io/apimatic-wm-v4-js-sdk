import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error3Schema, type Error3 } from "./error3.js";
import { feedStatusSchema, type FeedStatus } from "./feed-status.js";
import { ingestionErrorsSchema, type IngestionErrors } from "./ingestion-errors.js";
import { itemDetails5Schema, type ItemDetails5 } from "./item-details5.js";

export type V3FeedsResponse1 = {
  errors?: Error3[];
  /** A unique ID used for tracking the Feed File. */
  feedId?: string;
  /** Can be one of the following: RECEIVED, INPROGRESS, PROCESSED, or ERROR */
  feedStatus?: FeedStatus;
  /** List of errors for an item. */
  ingestionErrors?: IngestionErrors;
  /** The number of items received in the feed. */
  itemsReceived?: number;
  /** The number of items in the feed that processed successfully. */
  itemsSucceeded?: number;
  /** The number of items in the feed that failed due to a data or system error. */
  itemsFailed?: number;
  /** The number of items in the feed that are still processing. */
  itemsProcessing?: number;
  /**
   * The object response to the starting number, where 0 is the first entity available for request.
   */
  offset?: number;
  /** The number of items returned. Cannot be greater than 1000. */
  limit?: number;
  /** List of ingestion status details for items in the feed. */
  itemDetails?: ItemDetails5;
};

export const v3FeedsResponse1Schema: Schema<V3FeedsResponse1> = s.object<V3FeedsResponse1>({
  errors: s.optional(s.array(s.lazy(() => error3Schema))),
  feedId: s.optional(s.string()),
  feedStatus: s.optional(s.lazy(() => feedStatusSchema)),
  ingestionErrors: s.optional(s.lazy(() => ingestionErrorsSchema)),
  itemsReceived: s.optional(s.int()),
  itemsSucceeded: s.optional(s.int()),
  itemsFailed: s.optional(s.int()),
  itemsProcessing: s.optional(s.int()),
  offset: s.optional(s.int()),
  limit: s.optional(s.int()),
  itemDetails: s.optional(s.lazy(() => itemDetails5Schema)),
});
