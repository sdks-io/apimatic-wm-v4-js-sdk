import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { carrierConfigDtoSchema, type CarrierConfigDto } from "./carrier-config-dto.js";

/** Comprises a list of all fulfillment center IDs along with their respective configurations. */
export type FcConfigDto = {
  /** List of Fulfillment Center Ids which are used as shipping nodes. */
  shipNodes?: string[];
  /**
   * Flag denoting if the Fulfillment Center config settings are overriding account level settings
   */
  isOverridden?: boolean;
  /** List of Fulfillment Center Ids which are used as shipping nodes. */
  carrierConfigs?: CarrierConfigDto[];
};

export const fcConfigDtoSchema: Schema<FcConfigDto> = s.object<FcConfigDto>({
  shipNodes: s.optional(s.array(s.string())),
  isOverridden: s.optional(s.boolean()),
  carrierConfigs: s.optional(s.array(s.lazy(() => carrierConfigDtoSchema))),
});
