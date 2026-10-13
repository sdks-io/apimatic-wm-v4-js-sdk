import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Selected delivery window attributes. */
export type CommonSelectedDeliveryWindow = {
  /**
   * The type of delivery window availability. Values: `AVAILABLE`, `BLOCKED`, `CONGESTED`,
   * `DISCOUNTED`.
   */
  availabilityType: string;
  /** Identifier of a delivery window option. */
  deliveryWindowOptionId: string;
  /** The timestamp at which this window can no longer be edited. */
  editableUntil?: Date;
  /** The end timestamp of the window. */
  endDate: Date;
  /** The start timestamp of the window. */
  startDate: Date;
};

export const commonSelectedDeliveryWindowSchema: Schema<CommonSelectedDeliveryWindow> =
  s.object<CommonSelectedDeliveryWindow>({
    availabilityType: s.string(),
    deliveryWindowOptionId: s.string(),
    editableUntil: s.optional(s.dateTime()),
    endDate: s.dateTime(),
    startDate: s.dateTime(),
  });
