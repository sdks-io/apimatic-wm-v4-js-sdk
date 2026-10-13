import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MultiPackageShipResponse = {
  purchaseOrderId?: string;
  shippedAt?: Date;
  /**
   * Number of `packages[]` entries successfully forwarded to FMS — echoed back so callers can
   * sanity-check against what they sent.
   */
  packagesAccepted?: number;
};

export const multiPackageShipResponseSchema: Schema<MultiPackageShipResponse> =
  s.object<MultiPackageShipResponse>({
    purchaseOrderId: s.optional(s.string()),
    shippedAt: s.optional(s.dateTime()),
    packagesAccepted: s.optional(s.int()),
  });
