import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemStatus5Schema, type ItemStatus5 } from "./item-status5.js";

/** Response payload. */
export type GetCategoriesResponsePayload = {
  /** IRP status of the items. */
  itemStatus?: ItemStatus5;
  /** The Category of the items in requested item status. */
  categories?: string[];
};

export const getCategoriesResponsePayloadSchema: Schema<GetCategoriesResponsePayload> =
  s.object<GetCategoriesResponsePayload>({
    itemStatus: s.optional(s.lazy(() => itemStatus5Schema)),
    categories: s.optional(s.array(s.string())),
  });
