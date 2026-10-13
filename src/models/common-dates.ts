import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonWindowSchema, type CommonWindow } from "./common-window.js";

/** Specifies the date that the seller expects their shipment will be shipped. */
export type CommonDates = {
  /** Contains a start and end DateTime representing a time range. */
  readyToShipWindow?: CommonWindow;
};

export const commonDatesSchema: Schema<CommonDates> = s.object<CommonDates>({
  readyToShipWindow: s.optional(s.lazy(() => commonWindowSchema)),
});
