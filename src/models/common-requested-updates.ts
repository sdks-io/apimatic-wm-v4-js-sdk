import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonBoxUpdateInputSchema, type CommonBoxUpdateInput } from "./common-box-update-input.js";
import { commonItemInputSchema, type CommonItemInput } from "./common-item-input.js";

/** Objects that were included in the update request. */
export type CommonRequestedUpdates = {
  /** A list of boxes that will be present in the shipment after the update. */
  boxes?: CommonBoxUpdateInput[];
  /** A list of all items that will be present in the shipment after the update. */
  items?: CommonItemInput[];
};

export const commonRequestedUpdatesSchema: Schema<CommonRequestedUpdates> = s.object<CommonRequestedUpdates>({
  boxes: s.optional(s.array(s.lazy(() => commonBoxUpdateInputSchema))),
  items: s.optional(s.array(s.lazy(() => commonItemInputSchema))),
});
