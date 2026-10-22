import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { richMediaAssetPayloadSchema, type RichMediaAssetPayload } from "./rich-media-asset-payload.js";

/** Response contains assets details for rich media asset search results. */
export type AssetsResponse = {
  /** response status */
  status?: string;
  /** Array of rich media asset records matching the query. */
  payload?: RichMediaAssetPayload[];
  /** Number of rich media assets returned in the current response. */
  totalRecords?: number;
  /** Additional response header metadata. Typically an empty object. */
  headerAttributes?: Record<string, unknown>;
  /** Array of error details. Empty array when no errors occurred. */
  errors?: Record<string, unknown>[];
};

export const assetsResponseSchema: Schema<AssetsResponse> = s.object<AssetsResponse>({
  status: s.optional(s.string()),
  payload: s.optional(s.array(s.lazy(() => richMediaAssetPayloadSchema))),
  totalRecords: s.optional(s.int()),
  headerAttributes: s.optional(s.record(s.string(), s.unknown())),
  errors: s.optional(s.array(s.record(s.string(), s.unknown()))),
});
