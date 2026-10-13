import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the item is available for shipping now, or on a known or an unknown date in the
 * future.
 */
export const AvailabilityType = {
  Now: "NOW",
  FutureWithoutDate: "FUTURE_WITHOUT_DATE",
  FutureWithDate: "FUTURE_WITH_DATE",
} as const;
export type AvailabilityType = (typeof AvailabilityType)[keyof typeof AvailabilityType] | (string & {});

export const availabilityTypeSchema: EnumSchema<AvailabilityType> =
  s.enumOf<AvailabilityType>(AvailabilityType);
