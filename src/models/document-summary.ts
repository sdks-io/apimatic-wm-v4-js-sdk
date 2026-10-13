import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DocumentSummary = {
  documentId?: string;
};

export const documentSummarySchema: Schema<DocumentSummary> = s.object<DocumentSummary>({
  documentId: s.optional(s.string()),
});
