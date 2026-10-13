import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  commonLtlTrackingDetailInputSchema,
  type CommonLtlTrackingDetailInput,
} from "./common-ltl-tracking-detail-input.js";
import {
  commonSpdTrackingDetailInputSchema,
  type CommonSpdTrackingDetailInput,
} from "./common-spd-tracking-detail-input.js";

/** Tracking information input for LTL and SPD shipments. */
export type CommonTrackingDetailsInput = {
  /** Contains input information to update LTL tracking information. */
  ltlTrackingDetail?: CommonLtlTrackingDetailInput;
  /** Contains input information to update SPD tracking information. */
  spdTrackingDetail?: CommonSpdTrackingDetailInput;
};

export const commonTrackingDetailsInputSchema: Schema<CommonTrackingDetailsInput> =
  s.object<CommonTrackingDetailsInput>({
    ltlTrackingDetail: s.optional(s.lazy(() => commonLtlTrackingDetailInputSchema)),
    spdTrackingDetail: s.optional(s.lazy(() => commonSpdTrackingDetailInputSchema)),
  });
