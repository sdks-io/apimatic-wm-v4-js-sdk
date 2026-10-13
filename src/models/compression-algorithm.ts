import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Compression applied to the document; decompress before parsing if present */
export const CompressionAlgorithm = {
  Gzip: "GZIP",
} as const;
export type CompressionAlgorithm =
  | (typeof CompressionAlgorithm)[keyof typeof CompressionAlgorithm]
  | (string & {});

export const compressionAlgorithmSchema: EnumSchema<CompressionAlgorithm> =
  s.enumOf<CompressionAlgorithm>(CompressionAlgorithm);
