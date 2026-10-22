import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3PriceIncentivesWfpreferenceResponse = {
  /**
   * Status of autoEnrollEnabled true or false.<br><b style='color:green;'>Market availability:
   * US</b>
   */
  autoEnrollEnabled?: boolean;
  /** Status of isDisabled true or false.<br><b style='color:green;'>Market availability: US</b> */
  isDisabled?: boolean;
};

export const v3PriceIncentivesWfpreferenceResponseSchema: Schema<V3PriceIncentivesWfpreferenceResponse> =
  s.object<V3PriceIncentivesWfpreferenceResponse>({
    autoEnrollEnabled: s.optional(s.boolean()),
    isDisabled: s.optional(s.boolean()),
  });
