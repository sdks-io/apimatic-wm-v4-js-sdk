import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentSummarySchema, type DocumentSummary } from "./document-summary.js";
import { pagination3Schema, type Pagination3 } from "./pagination3.js";
import { processingStatusSchema, type ProcessingStatus } from "./processing-status.js";

export type Query = {
  queryId: string;
  query?: string;
  processingStatus: ProcessingStatus;
  createdAt?: Date;
  updatedAt?: Date;
  /** Present only when processingStatus is DONE */
  dataDocuments?: DocumentSummary[];
  pagination?: Pagination3;
};

export const querySchema: Schema<Query> = s.object<Query>({
  queryId: s.string(),
  query: s.optional(s.string()),
  processingStatus: processingStatusSchema,
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  dataDocuments: s.optional(s.array(s.lazy(() => documentSummarySchema))),
  pagination: s.optional(s.lazy(() => pagination3Schema)),
});
