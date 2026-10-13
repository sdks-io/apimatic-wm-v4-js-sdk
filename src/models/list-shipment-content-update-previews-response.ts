import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  commonContentUpdatePreviewSchema,
  type CommonContentUpdatePreview,
} from "./common-content-update-preview.js";
import { commonPaginationSchema, type CommonPagination } from "./common-pagination.js";

/** The `listShipmentContentUpdatePreviews` response. */
export type ListShipmentContentUpdatePreviewsResponse = {
  /** A list of content update previews in a shipment. */
  contentUpdatePreviews: CommonContentUpdatePreview[];
  /** Contains tokens to fetch from a certain page. */
  pagination?: CommonPagination;
};

export const listShipmentContentUpdatePreviewsResponseSchema: Schema<ListShipmentContentUpdatePreviewsResponse> =
  s.object<ListShipmentContentUpdatePreviewsResponse>({
    contentUpdatePreviews: s.array(s.lazy(() => commonContentUpdatePreviewSchema)),
    pagination: s.optional(s.lazy(() => commonPaginationSchema)),
  });
