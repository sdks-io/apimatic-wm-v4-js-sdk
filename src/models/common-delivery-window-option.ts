import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains information pertaining to a delivery window option. */
export type CommonDeliveryWindowOption = {
  /**
   * The type of delivery window availability. Values: `AVAILABLE`, `BLOCKED`, `CONGESTED`,
   * `DISCOUNTED`.
   */
  availabilityType: string;
  /** Identifier of a delivery window option. */
  deliveryWindowOptionId: string;
  /**
   * The time at which this delivery window option ends. In ISO 8601 datetime format with pattern
   * `yyyy-MM-ddTHH:mmZ`.
   */
  endDate: Date;
  /**
   * The time at which this delivery window option starts. In ISO 8601 datetime format with pattern
   * `yyyy-MM-ddTHH:mmZ`.
   */
  startDate: Date;
  /**
   * The time at which this delivery window option is no longer valid. In ISO 8601 datetime format
   * with pattern `yyyy-MM-ddTHH:mmZ`.
   */
  validUntil: Date;
};

export const commonDeliveryWindowOptionSchema: Schema<CommonDeliveryWindowOption> =
  s.object<CommonDeliveryWindowOption>({
    availabilityType: s.string(),
    deliveryWindowOptionId: s.string(),
    endDate: s.dateTime(),
    startDate: s.dateTime(),
    validUntil: s.dateTime(),
  });
