import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { visibleVideoPayloadSchema, type VisibleVideoPayload } from "../visible-video-payload.js";
import { visible360ImagePayloadSchema, type Visible360ImagePayload } from "../visible360-image-payload.js";

/**
 * The visible block for rich media. The expected structure depends on
 * `SupplierItemFeedHeader.subCategory`. Discriminator is based on
 * `SupplierItemFeedHeader.subCategory`
 */
export type Visible = VisibleVideoPayload | Visible360ImagePayload;

export const visibleSchema: Schema<Visible> = s.of<Visible>(
  s.union([s.lazy(() => visibleVideoPayloadSchema), s.lazy(() => visible360ImagePayloadSchema)]),
);
