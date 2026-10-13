import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateInventoryResponse = {
  sellerSku?: string;
  /** Echoed from request — plain integer, unit always EA. */
  quantity?: number;
  updatedAt?: Date;
};

export const updateInventoryResponseSchema: Schema<UpdateInventoryResponse> =
  s.object<UpdateInventoryResponse>({
    sellerSku: s.optional(s.string()),
    quantity: s.optional(s.int()),
    updatedAt: s.optional(s.dateTime()),
  });
