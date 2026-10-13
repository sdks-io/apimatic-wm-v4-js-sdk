import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { availabilityTypeSchema, type AvailabilityType } from "./availability-type.js";

/** The time range in which an item will likely be shipped once an order has been placed. */
export type DetailedShippingTimeType = {
  /**
   * The minimum time, in hours, that the item will likely be shipped after the order has been
   * placed.
   */
  minimumHours?: number;
  /**
   * The maximum time, in hours, that the item will likely be shipped after the order has been
   * placed.
   */
  maximumHours?: number;
  /** The date when the item will be available for shipping. */
  availableDate?: string;
  /**
   * Indicates whether the item is available for shipping now, or on a known or an unknown date in
   * the future.
   */
  availabilityType?: AvailabilityType;
};

export const detailedShippingTimeTypeSchema: Schema<DetailedShippingTimeType> =
  s.object<DetailedShippingTimeType>({
    minimumHours: s.optional(s.int()),
    maximumHours: s.optional(s.int()),
    availableDate: s.optional(s.string()),
    availabilityType: s.optional(s.lazy(() => availabilityTypeSchema)),
  });
