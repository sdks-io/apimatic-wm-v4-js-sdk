import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  commonSpdTrackingItemInputSchema,
  type CommonSpdTrackingItemInput,
} from "./common-spd-tracking-item-input.js";

/** Contains input information to update SPD tracking information. */
export type CommonSpdTrackingDetailInput = {
  /** List of Small Parcel Delivery (SPD) tracking items input. */
  spdTrackingItems: CommonSpdTrackingItemInput[];
};

export const commonSpdTrackingDetailInputSchema: Schema<CommonSpdTrackingDetailInput> =
  s.object<CommonSpdTrackingDetailInput>({
    spdTrackingItems: s.array(s.lazy(() => commonSpdTrackingItemInputSchema)),
  });
