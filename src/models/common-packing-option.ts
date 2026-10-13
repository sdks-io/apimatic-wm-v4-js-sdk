import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonIncentiveSchema, type CommonIncentive } from "./common-incentive.js";
import {
  commonPackingConfigurationSchema,
  type CommonPackingConfiguration,
} from "./common-packing-configuration.js";
import {
  commonShippingConfigurationSchema,
  type CommonShippingConfiguration,
} from "./common-shipping-configuration.js";

/**
 * A packing option contains a set of pack groups plus additional information such as any discounts
 * or fees.
 */
export type CommonPackingOption = {
  /** Discount for the offered option. */
  discounts: CommonIncentive[];
  /**
   * The time at which this packing option is no longer valid. In ISO 8601 datetime format with
   * pattern `yyyy-MM-ddTHH:mm:ss.sssZ`.
   */
  expiration?: Date;
  /** Fee for the offered option. */
  fees: CommonIncentive[];
  /** Packing group IDs. */
  packingGroups: string[];
  /** Identifier of a packing option. */
  packingOptionId: string;
  /** The status of the packing option. Possible values: `OFFERED`, `ACCEPTED`, `EXPIRED`. */
  status: string;
  /** A list of possible configurations for this option. */
  supportedConfigurations: CommonPackingConfiguration[];
  /** List of supported shipping modes. */
  supportedShippingConfigurations: CommonShippingConfiguration[];
};

export const commonPackingOptionSchema: Schema<CommonPackingOption> = s.object<CommonPackingOption>({
  discounts: s.array(s.lazy(() => commonIncentiveSchema)),
  expiration: s.optional(s.dateTime()),
  fees: s.array(s.lazy(() => commonIncentiveSchema)),
  packingGroups: s.array(s.string()),
  packingOptionId: s.string(),
  status: s.string(),
  supportedConfigurations: s.array(s.lazy(() => commonPackingConfigurationSchema)),
  supportedShippingConfigurations: s.array(s.lazy(() => commonShippingConfigurationSchema)),
});
