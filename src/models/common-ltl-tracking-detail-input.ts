import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains input information to update LTL tracking information. */
export type CommonLtlTrackingDetailInput = {
  /** The number of the carrier shipment acknowledgement document. */
  billOfLadingNumber?: string;
  /** Number associated with the freight bill. */
  freightBillNumber: string[];
};

export const commonLtlTrackingDetailInputSchema: Schema<CommonLtlTrackingDetailInput> =
  s.object<CommonLtlTrackingDetailInput>({
    billOfLadingNumber: s.optional(s.string()),
    freightBillNumber: s.array(s.string()),
  });
