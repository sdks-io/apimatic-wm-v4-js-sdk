import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonBoxUpdateInputSchema, type CommonBoxUpdateInput } from "./common-box-update-input.js";
import { commonItemInputSchema, type CommonItemInput } from "./common-item-input.js";

/** The `generateShipmentContentUpdatePreviews` request. */
export type GenerateShipmentContentUpdatePreviewsRequest = {
  /** A list of boxes that will be present in the shipment after the update. */
  boxes: CommonBoxUpdateInput[];
  /** A list of all items that will be present in the shipment after the update. */
  items: CommonItemInput[];
};

export const generateShipmentContentUpdatePreviewsRequestSchema: Schema<GenerateShipmentContentUpdatePreviewsRequest> =
  s.object<GenerateShipmentContentUpdatePreviewsRequest>({
    boxes: s.array(s.lazy(() => commonBoxUpdateInputSchema)),
    items: s.array(s.lazy(() => commonItemInputSchema)),
  });
