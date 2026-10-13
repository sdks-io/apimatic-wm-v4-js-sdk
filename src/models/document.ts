import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { compressionAlgorithmSchema, type CompressionAlgorithm } from "./compression-algorithm.js";

export type Document = {
  documentId: string;
  /** Pre-signed URL to download query result data — do not log */
  url: string;
  compressionAlgorithm?: CompressionAlgorithm;
};

export const documentSchema: Schema<Document> = s.object<Document>({
  documentId: s.string(),
  url: s.string(),
  compressionAlgorithm: s.optional(s.lazy(() => compressionAlgorithmSchema)),
});
