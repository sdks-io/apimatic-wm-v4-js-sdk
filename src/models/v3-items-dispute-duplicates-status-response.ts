import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemResponse3Schema, type ItemResponse3 } from "./item-response3.js";

export type V3ItemsDisputeDuplicatesStatusResponse = {
  /** Items status included in the list. */
  itemResponse: ItemResponse3[];
};

export const v3ItemsDisputeDuplicatesStatusResponseSchema: Schema<V3ItemsDisputeDuplicatesStatusResponse> =
  s.object<V3ItemsDisputeDuplicatesStatusResponse>({
    itemResponse: s.array(s.lazy(() => itemResponse3Schema)),
  });
