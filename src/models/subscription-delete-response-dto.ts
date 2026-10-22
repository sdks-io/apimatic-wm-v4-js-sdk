import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubscriptionDeleteResponseDto = {
  /** Unique identifier of the deleted subscription. */
  subscriptionId?: string;
  /** Confirmation message indicating the subscription was deleted. */
  message?: string;
};

export const subscriptionDeleteResponseDtoSchema: Schema<SubscriptionDeleteResponseDto> =
  s.object<SubscriptionDeleteResponseDto>({
    subscriptionId: s.optional(s.string()),
    message: s.optional(s.string()),
  });
