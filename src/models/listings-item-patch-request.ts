import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { patchOperationSchema, type PatchOperation } from "./patch-operation.js";

export type ListingsItemPatchRequest = {
  productType: string;
  patches: PatchOperation[];
};

export const listingsItemPatchRequestSchema: Schema<ListingsItemPatchRequest> =
  s.object<ListingsItemPatchRequest>({
    productType: s.string(),
    patches: s.array(s.lazy(() => patchOperationSchema)),
  });
