import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SellerInfo = {
  storeFrontUrl?: string;
  sellerStatus?: string;
  paymentStatus?: string;
  tenure?: number;
};

export const sellerInfoSchema: Schema<SellerInfo> = s.object<SellerInfo>({
  storeFrontUrl: s.optional(s.string()),
  sellerStatus: s.optional(s.string()),
  paymentStatus: s.optional(s.string()),
  tenure: s.optional(s.int()),
});
