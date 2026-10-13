import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sellerStatusSchema, type SellerStatus } from "./seller-status.js";

export type Participation = {
  isParticipating?: boolean;
  hasSuspendedListings?: boolean;
  sellerStatus?: SellerStatus;
};

export const participationSchema: Schema<Participation> = s.object<Participation>({
  isParticipating: s.optional(s.boolean()),
  hasSuspendedListings: s.optional(s.boolean()),
  sellerStatus: s.optional(s.lazy(() => sellerStatusSchema)),
});
