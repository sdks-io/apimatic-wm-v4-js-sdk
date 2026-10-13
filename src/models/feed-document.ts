import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { compressionAlgorithmSchema, type CompressionAlgorithm } from "./compression-algorithm.js";

export type FeedDocument = {
  /** Unique identifier for this feed result document */
  feedDocumentId: string;
  /** Pre-signed URL to download the document (valid 15 minutes) — do not log */
  url: string;
  /** Compression applied to the document; decompress before parsing if present */
  compressionAlgorithm?: CompressionAlgorithm;
};

export const feedDocumentSchema: Schema<FeedDocument> = s.object<FeedDocument>({
  feedDocumentId: s.string(),
  url: s.string(),
  compressionAlgorithm: s.optional(s.lazy(() => compressionAlgorithmSchema)),
});
