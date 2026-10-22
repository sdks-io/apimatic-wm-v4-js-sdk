import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemStatus5Schema, type ItemStatus5 } from "./item-status5.js";

export type GetCategoriesRequest = {
  /** IRP status of the items. */
  itemStatus?: ItemStatus5;
};

export const getCategoriesRequestSchema: Schema<GetCategoriesRequest> = s.object<GetCategoriesRequest>({
  itemStatus: s.optional(s.lazy(() => itemStatus5Schema)),
});
