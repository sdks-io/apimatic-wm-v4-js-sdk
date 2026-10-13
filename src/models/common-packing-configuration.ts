import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  commonBoxContentInformationSourceSchema,
  type CommonBoxContentInformationSource,
} from "./common-box-content-information-source.js";
import { commonBoxRequirementsSchema, type CommonBoxRequirements } from "./common-box-requirements.js";
import {
  commonShippingRequirementsSchema,
  type CommonShippingRequirements,
} from "./common-shipping-requirements.js";

/** A way to configure this packing option. */
export type CommonPackingConfiguration = {
  /** The box content information sources that are allowed. */
  boxPackingMethods?: CommonBoxContentInformationSource[];
  /** The requirements for a box in the packing option. */
  boxRequirements?: CommonBoxRequirements;
  /** A list of supported shipping requirements for this packing configuration. */
  shippingRequirements?: CommonShippingRequirements[];
};

export const commonPackingConfigurationSchema: Schema<CommonPackingConfiguration> =
  s.object<CommonPackingConfiguration>({
    boxPackingMethods: s.optional(s.array(s.lazy(() => commonBoxContentInformationSourceSchema))),
    boxRequirements: s.optional(s.lazy(() => commonBoxRequirementsSchema)),
    shippingRequirements: s.optional(s.array(s.lazy(() => commonShippingRequirementsSchema))),
  });
