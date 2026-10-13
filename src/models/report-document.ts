import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { compressionAlgorithmSchema, type CompressionAlgorithm } from "./compression-algorithm.js";

export type ReportDocument = {
  reportDocumentId: string;
  /** Pre-signed URL to download the report — do not log */
  url: string;
  compressionAlgorithm?: CompressionAlgorithm;
};

export const reportDocumentSchema: Schema<ReportDocument> = s.object<ReportDocument>({
  reportDocumentId: s.string(),
  url: s.string(),
  compressionAlgorithm: s.optional(s.lazy(() => compressionAlgorithmSchema)),
});
