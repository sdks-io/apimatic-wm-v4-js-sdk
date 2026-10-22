import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemIngestionStatusSchema, type ItemIngestionStatus } from "./item-ingestion-status.js";

/** List of ingestion status details for items in the feed. */
export type ItemDetails5 = {
  /** The ingestion status of an individual item. */
  itemIngestionStatus?: ItemIngestionStatus[];
};

export const itemDetails5Schema: Schema<ItemDetails5> = s.object<ItemDetails5>({
  itemIngestionStatus: s.optional(s.array(s.lazy(() => itemIngestionStatusSchema))),
});
